import React, { useEffect, useState } from "react";
import Navigationbar from "../../components/Navigationbar.jsx";
import Meta from "../../components/Meta.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiBed, BiBath } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";
import { RxDimensions } from "react-icons/rx";
import BrowsePropertyCard from "../../components/BrowsePropertyCard.jsx";
import properties from "../../properties.js";
import Alert from 'react-bootstrap/Alert';

// graph
import { getListedProperties, getPropertiesToVerify } from "../../constants/subgraphQueries";

//import {isWeb3Enabled} from useMoralis;

export default function browse(props) {

  // graph test
  console.log(getListedProperties());
  console.log(getPropertiesToVerify());
  // end graph test


  /*   const [provider, setProvider] = useState({})

    useEffect(() => {
      setProvider(new ethers.providers.Web3Provider(window.ethereum))
    }, []); */
  const [isConnectedToWallet, setIsConnectedToWallet] = useState(true); //made true for testing , should be isWeb3Enabled
  /*   useEffect(function () {
      if (isWeb3Enabled )
        setIsConnectedToWallet(true)
      else
        setIsConnectedToWallet(false)
    }, [isWeb3Enabled ])
 */

  const [show, setShow] = useState(false); //for alert

  let propertyCardElements = properties.map((property, index) => {
    return (
      <BrowsePropertyCard
        key={index}
        property_id={property.property_id}
        image={property.images[0]}
        propertyType={property.propertyType}
        priceInBhd={property.priceInBhd}
        description={property.description}
        location={property.location}
        bedrooms={property.bedrooms}
        bathrooms={property.bathrooms}
        propertyArea={property.propertyArea}
        postDate={property.postDate}
        phoneNumber={property.phoneNumber}
        showFunc={setShow}
      />
    );
  });

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []); //work around for hydration failed msg in bedroom number stack


  return (
    <div>
      <Meta title="Browse properties" />
      <Navigationbar />
      <br /> <br />
      <Container>

        <Alert show={show} variant="success">
          <Alert.Heading>Negotiation Started</Alert.Heading>
          <p>
            Notary received request
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>
        <Stack gap={4}>

          {propertyCardElements}
        </Stack>
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
