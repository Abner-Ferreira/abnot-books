import React from 'react';
import './style.css';

const textoOpcoes = ['CATEGORIAS ', 'FAVORITOS', 'MINHA ESTANTE']
function OpcoesHeader() {

    return (
        <>
            <ul className='opcoes'>
                {textoOpcoes.map((texto, i) => (
                    <li className='opcao' key={i}><p>{texto}</p></li>
                ))}
            </ul>
        </>
    );
}

export default OpcoesHeader;