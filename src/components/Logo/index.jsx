import React from 'react';
import logo from '../../assets/logo.svg'
import './style.css';

function Logo() {
    return (
        <>
            <div className='logo'>
                <img src={logo} alt='Logo abnot-books' className='logo-img'/>
                <p><strong>Abnot</strong>Books</p>
            </div>
        </>
    );
}

export default Logo;