import React, { useEffect, useState } from "react";
import Navigationbar from "../components/Navigationbar.jsx";
import Meta from "../components/Meta.jsx"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import {Row, Col} from "react-bootstrap";

export default function browse() {
  /*   const [provider, setProvider] = useState({})

    useEffect(() => {
      setProvider(new ethers.providers.Web3Provider(window.ethereum))
    }, []); */
  const [isConnectedToWallet, setIsConnectedToWallet] = useState(true)//made true for testing
  /*   useEffect(function () {
      if (window.ethereum)
        setIsConnectedToWallet(true)
      else
        setIsConnectedToWallet(false)
    }, [provider])
   */

  return (
    <div>
      <Navigationbar pageType={`${isConnectedToWallet == true ? `seller_buyer` : `landing`}`} />
      <Meta title="Browse properties" />
      <br /> <br />
      <Container>
        <Card >
          <Row>
            <Col xs={9} sm={5} md={4} lg={3} xl={2}>
              <Card.Img src="holder.js/100px180" />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  )
}

