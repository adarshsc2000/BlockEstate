import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
    let currentYear = new Date().getFullYear()
  return (
    <Navbar bg="primary" variant="dark" fixed="bottom" className="d-flex justify-content-center">
        <Navbar.Text>© Copyright {currentYear}:  BlockEstate</Navbar.Text>
    </Navbar>

  )
}

export default Footer