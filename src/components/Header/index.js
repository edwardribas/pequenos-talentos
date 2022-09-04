import React, { useState } from 'react';
import styles from './styles.module.scss';

// Images
import WhiteLogo from '../../assets/img/logo_white.svg';
import DefaultLogo from '../../assets/img/logo.svg';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faClose } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    const [activeHeader, toggleHeader] = useState(false);
    const [activeMenu, toggleMenu] = useState(false);

    window.onscroll = () => {
        if (window.scrollY >= 70) toggleHeader(true);
        if (window.scrollY <= 5) toggleHeader(false);
    }

    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    return (
        <header className={activeHeader ? styles.active : undefined}>
            <nav>
                <img 
                    src={activeHeader ? WhiteLogo : DefaultLogo}
                    alt="Logo da empresa"
                    onClick={() => scrollToTop()}
                />

                <div 
                    className={activeMenu ? `${styles.back} ${styles.active}` : styles.back} 
                    onClick={() => toggleMenu(false)}
                >
                    <ul className={activeMenu ? styles.active : null} >
                        <li className={styles.special}><i><FontAwesomeIcon icon={faClose}/></i></li>
                        <li onClick={() => scrollToTop()}><span>Início</span></li>
                        <li><a href='#projeto'>Projeto</a></li>
                        <li><a href='#etapas'>Etapas</a></li>
                        <li><a href='#funcionamento'>Funcionamento</a></li>
                        <li><a href='#participantes'>Participantes</a></li>
                    </ul>
                </div>

                <i
                    onClick={() => toggleMenu(!activeMenu)}
                    className={styles.toggler}
                >
                    <FontAwesomeIcon icon={faBarsStaggered}/>
                </i>
            </nav>
        </header>
    )
};
