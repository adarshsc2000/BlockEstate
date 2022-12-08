import { ethers } from "hardhat";

async function main() {

  const lockedAmount = ethers.utils.parseEther("0.000001");

  const realEstateContract = await ethers.getContractFactory("RealEstate");
  const realEstateDeploy = await realEstateContract.deploy();
  console.log(`Deploying Contract.....`);

  await realEstateDeploy.deployed();

  console.log(`Contract Deployed to ${realEstateDeploy.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
