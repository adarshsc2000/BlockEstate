import {
    PropertyExpired as PropertyExpiredEvent,
    PropertyMinted as PropertyMintedEvent,
    PropertyNFT
} from "../generated/PropertyNFT/PropertyNFT";
import {
    User,
    Property,
} from "../generated/schema";


export function handlePropertyExpired(event: PropertyExpiredEvent): void {

  let id = event.params.tokenId.toHex();
  let property = Property.load(id)!;

  property.status = "INACTIVE";
  property.owner = null;

  property.save();
}

export function handlePropertyMinted(event: PropertyMintedEvent): void {
    let propertyNFTContract = PropertyNFT.bind(event.address);
    let tokenURI = propertyNFTContract.tokenURI(event.params.tokenId);

    let id = event.params.tokenId.toHex();
    let property = new Property(id);

    let address = event.params.owner;
    let user = User.load(address);

    if(!user)
    {
      user = new User(address);
    }

    property.owner = address;
    property.ipfsURL = tokenURI;
    property.status = "ACTIVE";

    user.save();
    property.save();
}
