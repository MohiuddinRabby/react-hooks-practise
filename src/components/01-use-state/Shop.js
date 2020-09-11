import React from "react";
import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const Shop = () => {
  const [count, setCount] = useState(1);
  const incCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    setCount(count - 1);
  };
  const price = 10;
  const totalPrice = price * count;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>Product-one</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>total-price: {totalPrice}</Card.Text>
        <Button onClick={incCount}>+</Button>{" "}
        <Form.Control
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <Button onClick={decCount} disabled={count < 1}>
          -
        </Button>
        <br />
        <br />
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Shop;
