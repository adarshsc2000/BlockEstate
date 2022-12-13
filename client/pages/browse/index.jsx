import React, { useEffect, useState } from "react";
import Navigationbar from "../../components/Navigationbar.jsx";
import Meta from "../../components/Meta.jsx"
import { Container } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import BrowsePropertyCard from "../../components/BrowsePropertyCard.jsx";
import properties from '../../properties.js'

//import {isWeb3Enabled} from useMoralis;


export default function browse(props) {
  /*   const [provider, setProvider] = useState({})

    useEffect(() => {
      setProvider(new ethers.providers.Web3Provider(window.ethereum))
    }, []); */
  const [isConnectedToWallet, setIsConnectedToWallet] = useState(true) //made true for testing , should be isWeb3Enabled
  /*   useEffect(function () {
      if (isWeb3Enabled )
        setIsConnectedToWallet(true)
      else
        setIsConnectedToWallet(false)
    }, [isWeb3Enabled ])
 */

  const propertyCardElements = properties.map((property, index) => {

    return <BrowsePropertyCard key={index} property_id={property.property_id} image={property.images[0]} propertyType={property.propertyType} priceInBhd={property.priceInBhd} description={property.description} location={property.location} bedrooms={property.bedrooms} bathrooms={property.bathrooms} propertyArea={property.propertyArea} postDate={property.postDate} phoneNumber={property.phoneNumber} />

  })

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []); //work around for hydration failed msg in bedroom number stack

  return (
    <div>
      <Navigationbar pageType={`${isConnectedToWallet == true ? `seller_buyer` : `landing`}`} />
      <Meta title="Browse properties" />
      <br /> <br />
      <Container>
        <Stack gap={4}>

          <BrowsePropertyCard image="pic1prop1.jpeg" propertyType="Apartment" priceInBhd="400" description="Sea view apartment with many....slice method used to truim the string to 11 chars, so 2 lines on md screen. otherwise img does not fit card" location="Abraj Al Lulu, Manama, Capital Governate" bedrooms="8" bathrooms="8" propertyArea="736" postDate="5/12/2022" phoneNumber="97333344444" />

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