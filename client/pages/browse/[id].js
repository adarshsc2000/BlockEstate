import Navigationbar from "../../components/Navigationbar.jsx";
import Meta from "../../components/Meta.jsx"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import properties from '../../properties.js'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { FiMessageCircle } from "react-icons/fi"
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiBed, BiBath } from "react-icons/bi"
import { BiBuildingHouse } from "react-icons/bi"
import { RxDimensions } from "react-icons/rx"
import { FaHandshake } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"

export default function handler(props) {
  const router = useRouter()
  const { id } = router.query
  //USE SERVERSIDEPROPS WHEN USING THE REAL DB

  const [newCarousel, setNewCarousel] = useState({})
  let carousel = {};
  const [property, setProperty] = useState({});
  const [loadNow, setLoadNow] = useState(false)
  useEffect(() => { //without this can only access page using <Link > , but not by entering browse/id in the url

    if (router.isReady) {
      setProperty(properties.find((property) => {
        return property.property_id == id
      }))
    }
  }, [router.isReady]);

  useEffect(() => {
    if (Object.keys(property).length >= 1) {
      // console.log(Object.keys(property).length)

      carousel = property.images.map((item, index) => {
        return <Carousel.Item key={index}> <img className="d-block w-100" src={`/assets/${item}`} alt={`${item}`} /> </Carousel.Item>
      })
      setNewCarousel(carousel) //cant display carousel fo some reason
      setLoadNow(true) //cant display only newCarousel for some reason

    }
  }, [property])

  return (
    <>
      <Navigationbar pageType="seller_buyer" />
      <Meta title="Browse properties" />
      <br /> <br />
      <Container >
        <Row>
          <Col lg={10} xl={8} xxl={7} className="ms-auto me-auto">
            <Carousel variant="dark" fade>
              {loadNow && newCarousel}
            </Carousel>
          </Col>
        </Row>

        {loadNow &&
          <>
            <Row>
              <Col>
                <Row className="fs-4 fw-semibold">{property.propertyType} FOR SALE in {property.location}</Row>
                <Row className="fw-bold ">{property.name}</Row>
                <Row>
                  <Col>
                    <BiBuildingHouse /> Property Type: {property.propertyType}
                  </Col>
                  <Col>
                    <RxDimensions /> Property Size: {property.propertyArea}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <BiBed /> Bedrooms: {property.bedrooms}
                  </Col>
                  <Col>
                    <BiBath /> Bathrooms: {property.bathrooms}
                  </Col>
                </Row>
                <hr />
              </Col>
              <Col sm={12} lg={3}>
                <Card border="primary" className="h-100">
                  <Card.Body>
                    <Row>
                      <Col className="fs-4 fw-bold">{property.priceInBhd} BHD</Col>
                    </Row>
                    <Row>
                      <Col className="me-auto" xs="auto" lg={12} >
                        <Button variant="outline-primary" href={`https://wa.me/+${property.phoneNumber}`} target="_blank"><FiMessageCircle /> Text seller</Button>
                      </Col>
                      <Col xs="auto">
                        <Button variant="outline-primary" href={`go to in process page`} ><FaHandshake /> Text seller</Button>
                      </Col>
                    </Row>

                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs="auto" className="mt-1 mb-1 me-auto">
                <FaMapMarkerAlt /> Location :  {property.location}
              </Col>
              <Col xs="auto">
                <BsFillPersonFill /> Seller Name: {/* take from the ownership table */}
              </Col>
            </Row>
          </>
        }

      </Container >
    </>
  )
}


/* export const getServerSideProps = async (context) => { // getServerSideProps can get passed into a context so in that way we can get the id of our current page

  const res = await fetch(`/properties.js`)
  const properties = await res.json()

  if (!properties)
    return {
      notFound: true
    }


  return {
    props: { properties },
  }
}
 */
