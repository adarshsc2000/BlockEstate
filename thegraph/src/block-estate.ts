import {
  PropertyBought as PropertyBoughtEvent,
  PropertyCanceled as PropertyCanceledEvent,
  PropertyListed as PropertyListedEvent
} from "../generated/BlockEstate/BlockEstate"
import {
  PropertyBought,
  PropertyCanceled,
  PropertyListed
} from "../generated/schema"

export function handlePropertyBought(event: PropertyBoughtEvent): void {
  let entity = new PropertyBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyer = event.params.buyer
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePropertyCanceled(event: PropertyCanceledEvent): void {
  let entity = new PropertyCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePropertyListed(event: PropertyListedEvent): void {
  let entity = new PropertyListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
