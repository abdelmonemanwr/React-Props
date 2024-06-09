import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { products } from '../../Models/ProductList';
import { ProductItem } from './ProductItem';

export function Products() {
  return (
    <div>
      <h1 className='bg-dark p-4 mx-5 my-3 text-light'>Our Products</h1>
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
