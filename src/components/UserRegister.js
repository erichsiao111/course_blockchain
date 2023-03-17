import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../action/api";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Register() {
  const navigate = useNavigate();

  let userEmailRef = useRef("");
  let userNameRef = useRef("");
  let userPasswordRef = useRef("");
  let userCheckPasswordRef = useRef("");
  let userBlockChainaddressRef = useRef("");

  // let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;


  async function submit() {
    let userEmail = userEmailRef.current.value;
    let userName = userNameRef.current.value;
    let userPassword = userPasswordRef.current.value;
    let userCheckPassword = userCheckPasswordRef.current.value;
    let userBlockChainaddress = userBlockChainaddressRef.current.value;

    if (userName !== "" && userPassword !== "" && userCheckPassword !== "" && userBlockChainaddress !== "" && userEmail !== "") {
      // if (userPassword === userCheckPassword && userEmail.search(emailRule) !== -1 && userPassword.length >= 6 && userPassword.length <= 12) {
      if (userPassword === userCheckPassword && userPassword.length >= 6 && userPassword.length <= 12) {
        console.log(userName, userPassword, userBlockChainaddress);
        const data = await api
          .registerUser({
            // userEmail: userEmailRef.current.value,
            username: userNameRef.current.value,
            password: userPasswordRef.current.value,
            wallet: userBlockChainaddressRef.current.value,
            date: new Date(),
          })
          .then((res) => {
            // if (res === "fail") {
            //   alert("您已註冊過，請登入");
            //   navigate("/login");
            // } else {
            //   alert("註冊成功，請登入");
            //   navigate("/login");
            // }
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        // console.log(userPassword.length)
        // if (userPassword !== userCheckPassword){
        //     alert("密碼與再次確認密碼不同，請重新輸入");
        // } else if(userPassword.length < 6){
        //     alert("密碼字數過少，請重新輸入");
        // } else if(userPassword.length > 12){
        //     alert("密碼字數過多，請重新輸入");
        // } else{
        //     alert("Email格式錯誤，請重新輸入");
        // }
        
      }
    } else {
      // alert("資料尚未輸入完全");
    }
  }

  return (
    <div style={{width:'60%', margin:'0 auto', marginTop:'60px'}}>
        <h1>註冊帳號</h1>
      {/* <Form style={{display:'flex', justifyContent:'center', alignItems:'center'}}> */}
      <Form>
        <div>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" ref={userEmailRef} placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group> */}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>帳號</Form.Label>
            <Form.Control type="text" ref={userNameRef} placeholder="請輸入帳號" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>密碼</Form.Label>
            <Form.Control type="text" ref={userPasswordRef} placeholder="請輸入密碼" />
            <Form.Text className="text-muted">密碼請輸入６～１２個英數字元</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>再次確認密碼</Form.Label>
            <Form.Control type="text" ref={userCheckPasswordRef} placeholder="請輸入密碼" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>請輸入錢包位址</Form.Label>
            <Form.Control type="text" ref={userBlockChainaddressRef} placeholder="請輸入錢包位址" />
          </Form.Group>
        </div>

        <div>
          <Button variant="primary" style={{marginRight:'10px'}}
            onKeyDown={(e) => {
              if(e.keyCode === 13){
                submit();
              }
            }}  
              onClick={() => {
                submit();
              }}
            >
              確定建立
          </Button>
          <Button variant="secondary" onClick={()=>{navigate('/')}}>離開</Button>
        </div>
      </Form>  

    </div>
  );
}

export default Register;
