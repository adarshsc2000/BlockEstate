import { useRouter } from "next/router"
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import properties from '../../properties.js'


export default function handler(props) {
  const router = useRouter()
  const { id } = router.query
  //USE SERVERSIDEPROPS WHEN USING THE REAL DB
  let property;
  useEffect(() => {
    if (!id) {
      return;
    }
    property = properties.find((item) => {
      return item.property_id == id
    })

    const carousel= <Carousel variant="dark" fade> {property.images.map((item, index) => {
      return <Carousel.Item key={index}> <img className="d-block w-100" src={`/assets/${item}`} alt={`${item}`} /> </Carousel.Item>
    })} </Carousel>

  }, [id])


  return (
    <Container>



{/* {carousel} */}


    </Container>
  )
}


/* export const getServerSideProps = async (context) => { // getServerSideProps can get passed into a context so in that way we can get the id of our current page

  const res = await fetch(`../../properties.js`)
  const properties = await res.json()

  if (!properties)
    return {
      notFound: true
    }


  return {
    props: { properties },
  }
} */
