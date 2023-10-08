import React from 'react';
import sacola from '../../assets/sacola.svg'
import perfil from '../../assets/perfil.svg'
import styled from 'styled-components';

const Icone = styled.li `
    margin-right: 40px;
    width: 25px;
`
const Icones = styled.ul `
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <>
            <Icones>
                {icones.map((icone, i) => (
                    <Icone className='icone' key={i}>
                        <img src={icone} alt='icone' />
                    </Icone>
                ))}
            </Icones>
        </>
    );
}

export default IconesHeader;