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
  const payment1 = '0x65c1ffca7925AEe7E4f1F931D1B01fA3916Bae1b';
  const payment2 = '0x8BFDfc4CbE74c014d1956eE50CD80A04e35E6603';
  const payment3 = '0x7F7E17A0367D608a9A07Ed0911DF592582fB7b3E';

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

      <Card>
        <Card.Img variant="top" src= {photo1} style={{ height: "500px" }} />
        <Card.Body>
          <Card.Title>公益機構Ａ</Card.Title>
          <Card.Text>請大家發會愛心多捐款</Card.Text>
          <Button variant="outline-success" onClick={handlePageChange.bind(null,1)}>我要捐款</Button>{' '}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 day ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src= {photo2} style={{ height: "500px" }} />
        <Card.Body>
          <Card.Title>公益機構Ｂ</Card.Title>
          <Card.Text>請大家發會愛心多捐款</Card.Text>
          <Button variant="outline-success" onClick={handlePageChange.bind(null,2)}>我要捐款</Button>{' '}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 day ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src= {photo3} style={{ height: "500px" }} />
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