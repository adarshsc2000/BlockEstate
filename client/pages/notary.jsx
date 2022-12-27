import React, { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar.jsx";
import Meta from "../components/Meta.jsx"
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import Link from 'next/link'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';


export default function notary(props) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const [show, setShow] = useState(0); //for alert
  const [removedFromView, setRemovedFromView] = useState(false);

  useEffect(() => {
    if (show == 2) {
      setRemovedFromView(true)
      setShow(false)
    }
  }, [show])

  return (
    <>
      <Meta title="Notary Homepage" />
      <Navigationbar />
      <br /> <br />

      <Container>

        <Alert show={show} variant="success">
          <Alert.Heading>Notary verification in progress</Alert.Heading>
          <p>
            Buyer must pay property value to seller to receive notarized contract
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(2)} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>

        <Row>
          <Col><h2>Properties to be verified</h2></Col>
        </Row>
        {!removedFromView &&
          <Card border="primary">
            <Row>
              <Col xs={9} sm={5} md={4} lg={3} xl={2}>
                <Card.Img className="img-fluid h-100" src={`/assets/pic1prop1.jpeg`} />
              </Col>
              <Col md={8}>

                <Card.Body >
                  <Stack direction="vertical">
                    <div>
                      <Card.Subtitle className="text-muted">{props.propertyType}</Card.Subtitle>
                      <Card.Title>400000 BHD</Card.Title>
                      <Card.Text>
                        https://ipfs.io/ipfs/bafybeiaysi4s6lnjev27ln5icwm6tueaw2vdykrtjkwiphwekaywqhcjze/wiki/Cryptocurrency

                        <br />
                        NFT location<br />
                        Seller documents<br />
                      </Card.Text>
                    </div>

                    <div className="mt-3">
                      <Card.Subtitle className="text-muted"><FaMapMarkerAlt />Abraj Al Lulu, Manama, Capital Governate</Card.Subtitle>
                      <Card.Text className="mb-1">
                        {domLoaded &&
                          <Stack direction="horizontal" gap={2}>
                            <div>8 Bedrooms </div>
                            <div> 8 Bathrooms</div>
                            <div>736 sqm</div>
                          </Stack>}
                      </Card.Text>
                      <Link href={`/browse/1`} >
                        <Button variant="outline-primary" size="sm">More Information</Button>
                      </Link>
                    </div>
                  </Stack>
                </Card.Body>
              </Col>
            </Row>
            <Card.Footer>
              <Stack direction="horizontal">
                <Button className="ms-auto" variant="outline-primary" href={`https://wa.me/+${props.phoneNumber}`} target="_blank"><FiMessageCircle /> Text</Button>

                <Button variant="primary" onClick={() => setShow(1)}>
                  {show == 1 &&
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  } Verify</Button>
              </Stack>
            </Card.Footer>
          </Card>
        }

      </Container>




    </>
  )
}



