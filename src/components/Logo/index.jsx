import React from 'react';
import logo from '../../assets/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div `
    display: flex;
        flex-direction: row;
        font-size: 30px;
`

const LogoImg = styled.img `
    margin-right: 10px;
`

function Logo() {
    return (
        <>
            <LogoContainer>
                <LogoImg src={logo} alt='Logo abnot-books'/>
                <p><strong>Abnot</strong>Books</p>
            </LogoContainer>
        </>
    );
}

export default Logo;