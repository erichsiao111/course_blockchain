import logo from './logo.svg';
import './App.css';
import { Outlet, useLocation } from "react-router-dom";
import Header from './components/Header';
// import { Reset } from "styled-reset";
// import {  BrowserRouter as Router,Routes,Route,Link  } from 'react-router-dom';  

function App() {
  return (
      <>
        {/* <Reset /> */}
        <Header />
        <Outlet />
      </>
    );
}




export default App;
