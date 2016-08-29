import React from 'react';
import { NavbarHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const NavBar = () => (
    <Navbar inverse style={ { height: "10%" } }>

        <Navbar.Header pullLeft>
          <Navbar.Brand style={ { "fontFamily": 'awesome', "fontSize":'3,7%' } }>
             <a  href="/home">Code Connect</a>
          </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
            <Nav pullCenter>
                <NavItem href="/contributor" bsStyle="success" >
                    Contributer
                </NavItem>
                <NavItem href="/mentor" bsStyle="warning">
                    Mentor
                </NavItem>
                <NavItem href="/projects">
                    Projects
                </NavItem>
                <NavItem href="/about">
                    about
                </NavItem>

            </Nav>


            <Nav pullRight>
              <NavItem href="/auth/github">
                  Login
              </NavItem>
                <NavDropdown title="profile"
                             id="basic-nav-dropdown">
                    <MenuItem href="/yourtasks">
                        Your Tasks
                    </MenuItem>
                    <MenuItem href="/yourproject">
                        Your Project
                    </MenuItem>

                    <MenuItem divider />
                    <MenuItem href="/auth/github"> Logout
                    </MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;
