import React, { useEffect, useState } from "react";
import Navigationbar from "../../components/Navigationbar.jsx";
import Meta from "../../components/Meta.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Placeholder } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiBed, BiBath } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import { RxDimensions } from "react-icons/rx";
import BrowsePropertyCard from "../../components/BrowsePropertyCard.jsx";
import properties from "../../properties.js";
import { useMoralis } from "react-moralis";

// graph
import { GET_LISTED_PROPERTIES } from "../../constants/subgraphQueries";
import { useQuery } from "@apollo/client";

//import {isWeb3Enabled} from useMoralis;

export default function browse(props) {
  const [propertyDetails, setPropertyDetails] = useState([]);
  let propertiesOnSale = undefined;

  const { isWeb3Enabled } = useMoralis();
  const { loading, error, data: listedProperties } = useQuery(GET_LISTED_PROPERTIES);
  if (loading) {
    return <Placeholder />;
  } else if (error) {
    console.log("Error: " + error);
    return error;
  } else {
    propertiesOnSale = listedProperties.propertyForSales;
  }



  // for (let property of propertiesOnSale) {
  //   const ipfsUrl = property.property.ipfsURL;
  //   const requestUrl = ipfsUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
  //   getPropertyDetails(requestUrl, property).then((value) => {
  //     setPropertyDetails((arr) => [...arr, value]);
  //   })
  // }

  

  if(propertiesOnSale)
  {
    propertiesOnSale.forEach((property) => {
      const ipfsUrl = property.property.ipfsURL;
      const requestUrl = ipfsUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
      getPropertyDetails(requestUrl, property).then((value) => {
        setPropertyDetails((arr) => [...arr, value]);
      });
    });
  }

  async function getPropertyDetails(requestURL, property) {
    let propertyInfo = await (await fetch(requestURL)).json();
    const ipfsMainImageUrl = propertyInfo.image;
    const requestImageUrl = ipfsMainImageUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
    return (
      <BrowsePropertyCard
        key={property.property.id}
        property_id={propertyInfo.propertyID}
        image={requestImageUrl}
        propertyType={propertyInfo.properties.propertyType}
        priceInBhd={propertyInfo.properties.oldPriceInBhd}
        description={propertyInfo.description}
        location={propertyInfo.properties.location}
        bedrooms={propertyInfo.properties.bedrooms}
        bathrooms={propertyInfo.properties.bathrooms}
        propertyArea={propertyInfo.properties.area}
        phoneNumber={propertyInfo.properties.phone}
        postDate="01/01/2022"
      />
    );
  }

  // const propertyDetailsPromise = propertiesOnSale.map(async (property) => {
  //   const ipfsUrl = property.property.ipfsURL;
  //   const requestUrl = ipfsUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
  //   return getPropertyDetails(requestUrl).then((propertyDetails) => {
  //     return (
  //       <BrowsePropertyCard
  //         key={property.property.id}
  //         property_id={propertyDetails.propertyId}
  //         // image={property.images[0]}
  //         propertyType={property.propertyType}
  //         priceInBhd={property.priceInBhd}
  //         description={property.description}
  //         location={property.location}
  //         bedrooms={property.bedrooms}
  //         bathrooms={property.bathrooms}
  //         propertyArea={property.propertyArea}
  //         postDate={property.postDate}
  //         phoneNumber={property.phoneNumber}
  //       />
  //     );
  //   });
  // });
  // Promise.all(propertyDetailsPromise).then((propertyDetails) => {
  //   console.log(propertyDetails);
  // });
  // const propertyCardElements = properties.map((property, index) => {
  //   return (
  //     <BrowsePropertyCard
  //       key={index}
  //       property_id={property.property_id}
  //       image={property.images[0]}
  //       propertyType={property.propertyType}
  //       priceInBhd={property.priceInBhd}
  //       description={property.description}
  //       location={property.location}
  //       bedrooms={property.bedrooms}
  //       bathrooms={property.bathrooms}
  //       propertyArea={property.propertyArea}
  //       postDate={property.postDate}
  //       phoneNumber={property.phoneNumber}
  //     />
  //   );
  // });

  // const [domLoaded, setDomLoaded] = useState(false);
  // useEffect(() => {
  //   setDomLoaded(true);
  // }, []); //work around for hydration failed msg in bedroom number stack
  return (
    <div>
      <Meta title="Browse properties" />
      <Navigationbar />
      <br /> <br />
      <Container>
        <Stack gap={4}>{propertyDetails}</Stack>
      </Container>
    </div>
  );
}

/* export async function getServerSideProps() {
  const res = await fetch()
  const properties = await res.json()

  pass data to the page via props
  return {props: {properties}}
}

 */
