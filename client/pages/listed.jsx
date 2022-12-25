import React, { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar.jsx";
import Meta from "../components/Meta.jsx"
import { Container } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import BrowsePropertyCard from "../components/BrowsePropertyCard.jsx";
import properties from '../properties.js'
import ownership from '../ownership.js'

export default function listed() {

  //get the seller from the connected wallet's user
  const owner = "seller1" //assume it's seller1

  //check if seller1 is the owner of any properties in ownership table
  const seller_listedPropertyIDs = ownership.map((ownershipItem) => {
    if (ownershipItem.owner == owner)
      return ownershipItem.property_id
  }
  )
  //find each property in seller_listedPropertyIDs. i think it will be easier for the actual DB

  const listedPropertyElements = seller_listedPropertyIDs.map((ID) => {
    //find the ID in propertes table
    return properties.find((property, index) => {
      if (property.property_id == ID)
        return <BrowsePropertyCard key={index} property_id={property.property_id} image={property.images[0]} propertyType={property.propertyType} priceInBhd={property.priceInBhd} description={property.description} location={property.location} bedrooms={property.bedrooms} bathrooms={property.bathrooms} propertyArea={property.propertyArea} postDate={property.postDate} phoneNumber={property.phoneNumber} />
      //INSTEAD OF RETURNING THE REACT COMPONENT, IT'S JUST RETURNING THE PROPERTY ELEMENT FROM PROPERTIES.JS
    })

  })
  return (
    <div>

      <Navigationbar pageType="seller_buyer" />
      <Meta title="Listed Properties" />

      {/*  {listedPropertyElements} */}
    </div>
  )
}