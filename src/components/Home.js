import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import photo1 from '../img/photo1.png';
import photo2 from '../img/photo2.png';
import photo3 from '../img/photo3.png';

function GroupCard() {
  return (
    <CardGroup>

      <Card>
        <Card.Img variant="top" src= {photo1} style={{ height: "500px" }} />
        <Card.Body>
          <Card.Title>公益機構Ａ</Card.Title>
          <Card.Text>請大家發會愛心多捐款</Card.Text>
          <Button variant="outline-success">我要捐款</Button>{' '}
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
          <Button variant="outline-success">我要捐款</Button>{' '}
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
          <Button variant="outline-success">我要捐款</Button>{' '}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 day ago</small>
        </Card.Footer>
      </Card>

    </CardGroup>
  );
}

export default GroupCard;