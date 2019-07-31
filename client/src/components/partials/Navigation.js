import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import { Link } from 'react-router-dom';

class Navigation extends Component {
  state = {
    isOpen: false
  };

  // toggle burger menu when clicked
  toggleBurgerMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  // toggle burger menu when menu link is clicked
  closeBurgerMenu() {
    if (this.state.isOpen === true) {
      this.toggleBurgerMenu();
    }
  }

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>Items List</NavbarBrand>
            <NavbarToggler onClick={this.toggleBurgerMenu} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <Link
                    className='nav-link'
                    onClick={e => {
                      this.closeBurgerMenu(e);
                    }}
                    to='http://github.com/slamdunc123'
                  >
                    Github
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className='nav-link'
                    onClick={e => {
                      this.closeBurgerMenu(e);
                    }}
                    to='/'
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className='nav-link'
                    onClick={e => {
                      this.closeBurgerMenu(e);
                    }}
                    to='/items'
                  >
                    Items
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
