import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiBed, BiBath } from "react-icons/bi"
import { FiMessageCircle } from "react-icons/fi"
import { RxDimensions } from "react-icons/rx"

import Link from 'next/link'

export default function BrowsePropertyCard(props) {

  const currentDate = new Date(); //"now"
  const postDate = new Date();  // some date
  postDate.setDate(props.postDate.split('/')[0]);
  postDate.setMonth(props.postDate.split('/')[1] - 1);
  postDate.setFullYear(props.postDate.split('/')[2]);
  const differenceInMillisecond = Math.abs(currentDate - postDate);  // difference in milliseconds
  const daysPassed = Math.floor(differenceInMillisecond / (1000 * 3600 * 24)); //days passed between date of posting and date of viewing


  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []); //work around for hydration failed msg in bedroom number stack

  return (
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
                  {props.description.slice(0, 115)}
                </Card.Text>
              </div>

              <div className="mt-3">
                <Card.Subtitle className="text-muted"><FaMapMarkerAlt />{props.location}</Card.Subtitle>
                <Card.Text className="mb-1">
                  {domLoaded &&
                    <Stack direction="horizontal" gap={2}>
                      <div><BiBed /> {props.bedrooms} Bedrooms </div>
                      <div className="vr" />
                      <div><BiBath /> {props.bathrooms} Bathrooms</div>
                      <div className="vr" />
                      <div><RxDimensions /> {props.propertyArea} sqm</div>
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
          <div>Listed {daysPassed} days ago </div>
          <Button className="ms-auto" variant="outline-primary" href={`https://wa.me/+${props.phoneNumber}`} target="_blank"><FiMessageCircle /> Text</Button>
          <Button variant="primary" onClick={() => props.showFunc(true)}>Start Negotiation</Button>

        </Stack>
      </Card.Footer>
    </Card>
  )
}