import React from 'react';

// Sections
import Hero from '../pages/hero.js';
import Projeto from '../pages/projeto.js';
import Etapas from '../pages/etapas.js';
import Funcionamento from '../pages/funcionamento.js';
import Participantes from '../pages/participantes.js';

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
