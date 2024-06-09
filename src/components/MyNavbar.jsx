import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export function MyNavbar() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Arena Station</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
