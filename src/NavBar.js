import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>BackOffice</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/Home">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to='/Intent'>
                            <NavItem eventKey={2}>Intents</NavItem>
                        </LinkContainer>
                    </Nav>
                    {/*<Nav pullRight>
                        <NavItem eventKey={2} href="#">Logout</NavItem>
                    </Nav>*/}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}