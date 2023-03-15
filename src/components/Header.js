import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header_List() {
  return (
    <div> 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">公義募捐平台</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">募捐介紹</Nav.Link>
              <Nav.Link href="#pricing">我要捐款</Nav.Link>
            </Nav>

            <Nav>
              <NavDropdown title="個人專區" id="collasible-nav-dropdown">
                {/* <NavDropdown.Item href="#action/3.1">個人專區</NavDropdown.Item> */}
                <NavDropdown.Item href="#action/3.2">修改個人資料</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">登出</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>  
  );
}

export default Header_List;