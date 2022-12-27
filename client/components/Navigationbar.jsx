import Meta from "./Meta.jsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome } from "react-icons/fa";
import { ConnectButton } from "web3uikit";
import NavDropdown from "react-bootstrap/NavDropdown";

// imports for fetching backend
import { useMoralis, useWeb3Contract } from "react-moralis";
import BlockEstateAbi from "../constants/BlockEstateAbi.json";
import networkMapping from "../constants/networkMapping.json";
import { useState, useEffect } from "react";

//  <Nav className="me-auto">
//     <Nav.Link href="/browse">Browse</Nav.Link>
//   </Nav>
// <Nav className='ms-auto'>
//   <Nav.Link href="/whitepaper">White Paper</Nav.Link>
//   <ConnectButton className="d-none d-md-block" />
// </Nav>

function Navigationbar() {
  const { isWeb3Enabled, chainId, account } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  const { runContractFunction } = useWeb3Contract();

  const [regularUserFlag, setRegularUserFlag] = useState(false);

  async function isRegularUser() {
    if (isWeb3Enabled) {
      runContractFunction({
        params: {
          abi: BlockEstateAbi,
          contractAddress: networkMapping[chainString]["BlockEstate"],
          functionName: "isRegularUser",
          params: {},
        },
        onError: (error) => console.log(error),
        onSuccess: (result) => setRegularUserFlag(result),
      });
    }
  }

  useEffect(() => {
    isRegularUser();
  }, [isWeb3Enabled, account]);

  return (
    <div>
      <Meta />
      <Navbar collapseOnSelect bg="primary" variant="dark" expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <FaHome size={28} /> BlockEstate
          </Navbar.Brand>
          <div className="d-flex justify-content-end">
            <ConnectButton className="d-inline-block d-md-none" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {regularUserFlag && (
                <>
                  <Nav.Link href="/browse">Browse</Nav.Link>
                  <Nav.Link href="/notification">Notification</Nav.Link>
                </>
              )}
              <Nav.Link href="/whitepaper">White Paper</Nav.Link>
              <ConnectButton className="d-none d-md-block" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
