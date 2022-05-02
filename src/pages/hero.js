import React from 'react';
import logo from '../assets/img/logo.svg';

export default function Hero () {
    return (
        <section id="inicio">
            <div className='container'>
                <div className="text">
                    <h1>Pequenos Talentos</h1>
                    <h3>
                        Empenhados e apaixonados pela formação de laços
                        entre uma nova geração de programadores.
                    </h3>
                    <a href="#projeto"><i className="fa-solid fa-computer-mouse"></i> Conheça </a>
                </div>
                <div className="image">
                    <img src={logo} alt="Logo do projeto Pequenos Talentos."/>
                </div>
            </div>
        </section>
    )
}