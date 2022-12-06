import Head from "next/head";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import { ConnectButton } from "web3uikit";

function Header() {
  return (
    <div>
      <Head>
        <title>Real Estate Blockchain App </title>
        <meta name="description" content="A decentralized and modern blockchain application based on real estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              alt="Brand Logo"
              src="/vercel.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Real Estate Bahrain
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="">
              <Nav.Link href="#link">Browse</Nav.Link>
              <Nav.Link href="#link">White Paper</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
              <ConnectButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
