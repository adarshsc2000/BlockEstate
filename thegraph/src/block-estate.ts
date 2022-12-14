import { BigInt, Address } from "@graphprotocol/graph-ts";

import {
    PropertyBought as PropertyBoughtEvent,
    PropertyCanceled as PropertyCanceledEvent,
    PropertyListed as PropertyListedEvent
} from "../generated/BlockEstate/BlockEstate";

import {
    PropertyListed,
    ActiveProperty,
    PropertyBought,
    PropertyCanceled
} from "../generated/schema";

export function handlePropertyListed(event: PropertyListedEvent): void {
    let propertyListed = PropertyListed.load(
        getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
    let activeProperty = ActiveProperty.load(
        getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );

    if (!propertyListed) {
        propertyListed = new PropertyListed(
            getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
        );
    }

    if (!activeProperty) {
        activeProperty = new ActiveProperty(
            getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
        );
    }
    propertyListed.seller = event.params.seller;
    activeProperty.seller = event.params.seller;

    propertyListed.nftAddress = event.params.nftAddress;
    activeProperty.nftAddress = event.params.nftAddress;

    propertyListed.tokenId = event.params.tokenId;
    activeProperty.tokenId = event.params.tokenId;

    propertyListed.price = event.params.price;
    activeProperty.price = event.params.price;

    activeProperty.buyer = Address.fromString("0x0000000000000000000000000000000000000000")

    propertyListed.save();
    activeProperty.save();
}

export function handlePropertyBought(event: PropertyBoughtEvent): void {
    let propertyBought = PropertyBought.load(
        getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
    let activeProperty = ActiveProperty.load(
        getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );

    if (!propertyBought) {
        propertyBought = new PropertyBought(
            getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
        );
    }
    propertyBought.buyer = event.params.buyer;
    propertyBought.nftAddress = event.params.nftAddress;
    propertyBought.tokenId = event.params.tokenId;
    activeProperty!.buyer = event.params.buyer;

    propertyBought.save();
    activeProperty!.save();

    // entity.blockNumber = event.block.number;
    // entity.blockTimestamp = event.block.timestamp;
    // entity.transactionHash = event.transaction.hash;
}

export function handlePropertyCanceled(event: PropertyCanceledEvent): void {
    let propertyCanceled = PropertyCanceled.load(
        getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
    let activeProperty = ActiveProperty.load(
        getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );

    if (!propertyCanceled) {
        propertyCanceled = new PropertyCanceled(
            getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
        );
    }
    propertyCanceled.seller = event.params.seller;
    propertyCanceled.nftAddress = event.params.nftAddress;
    propertyCanceled.tokenId = event.params.tokenId;
    // deadAddress
    activeProperty!.buyer = Address.fromString("0x000000000000000000000000000000000000dEaD");

    propertyCanceled.save();
    activeProperty!.save();
}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
    return tokenId.toHexString() + nftAddress.toHexString();
}
