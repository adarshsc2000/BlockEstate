import Meta from './Meta.jsx'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome } from "react-icons/fa";
import { ConnectButton } from "web3uikit";
import NavDropdown from "react-bootstrap/NavDropdown";



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

                <Nav.Link href="/listProperty">List Property</Nav.Link>

                <NavDropdown title="My Properties" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/listed">Listed</NavDropdown.Item>
                  <NavDropdown.Item href="/beingsold">Being Sold</NavDropdown.Item> {/* seller will see this page for property processing */}
                  <NavDropdown.Item href="/bought">Bought</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/buying">Buying</NavDropdown.Item> {/* buyer will see this page for property processing */}
                </NavDropdown>
                <ConnectButton className="d-none d-md-block" />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      }

      {props.pageType == "notary" &&
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="md" fixed="top">
          <Container>
            <Navbar.Brand href="/">
              <FaHome size={28} /> BlockEstate
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='me-auto'>
                <Nav.Link href="#link">To approve</Nav.Link>
                <Nav.Link href="#link">Approved</Nav.Link>
              </Nav>

              <Nav >
                <Nav.Link href='/logout'>Logout</Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      }

      {
        props.pageType == "plain navbar" &&
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="md" fixed="top">
          <Container >
            <Navbar.Brand href="/">
              <FaHome size={28} /> BlockEstate
            </Navbar.Brand>
          </Container>
        </Navbar>
      }


    </div>
  );
}

export default Navigationbar;
