import React, { Component } from 'react';
import './NavBar.css';
import { Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavbarNav } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

class NavBar extends Component {
    render() {
        return (
            <Navbar className="navcolor" dark expand="md" scrolling fixed='top'>
                <NavbarBrand href="/">
                    <img className='npnglogo' src='/medias/npngwhite.png' alt='Logo NPNG' />
                </NavbarBrand>
                <NavbarNav right>
                    <NavItem>
                        <form className="form-inline md-form mt-0">
                            <FontAwesomeIcon className='d-none SearchIcon fa-lg d-sm-block' color="white" icon={faSearch} />
                            <SearchBar />
                        </form>
                    </NavItem>
                </NavbarNav>
            </Navbar>
        );
    }
}
export default NavBar;