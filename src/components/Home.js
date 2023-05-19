import React from 'react';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import photo1 from '../img/photo1.png';
import photo2 from '../img/photo2.png';
import photo3 from '../img/photo3.png';
function GroupCard() {
  const navigate = useNavigate();
  const payment1 = '0x16555B3f5e2d84DD6Be86480067300Aef17eC753';
  const payment2 = '0x1C59f979e11332Ef14fe6f1C4DB5eCA96c431534';
  const payment3 = '0x4bbD0f712a1d8A983c19ceA38De06cE5c084B410';

  const handlePageChange = (paymentId) => {
    if(paymentId === 1){
      navigate('/Donate', { state: payment1 });
    }else if(paymentId === 2){
      navigate('/Donate', { state: payment2 });
    }else if(paymentId === 3){
      navigate('/Donate', { state: payment3 });
    }
  };

  return (
    <CardGroup>

      <Card style={{width:'30%'}}>
        <Card.Img src= {photo1} className='w-[300px]' alt='' />
        <Card.Body>
          <Card.Title>公益機構Ａ</Card.Title>
          <Card.Text>請大家發會愛心多捐款</Card.Text>
          <Button variant="outline-success" onClick={handlePageChange.bind(null,1)}>我要捐款</Button>{' '}
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
          <Button variant="outline-success" onClick={handlePageChange.bind(null,2)}>我要捐款</Button>{' '}
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
          <Button variant="outline-success" onClick={handlePageChange.bind(null,3)}>我要捐款</Button>{' '}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 day ago</small>
        </Card.Footer>
      </Card>

    </CardGroup>
  );
}

export default GroupCard;