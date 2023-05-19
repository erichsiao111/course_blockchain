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
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  let login = localStorage.getItem('login');

  useEffect(() => {
    if(login === '0'){
      setIsConnected(true)
      connectWallet();
    }else{
      setIsConnected(false)
    }
  },[])

  useEffect(() => {
    async function enableMetamask(){
      try {
          await window.ethereum.enable();
          if(isConnected && login === '0'){
            connectWallet()
          }
      } catch (error) {
        console.error('Failed to connect Metamask:', error);
      }
    };

    enableMetamask();
    return () => {};
  }, []);


  function handleLogoutClick(){
    localStorage.setItem('login', JSON.stringify(1));
    setIsConnected(false)
  };

  async function connectWallet(){
    try {
      if (ethereum) {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
      localStorage.setItem('login', JSON.stringify(true));
    }
    } catch (error) {
      setIsConnected(false);
    }
  };


  function header_login(){
    return (
      <Nav>
        {isConnected ? (
            <NavDropdown title="我的錢包" id="collasible-nav-dropdown">
            <NavDropdown.Item>錢包位置：{accountAddress.slice(0, 5)}...{accountAddress.slice(37, 42)}</NavDropdown.Item>   
            <NavDropdown.Item>餘額：${accountBalance}</NavDropdown.Item>   
            <NavDropdown.Item onClick={() => navigate('/Transaction')}>交易紀錄</NavDropdown.Item>   
            <NavDropdown.Item onClick={() => {handleLogoutClick();navigate('/')}}>
              登出
            </NavDropdown.Item>
            </NavDropdown>
            ) : (
            <Nav.Link onClick={
              () => {connectWallet();}}>
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
          <Navbar.Brand className='cursor-pointer' onClick={()=>{navigate('/')}}>公義募捐平台</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >募捐介紹</Nav.Link>
            </Nav>
          {header_login()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>  
  );
}

export default Header_List;