import React, { useEffect, useState } from "react";
import Navigationbar from "../../components/Navigationbar.jsx";
import Meta from "../../components/Meta.jsx"
import { Container } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import BrowsePropertyCard from "../../components/BrowsePropertyCard.jsx";
import properties from '../../properties.js'
import ownership from "../../ownership.js";

//import {isWeb3Enabled} from useMoralis;


export default function browse(props) {

  const propertyCardElements = properties.map((property, index) => {
    //go through each property to display it

    const isListed = ownership.find((ownershipItem) => {
      if (ownershipItem.property_id == property.property_id)
        return ownershipItem.listed
    })
    //check if the property is listed in ownership table, if listed==false, dont display it
    if (isListed)
      return <BrowsePropertyCard key={index} property_id={property.property_id} image={property.images[0]} propertyType={property.propertyType} priceInBhd={property.priceInBhd} description={property.description} location={property.location} bedrooms={property.bedrooms} bathrooms={property.bathrooms} propertyArea={property.propertyArea} postDate={property.postDate} phoneNumber={property.phoneNumber} />

  })

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []); //work around for hydration failed msg in bedroom number stack
  return (
    <div>
      <Navigationbar pageType="seller_buyer" />
      <Meta title="Browse properties" />
      <br /> <br />
      <Container>
        <Stack gap={4}>
          {propertyCardElements}

        </Stack>
      </Container>
    </div>
  )
}


/* export async function getServerSideProps() {
  const res = await fetch()
  const properties = await res.json()

  pass data to the page via props
  return {props: {properties}}
}

 */