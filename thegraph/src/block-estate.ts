import {
    PropertyListed as PropertyListedEvent,
    PropertyCanceled as PropertyCanceledEvent,
    PropertyInterested as PropertyInterestedEvent,
    PropertyVerified as PropertyVerifiedEvent,
    PropertyTransaction as PropertyTransactionEvent,
    PropertyOwnershipTransfer as PropertyOwnershipTransferEvent,
} from "../generated/BlockEstate/BlockEstate";

import {
    User,
    Property,
    PropertyForSale,
    Transaction
} from "../generated/schema";

export function handlePropertyListed(event: PropertyListedEvent): void {
    let id = event.params.tokenId.toHex();

    let propertyForSale = PropertyForSale.load(id);

    if (!propertyForSale) {
        propertyForSale = new PropertyForSale(id);
    }

    propertyForSale.property = id;

    propertyForSale.price = event.params.price;
    propertyForSale.status = "LISTED";

    propertyForSale.save();
}

export function handlePropertyCancelled(event: PropertyCanceledEvent): void {
    let id = event.params.tokenId.toHex();
    let propertyForSale = PropertyForSale.load(id)!;

    propertyForSale.status = "CANCELLED";
    propertyForSale.save();
}

export function handlePropertyInterested(event: PropertyInterestedEvent): void {
    let id = event.params.tokenId.toHex();
    let propertyForSale = PropertyForSale.load(id)!;

    let address = event.params.buyer;
    let user = User.load(address);

    if(!user)
    {
        user = new User(address);
    }

    propertyForSale.buyer = address;
    propertyForSale.status = "INTERESTED";

    propertyForSale.save();
    user.save();
}

export function handlePropertyVerified(event: PropertyVerifiedEvent): void {
    let id = event.params.tokenId.toHex();
    let propertyForSale = PropertyForSale.load(id)!;

    propertyForSale.status = "VERIFIED";

    propertyForSale.save();
}

export function handlePropertyTransaction(event: PropertyTransactionEvent): void {
    let id = event.params.tokenId.toHex();
    let propertyForSale = PropertyForSale.load(id)!;

    let txnHash = event.transaction.hash.toHex();
    let transaction = new Transaction(txnHash);

    propertyForSale.status = "TRANSFERRING";
    transaction.from = event.transaction.from;
    transaction.to = event.params.buyer;
    transaction.amount = propertyForSale.price;
    transaction.timestamp = event.block.timestamp;

    propertyForSale.save();
    transaction.save();
}

export function handlePropertyOwnershipTransfer(event: PropertyOwnershipTransferEvent): void {
    let id = event.params.oldTokenId.toHex();
    let oldProperty = Property.load(id)!;
    let propertyForSale = PropertyForSale.load(id)!

    propertyForSale.status = "COMPLETED";
    oldProperty.status = "INACTIVE";
    oldProperty.owner = null;

    propertyForSale.save();
    oldProperty.save();

    let newId = event.params.newTokenId;
    let newProperty = new Property(newId.toHex());

    newProperty.owner = propertyForSale.buyer;
    newProperty.ipfsURL = event.params.tokenURI;
    newProperty.status = "ACTIVE";

    newProperty.save();
}
    // entity.blockNumber = event.block.number;
    // entity.blockTimestamp = event.block.timestamp;
    // entity.transactionHash = event.transaction.hash;