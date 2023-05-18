import React , {useState, useEffect}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ethers } from 'ethers';


function Header_List() {
  const navigate = useNavigate();

  // 登入
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };

  function Disconnect(){
    setAccountAddress('')
    setAccountBalance('')
    setIsConnected(false)
  }

  function header_login(){
    return (
      <Nav>
        {isConnected ? (
          <NavDropdown title="個人專區" id="collasible-nav-dropdown">
          <NavDropdown.Item onClick={()=>{navigate('/UserBalance')}}>我的錢包：${accountBalance}</NavDropdown.Item>   
          <NavDropdown.Item>交易紀錄</NavDropdown.Item>   
          <NavDropdown.Item onClick={() => Disconnect()}>
            登出
          </NavDropdown.Item>
          </NavDropdown>
          ) : (
          <Nav.Link onClick={connectWallet}>
            登入
          </Nav.Link>
        )}
      </Nav>
    )
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