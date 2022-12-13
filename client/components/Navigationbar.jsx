import Meta from './Meta.jsx'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FaHome } from "react-icons/fa";

// import NavDropdown from "react-bootstrap/NavDropdown";

import { ConnectButton } from "web3uikit";

function Navigationbar(props) {
  return (
    <div>
      <Meta />
      {props.pageType == 'landing' &&
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="md" fixed="top">
          <Container>
            <Navbar.Brand href="/">
              <FaHome size={28} /> BlockEstate
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {/* <ConnectButton className="d-inline-block d-md-none" /> */}

              {/* <Nav className="me-auto">
                <Nav.Link href="/browse">Browse</Nav.Link>
              </Nav> */}
              <Nav className='ms-auto'>
                <Nav.Link href="/whitepaper">White Paper</Nav.Link>
                <ConnectButton className="d-none d-md-block" />
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      }

      {
        props.pageType == "seller_buyer" &&

        <Navbar collapseOnSelect bg="primary" variant="dark" expand="md" fixed="top">
          <Container >
            <Navbar.Brand href="/">
              <FaHome size={28} /> BlockEstate
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/browse">Browse</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link href="#link">My Properties</Nav.Link> {/* inside will be selling, bought */}
                <Nav.Link href="#link">In Process</Nav.Link> {/*  inside will be selling under process, buying */}
                <ConnectButton className="d-none d-md-block" />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      }

      {
        props.pageType == "notary" &&
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="md" fixed="top">
          <Container >
            <Navbar.Brand href="/">
              <FaHome size={28} /> BlockEstate
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#link">To Approve</Nav.Link>
                <Nav.Link href="#link">Approved</Nav.Link>
              </Nav>
              <Nav>
                <Nav.link href="#logout/login">Login/Logout</Nav.link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      }


    </div>
  );
}

export default Navigationbar;
