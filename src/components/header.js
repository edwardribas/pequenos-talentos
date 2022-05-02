import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';
import logoWhite from '../assets/img/logo_white.svg';

export default function Header(){

    const [activeHeader, toggleHeader] = useState('');
    window.onscroll = () => window.scrollY >= 80 ? toggleHeader('1') : toggleHeader('');

    const [activeMenu, toggleMenu] = useState('');


    return (
        <header className={activeHeader ? 'active' : ''}>
            <nav>
                 {/* eslint-disable-next-line*/}
                <a href="#"><img src={activeHeader ? logoWhite : logo} alt="Logo da empresa"/></a> 
                <div className={activeMenu ? 'back active' : 'back'} onClick={() => toggleMenu("")}>
                    <ul className={activeMenu ? 'active' : ''}>
                        <li className="special"><i className="fa-solid fa-close" onClick={() => toggleMenu(!activeMenu)}></i></li>
                        <li><a href="#" onClick={() => toggleMenu('')}>Início</a></li> {/* eslint-disable-line*/}
                        <li><a href="#projeto" onClick={() => toggleMenu('')}>Projeto</a></li>
                        <li><a href="#etapas" onClick={() => toggleMenu('')}>Etapas</a></li>
                        <li><a href="#funcionamento" onClick={() => toggleMenu('')}>Funcionamento</a></li>
                        <li><a href="#participantes" onClick={() => toggleMenu('')}>Participantes</a></li>
                    </ul>
                </div>
                <i className="fa-solid fa-bars-staggered toggler" onClick={() => toggleMenu(!activeMenu)}></i>
            </nav>
        </header>
    )
};
