import React, { Component } from 'react';
import {Nav,NavDropdown,Form,FormControl,Button,Navbar, Container}  from 'react-bootstrap';
import './Header.css';
class Header extends Component {

    
    render() {
        return (
            <Container fluid>

            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">통선임관리</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="정보관리" id="basic-nav-dropdown">
                <NavDropdown.Item href="/userList">사용자</NavDropdown.Item>
                <NavDropdown.Item href="/jobList">Job</NavDropdown.Item>
                <NavDropdown.Item href="/agentList">agent</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
            </Navbar>
            </Container>
        );
    }
}
 
export default Header;