import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';

// Components and Pages
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

// Images

import camille from './assets/img/pequenos/camille.png';
import fernando from './assets/img/pequenos/fernando.png';
import giovana from './assets/img/pequenos/giovana.png';
import gustavo from './assets/img/pequenos/gustavo.png';
import izabelli from './assets/img/pequenos/izabelli.png';
import lawrence from './assets/img/pequenos/lawrence.png';
import lucas from './assets/img/pequenos/lucas.png';
import marjory from './assets/img/pequenos/marjory.png';
import matheus from './assets/img/pequenos/matheus.png';
import micaela from './assets/img/pequenos/micaela.png';
import ricardo from './assets/img/pequenos/ricardo.png';
import sabrina from './assets/img/pequenos/sabrina.png';
import stephany from './assets/img/pequenos/stephany.png';
import thalys from './assets/img/pequenos/thalys.png';
import thiago from './assets/img/pequenos/thiago.png';
import sampaio from './assets/img/padrinhos/gabrielsampaio.png';
import gabryel from './assets/img/padrinhos/gabryel.png';
import giovanna from './assets/img/padrinhos/giovanna.png';
import gustavosilverio from './assets/img/padrinhos/gustavosilverio.png';
import larissa from './assets/img/padrinhos/larissa.png';
import julia from './assets/img/padrinhos/juliagranado.png';
import laura from './assets/img/padrinhos/lauraesther.png';
import leticia from './assets/img/padrinhos/leticia.png';
import nayara from './assets/img/padrinhos/nayara.png';
import pedro from './assets/img/padrinhos/pedronicolas.png';
import ribas from './assets/img/padrinhos/ribas.png';

export {camille, fernando, giovana, gustavo, izabelli, lawrence, lucas, marjory, matheus, micaela, ricardo, sabrina, stephany, thalys, thiago,
sampaio, gabryel, giovanna, gustavosilverio, larissa, julia, laura, leticia, nayara, pedro, ribas};

const root = ReactDOM.createRoot(document.querySelector("#root"));

// Header, Main > Section, Footer

root.render(
<>
    <Header/>
    <Main/>
    <Footer/>
</>
)