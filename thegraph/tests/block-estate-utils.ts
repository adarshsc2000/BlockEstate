import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  PropertyBought,
  PropertyCanceled,
  PropertyListed
} from "../generated/BlockEstate/BlockEstate"

export function createPropertyBoughtEvent(
  buyer: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt
): PropertyBought {
  let propertyBoughtEvent = changetype<PropertyBought>(newMockEvent())

  propertyBoughtEvent.parameters = new Array()

  propertyBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  propertyBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  propertyBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  propertyBoughtEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return propertyBoughtEvent
}

export function createPropertyCanceledEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt
): PropertyCanceled {
  let propertyCanceledEvent = changetype<PropertyCanceled>(newMockEvent())

  propertyCanceledEvent.parameters = new Array()

  propertyCanceledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  propertyCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  propertyCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return propertyCanceledEvent
}

export function createPropertyListedEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt
): PropertyListed {
  let propertyListedEvent = changetype<PropertyListed>(newMockEvent())

  propertyListedEvent.parameters = new Array()

  propertyListedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  propertyListedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  propertyListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  propertyListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return propertyListedEvent
}
