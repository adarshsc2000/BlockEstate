import React, { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar.jsx";
import Meta from "../components/Meta.jsx"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiBed, BiBath } from "react-icons/bi"
import { FiMessageCircle } from "react-icons/fi"
import { RxDimensions } from "react-icons/rx"
import BrowsePropertyCard from "../components/BrowsePropertyCard.jsx";

//import {isWeb3Enabled} from useMoralis;


export default function browse() {
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
          <Card border="primary">
            <Row>
              <Col xs={9} sm={5} md={4} lg={3} xl={2}>
                <Card.Img className="img-fluid h-100" src={`/assets/${`pic1prop1.jpeg`}`} />
              </Col>
              <Col md={8}>

                <Card.Body >
                  <Stack direction="vertical">
                    <div>
                      <Card.Subtitle className="text-muted">Apartment</Card.Subtitle>
                      <Card.Title>400 BHD</Card.Title>
                      <Card.Text>
                        {"Sea view apartment with many....slice method used to truim the string to 11 chars, so 2 lines on md screen. otherwise img does not fit card".slice(0, 115)}
                      </Card.Text>
                    </div>

                    <div className="mt-3">
                      <Card.Subtitle className="text-muted"><FaMapMarkerAlt />Abraj Al Lulu, Manama, Capital Governate</Card.Subtitle>
                      <Card.Text className="mb-1">
                        {domLoaded &&
                          <Stack direction="horizontal" gap={2}>
                            <div><BiBed /> 8 Bedrooms </div>
                            <div className="vr" />
                            <div><BiBath /> 8 Bathrooms</div>
                            <div className="vr" />
                            <div><RxDimensions /> 736 sqm</div>
                          </Stack>}
                      </Card.Text>
                      <Button variant="outline-primary" size="sm">Check it out</Button>
                    </div>
                  </Stack>
                </Card.Body>
              </Col>
            </Row>
            <Card.Footer>
              <Stack direction="horizontal">
                <div>Listed 2 days ago </div>
                <Button className="ms-auto" variant="outline-primary" href="https://wa.me/+97333344444" target="_blank" ><FiMessageCircle /> Text</Button>
              </Stack>
            </Card.Footer>
          </Card>

<BrowsePropertyCard image="pic1prop1.jpeg" propertyType="Apartment" priceInBhd="400" description="Sea view apartment with many....slice method used to truim the string to 11 chars, so 2 lines on md screen. otherwise img does not fit card" location="Abraj Al Lulu, Manama, Capital Governate" bedrooms="8" bathrooms="8" propertyArea="736" postDate="5/12/2022" phoneNumber="97333344444"/>



        </Stack>
      </Container>
    </div>
  )
}

