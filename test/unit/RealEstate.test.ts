const { assert, expect } = require("chai");
const { network, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../../helper-hardhat-config");

// types
import { Signer } from "ethers";
import { BlockEstate, BasicNft } from "../../typechain-types";

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("BlockEstate Unit Tests", function () {
          let blockEstate: BlockEstate, blockEstateContract: BlockEstate, basicNft: BasicNft;
          const PRICE = ethers.utils.parseEther("0.1");
          const TOKEN_ID = 0;

          let deployer: Signer;
          let user: Signer;

          beforeEach(async () => {
              const accounts = await ethers.getSigners(); // could also do with getNamedAccounts
              deployer = accounts[0];
              user = accounts[1];
              await deployments.fixture(["all"]);
              blockEstateContract = await ethers.getContract("BlockEstate");
              blockEstate = blockEstateContract.connect(deployer);
              basicNft = await ethers.getContract("BasicNft");
              await basicNft.mintNft();
              await basicNft.approve(blockEstateContract.address, TOKEN_ID);
          });

          describe("listItem", function () {
              it("emits an event after listing an item", async function () {
                  expect(await blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE)).to.emit(
                      "ItemListed"
                  );
              });
              it("exclusively items that haven't been listed", async function () {
                  await blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE);
                  //   await expect(
                  //       blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE)
                  //   ).to.be.revertedWithCustomError(blockEstate, "AlreadyListed")
                  await expect(blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE))
                      .to.be.revertedWithCustomError(blockEstate, "AlreadyListed")
                      .withArgs(basicNft.address, TOKEN_ID);
              });
              it("exclusively allows owners to list", async function () {
                  blockEstate = blockEstateContract.connect(user);
                  await basicNft.approve(user.getAddress(), TOKEN_ID);
                  await expect(
                      blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE)
                  ).to.be.revertedWithCustomError(blockEstate, "NotOwner");
              });
              it("needs approvals to list item", async function () {
                  await basicNft.approve(ethers.constants.AddressZero, TOKEN_ID);
                  await expect(
                      blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE)
                  ).to.be.revertedWithCustomError(blockEstate, "NotApprovedForMarketplace");
              });
              it("Updates listing with seller and price", async function () {
                  await blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE);
                  const listing = await blockEstate.getListing(basicNft.address, TOKEN_ID);
                  assert(listing.price.toString() == PRICE.toString());
                  assert(listing.seller.toString() == (await deployer.getAddress()));
              });
          });
          describe("cancelListing", function () {
              it("reverts if there is no listing", async function () {
                  await expect(
                      blockEstate.cancelListing(basicNft.address, TOKEN_ID)
                  ).to.be.revertedWithCustomError(blockEstate, 'NotListed').withArgs(basicNft.address, TOKEN_ID);
              });
              it("reverts if anyone but the owner tries to call", async function () {
                  await blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE);
                  blockEstate = blockEstateContract.connect(user);
                  await basicNft.approve(user.getAddress(), TOKEN_ID);
                  await expect(
                      blockEstate.cancelListing(basicNft.address, TOKEN_ID)
                  ).to.be.revertedWithCustomError(blockEstate, "NotOwner");
              });
              it("emits event and removes listing", async function () {
                  await blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE);
                  expect(await blockEstate.cancelListing(basicNft.address, TOKEN_ID)).to.emit(
                      "ItemCanceled"
                  );
                  const listing = await blockEstate.getListing(basicNft.address, TOKEN_ID);
                  assert(listing.price.toString() == "0");
              });
          });
          describe("buyItem", function () {
              it("reverts if the item isnt listed", async function () {
                  await expect(
                      blockEstate.buyItem(basicNft.address, TOKEN_ID)
                  ).to.be.revertedWithCustomError(blockEstate, "NotListed");
              });
              it("reverts if the price isnt met", async function () {
                  await blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE);
                  await expect(
                      blockEstate.buyItem(basicNft.address, TOKEN_ID)
                  ).to.be.revertedWithCustomError(blockEstate, "PriceNotMet");
              });
              it("transfers the nft to the buyer and updates internal proceeds record", async function () {
                  await blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE);
                  blockEstate = blockEstateContract.connect(user);
                  expect(
                      await blockEstate.buyItem(basicNft.address, TOKEN_ID, { value: PRICE })
                  ).to.emit("ItemBought");
                  const newOwner = await basicNft.ownerOf(TOKEN_ID);
                  const deployerProceeds = await blockEstate.getProceeds(deployer.getAddress());
                  assert(newOwner.toString() == (await user.getAddress()));
                  assert(deployerProceeds.toString() == PRICE.toString());
              });
          });
          describe("updateListing", function () {
              it("must be owner and listed", async function () {
                  await expect(
                      blockEstate.updateListing(basicNft.address, TOKEN_ID, PRICE)
                  ).to.be.revertedWithCustomError(blockEstate, "NotListed");
                  await blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE);
                  blockEstate = blockEstateContract.connect(user);
                  await expect(
                      blockEstate.updateListing(basicNft.address, TOKEN_ID, PRICE)
                  ).to.be.revertedWithCustomError(blockEstate, "NotOwner");
              });
              it("updates the price of the item", async function () {
                  const updatedPrice = ethers.utils.parseEther("0.2");
                  await blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE);
                  expect(
                      await blockEstate.updateListing(basicNft.address, TOKEN_ID, updatedPrice)
                  ).to.emit("ItemListed");
                  const listing = await blockEstate.getListing(basicNft.address, TOKEN_ID);
                  assert(listing.price.toString() == updatedPrice.toString());
              });
          });
          describe("withdrawProceeds", function () {
              it("doesn't allow 0 proceed withdrawls", async function () {
                  await expect(blockEstate.withdrawProceeds()).to.be.revertedWithCustomError(
                      blockEstate,
                      "NoProceeds"
                  );
              });
              it("withdraws proceeds", async function () {
                  await blockEstate.listItem(basicNft.address, TOKEN_ID, PRICE);
                  blockEstate = blockEstateContract.connect(user);
                  await blockEstate.buyItem(basicNft.address, TOKEN_ID, { value: PRICE });
                  blockEstate = blockEstateContract.connect(deployer);

                  const deployerProceedsBefore = await blockEstate.getProceeds(
                      deployer.getAddress()
                  );
                  const deployerBalanceBefore = await deployer.getBalance();
                  const txResponse = await blockEstate.withdrawProceeds();
                  const transactionReceipt = await txResponse.wait(1);
                  const { gasUsed, effectiveGasPrice } = transactionReceipt;
                  const gasCost = gasUsed.mul(effectiveGasPrice);
                  const deployerBalanceAfter = await deployer.getBalance();

                  assert(
                      deployerBalanceAfter.add(gasCost).toString() ==
                          deployerProceedsBefore.add(deployerBalanceBefore).toString()
                  );
              });
          });
      });
