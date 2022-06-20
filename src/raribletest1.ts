import { BigInt } from "@graphprotocol/graph-ts"
import {
  raribletest1,
  AuctionBuyOut,
  AuctionCancelled,
  AuctionCreated,
  AuctionFinished,
  AvailableToWithdraw,
  BidPlaced,
  MinimalDurationChanged,
  MinimalStepChanged,
  OwnershipTransferred,
  ProtocolFeeChanged,
  ProxyChange
} from "../generated/raribletest1/raribletest1"
import { Auction , Bid} from "../generated/schema"

export function handleAuctionBuyOut(event: AuctionBuyOut): void {
  // Entities can be loaded from the store using a string ID; this ID
 
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.auctionId(...)
  // - contract.checkAuctionExistence(...)
  // - contract.checkAuctionRangeTime(...)
  // - contract.defaultFeeReceiver(...)
  // - contract.feeReceivers(...)
  // - contract.getCurrentBuyer(...)
  // - contract.getMinimalNextBid(...)
  // - contract.minimalDuration(...)
  // - contract.minimalStepBasePoint(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.owner(...)
  // - contract.protocolFee(...)
  // - contract.royaltiesRegistry(...)
  // - contract.supportsInterface(...)
}

export function handleAuctionCancelled(event: AuctionCancelled): void {}

export function handleAuctionCreated(event: AuctionCreated): void {

  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Auction.load(event.params.auctionId.toHex())
  let count = 0
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new Auction(event.params.auctionId.toHex())

    // Entity fields can be set using simple assignments
    entity.bidCount = BigInt.fromI32(0)
  }


  // BigInt and BigDecimal math are supported
 // entity.bidCount = entity.bidCount  + BigInt.fromI32(1)  
  entity.auctionId = event.params.auctionId;
  entity.creator = event.params.seller;
  entity.sellToken = event.params.sellToken
  entity.sellTokenId=event.params.sellTokenId
  entity.sellTokenValue=event.params.sellTokenValue
  entity.minimalPrice=event.params.minimalPrice
  entity.data=event.params.data
  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleAuctionFinished(event: AuctionFinished): void {}

export function handleAvailableToWithdraw(event: AvailableToWithdraw): void {}

export function handleBidPlaced(event: BidPlaced): void {
  let entity = Auction.load(event.transaction.from.toHex())
  let count = 0
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  // if (!entity) {
  //  // throw exception
  // }
  // else{
    let bid = new Bid(event.transaction.from.toHex())
  
    bid.bidder= event.params.buyer
    bid.auctionId = event.params.auctionId
    bid.endTime =  event.params.endTime
    bid.save()
//  }
}

export function handleMinimalDurationChanged(
  event: MinimalDurationChanged
): void {}

export function handleMinimalStepChanged(event: MinimalStepChanged): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProtocolFeeChanged(event: ProtocolFeeChanged): void {}

export function handleProxyChange(event: ProxyChange): void {}
