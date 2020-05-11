import React from 'react';
import './nav.css'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.svg';

const Nav = () => {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href='#'>
                    <img src={logo} alt='logo'/>
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Nav;