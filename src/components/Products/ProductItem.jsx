import React from 'react'
import './ProductItem.css'; 
import { Card, Button } from 'react-bootstrap';

export function ProductItem({ product }) {
   return (
    <div>
      <Card>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}</Card.Text>
          <Card.Text>Quantity: {product.quantity}</Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}