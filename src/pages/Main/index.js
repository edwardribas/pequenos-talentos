import './styles.module.scss';
import React from 'react';

// Sections
import Hero from '../Hero';
import Projeto from '../Projeto';
import Etapas from '../Etapas';
import Funcionamento from '../Funcionamento';
import Participantes from '../Participantes';

export default function Main () {

    return(
        <main>
            <Hero />
            <Projeto />
            <Etapas />
            <Funcionamento />
            <Participantes />
        </main>        
    )
}
