import { Address, log } from "@graphprotocol/graph-ts";
import {
    PropertyExpired as PropertyExpiredEvent,
    PropertyMinted as PropertyMintedEvent,
    PropertyNFT
} from "../generated/PropertyNFT/PropertyNFT";
import {
    User,
    Property,
    PropertyForSale,
    Transaction
} from "../generated/schema";


export function handlePropertyExpired(event: PropertyExpiredEvent): void {

  let id = event.params.tokenId.toHex();
  let property = Property.load(id)!;

  property.status = "INACTIVE";
  property.owner = Address.fromString(
    "0x000000000000000000000000000000000000dEaD"
);

  property.save();
}

export function handlePropertyMinted(event: PropertyMintedEvent): void {
    let propertyNFTContract = PropertyNFT.bind(event.address);
    let tokenURI = propertyNFTContract.tokenURI(event.params.tokenId);

    let id = event.params.tokenId.toHex();
    let property = new Property(id);

    property.owner = event.params.owner;
    property.ipfsURL = tokenURI;
    property.status = "ACTIVE";

    property.save();
    // log.error("Data couldn't be retrieved from IPFS Network", []);
}
