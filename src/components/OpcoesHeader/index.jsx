import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS ', 'FAVORITOS', 'ESTANTE']

const Opcao = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const Opcoes = styled.ul`
    display: flex;
`

function OpcoesHeader() {

    return (
        <>
            <Opcoes>
                {textoOpcoes.map((texto, i) => (
                    <Link to={`/${texto.toLowerCase()}`}> <Opcao key={i}><p>{texto}</p></Opcao> </Link>
                ))}
            </Opcoes>
        </>
    );
}

export default OpcoesHeader;