import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

function NavigationBar() {
    return (
        <>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    Posts application
                </NavbarBrand>
                <Collapse navbar>
                    <Nav pills>
                        <NavItem>
                            <NavLink href="/post">
                                View posts
                            </NavLink>
                        </NavItem>
                        <NavLink
                            active
                            href="/post/create"
                        >
                            Create a new post
                        </NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default NavigationBar;