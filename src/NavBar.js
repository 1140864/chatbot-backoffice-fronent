import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import Config from './config/Config';

export default class NavBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={`${Config.gitHubPages}/`}>BackOffice</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={`${Config.gitHubPages}/Home`}>
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to={`${Config.gitHubPages}/Intent`}>
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