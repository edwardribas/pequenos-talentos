import React from 'react';
import logotipo from '../assets/img/logotipo.svg';

export default function Footer () {
    return (
        <footer>
            <a href="https://tecnologiaunica.com.br/" target="_blank" rel="noreferrer">
                <img src={logotipo} alt="Logo da Tecnologia Única" />
            </a>
            <div className="links">
                <a href="https://www.instagram.com/tecnologiaunica/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i> <span>@tecnologiaunica</span></a>
                <a href="https://www.instagram.com/pequenostalentosunica/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i> <span>@pequenostalentosunica</span></a>
                <a href="https://www.linkedin.com/company/tecnologia-unica/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i> <span>Tecnologia Única</span></a>
                <a href="mailto:gestao@tecnologiaunica.com.br"><i className="fa-solid fa-envelope"></i> <span>gestao@tecnologiaunica.com.br</span></a>
            </div>
        </footer>
    )
}