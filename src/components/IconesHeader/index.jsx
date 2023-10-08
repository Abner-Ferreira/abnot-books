import React from 'react';
import './style.css';
import sacola from '../../assets/sacola.svg'
import perfil from '../../assets/perfil.svg'



const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <>
            <ul className='icones'>
                {icones.map((icone, i) => (
                    <li className='icone' key={i}><img src={icone} alt='icone' /></li>
                ))}
            </ul>
        </>
    );
}

export default IconesHeader;