import React, { useState } from "react"
import Navigationbar from "../components/Navigationbar.jsx";
import Meta from "../components/Meta.jsx"
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap'
import { Form } from 'web3uikit';

import { useRouter } from 'next/router'



export default function notaryLogin() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: ""
  })
  const router = useRouter()

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: value }
    })
    console.log(formData)
  }

  function handleSubmit() {
    //check if email and password correct
    console.log(formData.Email, formData.Password)
    //we can hardcode the email and password like below if checking from DB takes too much time
    if (formData.Email == "slrb1@slrb.blockestate" && formData.Password == "slrb") {
      console.log("login successful")

      router.push("/slrb")
    }

  }

  return (
    <div>

      <Navigationbar pageType="plain navbar" /> {/* uncomment when margin properties work for the form */}
      <Meta title="SLRB Login" />

      <Container fluid>
        <Row className="my-auto">
          <Col className="mx-auto">

            <Form
              buttonConfig={{
                text: 'Login',
                theme: 'secondary'
              }}
              data={[
                {
                  key: 'LOGIN_EMAIL',
                  name: 'Email',
                  type: 'email',
                  validation: {
                    required: true
                  },
                  value: formData.email
                },
                {
                  key: 'LOGIN_PASSWORD',
                  name: 'Password',
                  type: 'password',
                  validation: {
                    required: true
                  },
                  value: formData.password
                }
              ]}
              onSubmit={handleSubmit}
              onChange={handleChange}
              title="Login"
            />

          </Col>
        </Row>
        {/*    i spent 2 hours trying to get any of the margin properties to take effect
        mt-6, ms-ayto, mx-auto, my-auto. Uncomment the navbar when positioning works */}


      </Container>
    </div>
  )
}