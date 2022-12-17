import React, { useState } from 'react'
import { Input, Button, Radios, TextArea, Upload } from 'web3uikit';
import { Row, Col, Stack, Container } from 'react-bootstrap'

import Navigationbar from "../components/Navigationbar.jsx";
import Meta from "../components/Meta.jsx"

/*
  TODO :  FILE UPLOAD ONCHANGE
  ONSUBMIT FUNCTION : send current date, formData,

*/
export default function listProperty() {

  const [formData, setFormData] = useState({
    name: "",
    propertyType: "",
    description: "",
    block: "",
    road: "",
    building: "",
    apartment: "",
    bedrooms: "",
    bathrooms: "",
    propertyArea: "",
    postDate: "",
    phoneNumber: "",
    price: "",
    dateOfListing: ""

  })

  function handleChange(event) {
    const { name, value, type } = event.target;
    if (type == "radio") {
      if (value == 0)
        setFormData({ ...formData, propertyType: "Villa", apartment: "" })
      else
        setFormData({ ...formData, propertyType: "Apartment" })
    }
    else {
      setFormData({ ...formData, [name]: value })
    }
  }

  function handleSubmit() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    setFormData({ ...formData, dateOfListing: today })

    //handle file upload

    //submit the form and route to browse page or [id].js


  }

  return (

    <Container>
      <Navigationbar pageType="seller_buyer" /> {/* form should have a top margin */}
      <Meta title="List a property" />
      <Stack gap={4}>
        <div>
          <Radios
            id="radios"
            title="Select property type"
            items={[
              'Villa',
              'Apartment'
            ]}
            onChange={handleChange}
            validation={{
              required: true
            }}
            setWhichIsChecked={formData.propertyType == "Villa" ? 0 : 1}
          />
        </div>
        <div>
          <Input
            label="Listing Name"
            description="eg.-villa in the heart of manama"
            name="name"
            value={formData.name}
            onChange={handleChange}
            validation={{
              characterMinLength: 9,
              characterMaxLength: 27,
              required: true
            }}
          />
        </div>
        <div>
          <TextArea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your property here.."
            validation={{
              required: true
            }}
          />
        </div>
        <div>

          <Row>
            <Col sm={6} md={3}>
              <Input
                label="Block"
                name="block"
                value={formData.block}
                onChange={handleChange}
                width="20px"
                validation={{
                  required: true,
                  regExp: '^[0-9]{3,5}$',
                  regExpInvalidMessage: 'Not a valid block'
                }}
              />
            </Col>
            <Col sm={6} md={3}>
              <Input
                label="Road number"
                name="road"
                value={formData.road}
                onChange={handleChange}
                width="20px"
                validation={{
                  required: true,
                  regExp: '^[0-9]{3,5}$',
                  regExpInvalidMessage: 'Not a valid road'
                }}
              />
            </Col>
            <Col sm={6} md={3}>
              <Input
                label="Building"
                name="building"
                value={formData.building}
                onChange={handleChange}
                width="20px"
                validation={{
                  required: true,
                  regExp: '^[0-9]{3,5}[A-Za-z]{0,1}$',
                  regExpInvalidMessage: 'Not a valid building'
                }}
              />
            </Col>
            <Col sm={6} md={3}>
              <Input
                label="Apartment"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
                width="20px"
                validation={{
                  required: true,
                  regExp: '^[0-9A-Za-z]{1,5}$',
                  regExpInvalidMessage: 'Not a valid apartment'
                }}
                state={formData.propertyType == "Villa" ? `disabled` : ``}
              />
            </Col>
          </Row>
        </div>
        <div className='mt-6'>
          <Row>
            <Col sm={6}>
              <Input
                label="Bedrooms"
                name="bedrooms"
                type="number"
                value={formData.bedrooms}
                onChange={handleChange}
                width="20px"
                validation={{
                  required: true,
                  regExp: '^[0-9]{1,2}$',
                  regExpInvalidMessage: 'Not a valid number'
                }}
              />
            </Col>
            <Col sm={6}>
              <Input
                label="Bathrooms"
                name="bathrooms"
                type="number"
                value={formData.bathrooms}
                onChange={handleChange}
                width="20px"
                validation={{
                  required: true,
                  regExp: '^[0-9]{1,2}$',
                  regExpInvalidMessage: 'Not a valid number'
                }}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Input
            label="Property Area"
            name="propertyArea"
            description="in meter square"
            type="number"
            value={formData.propertyArea}
            onChange={handleChange}
            width="20px"
            validation={{
              required: true,
              regExp: '^[0-9]{1,5}$',
              regExpInvalidMessage: 'Not a valid number'
            }}
          />
        </div>

        <Input
          label="Phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          width="60px"
          validation={{
            required: true,
            regExp: '^(32|33|34|35|36|37|38|39|66|17)[0-9]{6}$',
            regExpInvalidMessage: 'Not a valid number'
          }}
          prefixIcon="973"
        />

        <div>
          <Input
            label="Price (BHD)"
            name="price"
            description="in thousands"
            type="number"
            value={formData.price}
            onChange={handleChange}
            width="20px"
            validation={{
              required: true,
              regExp: '^[0-9]{1,6}$',
              regExpInvalidMessage: 'Not a valid price'
            }}
          />
        </div>
        <div>
          <Upload
            descriptionText="Only picture files are accepted"
            onChange={function handleFileUpload() {

            }}
            style={{}}
            theme="withIcon"
          />
        </div>
        <div>
          <Upload
            descriptionText="Only picture files are accepted"
            onChange={function handleFileUpload() {

            }}
            style={{}}
            theme="withIcon"
          />
        </div>
        <div>
          <Upload
            descriptionText="Only picture files are accepted"
            onChange={function handleFileUpload() {

            }}
            style={{}}
            theme="withIcon"
          />
        </div>
        <div>
          <Button
            onClick={handleSubmit}
            text="Submit Listing"
            theme="secondary"
          />
        </div>
      </Stack>


    </Container >
  )
}