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


export default function notary(props) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);


  return (
    <>
      <Meta title="Notary Homepage" />
      <Navigationbar />
      <br /> <br />

      <Container>
        <Row>
          <Col><h2>Properties to be verified</h2></Col>
        </Row>

        <Card border="primary">
          <Row>
            <Col xs={9} sm={5} md={4} lg={3} xl={2}>
              <Card.Img className="img-fluid h-100" src={`/assets/${props.image}`} />
            </Col>
            <Col md={8}>

              <Card.Body >
                <Stack direction="vertical">
                  <div>
                    <Card.Subtitle className="text-muted">{props.propertyType}</Card.Subtitle>
                    <Card.Title>{props.priceInBhd} BHD</Card.Title>
                    <Card.Text>
                      Line 1 of propety details<br />
                      Line 2 of property details<br />
                      Line 2 of property details<br />
                    </Card.Text>
                  </div>

                  <div className="mt-3">
                    <Card.Subtitle className="text-muted"><FaMapMarkerAlt />{props.location}</Card.Subtitle>
                    <Card.Text className="mb-1">
                      {domLoaded &&
                        <Stack direction="horizontal" gap={2}>
                          <div>{props.bedrooms} Bedrooms </div>
                          <div> {props.bathrooms} Bathrooms</div>
                          <div>{props.propertyArea} sqm</div>
                        </Stack>}
                    </Card.Text>
                    <Link href={`/browse/${encodeURIComponent(props.property_id)}`} >
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

              <Button variant="primary" href={`https://wa.me/+${props.phoneNumber}`} target="_blank"> Verify</Button>
            </Stack>
          </Card.Footer>
        </Card>

      </Container>




    </>
  )
}



