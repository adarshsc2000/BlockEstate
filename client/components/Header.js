import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { ConnectButton } from 'web3uikit'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Real Estate Blockchain</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Buy</Nav.Link>
            <Nav.Link href="#link">Sell</Nav.Link>
            <ConnectButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header