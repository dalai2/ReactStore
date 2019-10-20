import React, { Component} from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer } from './Button'

export default class Navbar extends Component {
    render() {
        return (<NavWrapper className="navbar navbar-expand-sm bg-primary
        navbar-dark px-sm-5">
            <Link to='/home'>
            <img src={logo} alt="home"
            className='navbar-brand'/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to='/productos' className='nav-link'>
                        productos
                    </Link>
                </li>
            </ul>
            <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className="mr-2">
                    <i className="fas fa-cart-plus"></i>
                    </span>
                    mi carrito
                    </ButtonContainer>
            </Link>
         </NavWrapper> 
        ); 
    }
}

const NavWrapper = styled.nav`
background: rgba(4, 1, 29, 0.92)!important;
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize;
}
`;