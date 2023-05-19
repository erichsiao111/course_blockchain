import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import photo1 from '../img/photo1.png';
import photo2 from '../img/photo2.png';
import photo3 from '../img/photo3.png';


function GroupCard() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  let login = localStorage.getItem('login');

  // const payment1 = '0x16555B3f5e2d84DD6Be86480067300Aef17eC753';
  // const payment2 = '0x1C59f979e11332Ef14fe6f1C4DB5eCA96c431534';
  // const payment3 = '0x4bbD0f712a1d8A983c19ceA38De06cE5c084B410';
  const payment1 = '0xf01dc6F318a811FEEA47a8a9B9Ba5964D383cf77';
  const payment2 = '0xf7869d30640a80838740586A2c5E36582fdF95f7';
  const payment3 = '0xC8Cc1Cf028c5f2AC42EbCA93D17EC328Dae2B8a1';

  const handlePageChange = (paymentId) => {
    if(paymentId === 1){
      navigate('/Donate', { state: payment1 });
    }else if(paymentId === 2){
      navigate('/Donate', { state: payment2 });
    }else if(paymentId === 3){
      navigate('/Donate', { state: payment3 });
    }
  };
  
  function Model(){
    return(
    <Modal show={show} onHide={() => {setShow(false);}}>
      <Modal.Body>
        <p className='tex-center text-xl mb-0'>請先登入</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {setShow(false);}}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }

  function loginLayout(id){
    if(login === "1"){
      return(
    <>
      <Button variant="outline-success" onClick={() => {setShow(true);}}>
        我要捐款
      </Button>
      {Model()}
    </>
     )
    }else{
      return(
        <Button variant="outline-success" onClick={handlePageChange.bind(null,id)}>我要捐款</Button>
      )
    }
  }

  return (
    <CardGroup>

      <Card style={{width:'30%'}}>
        <Card.Img src= {photo1} className='w-[300px]' alt='' />
        <Card.Body>
          <Card.Title>公益機構Ａ</Card.Title>
          <Card.Text>請大家發會愛心多捐款</Card.Text>
          {loginLayout(1)}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 day ago</small>
        </Card.Footer>
      </Card>

      <Card style={{width:'30%'}}>
        <Card.Img src= {photo2} className='w-[300px]' alt='' />
        <Card.Body>
          <Card.Title>公益機構Ｂ</Card.Title>
          <Card.Text>請大家發會愛心多捐款</Card.Text>
          {loginLayout(2)}{' '}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 day ago</small>
        </Card.Footer>
      </Card>

      <Card style={{width:'30%'}}>
        <Card.Img src= {photo3} className='w-[250px]' alt='' />
        <Card.Body>
          <Card.Title>公益機構Ｃ</Card.Title>
          <Card.Text>請大家發會愛心多捐款</Card.Text>
          {loginLayout(3)}{' '}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 day ago</small>
        </Card.Footer>
      </Card>

    </CardGroup>
  );
}

export default GroupCard;