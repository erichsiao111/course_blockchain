import React , {useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header_List() {
  const [type, settype]=useState(0);
  const navigate = useNavigate();
  function header_login(){
    if(type === 0){
      return (
        <Nav>
          <Nav.Link onClick={()=>{navigate('/UserRegister')}}>註冊</Nav.Link>
          <Nav.Link onClick={()=>{settype(1)}}>登入</Nav.Link>
        </Nav>
      )
    }else{
      return (
        <Nav>
          <NavDropdown title="個人專區" id="collasible-nav-dropdown">
            <NavDropdown.Item >我的錢包</NavDropdown.Item>
            <NavDropdown.Item >修改個人資料</NavDropdown.Item>
            <NavDropdown.Item  onClick={()=>{{settype(0); navigate('/')}}}>登出</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
          </NavDropdown>
        </Nav>
      )
    }
  }
  return (
    <div> 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>公義募捐平台</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >募捐介紹</Nav.Link>
              {/* <Nav.Link >我要捐款</Nav.Link> */}
            </Nav>
          {header_login()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>  
  );
}

export default Header_List;