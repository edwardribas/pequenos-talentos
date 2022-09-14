import React from 'react';
import Logotipo from '../../assets/img/logotipo.svg';
import styles from './styles.module.scss';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Link({href, text, icon}) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <span><FontAwesomeIcon icon={icon}/></span> 
            {text}
        </a>
    )
}
export default function Footer () {
    return (
        <footer>
            <img src={Logotipo} alt="Logo da Tecnologia Única" />
            
            <div className={styles.links}>
                <Link
                    href="https://www.instagram.com/tecnologiaunica/"
                    text="@tecnologiaunica"
                    icon={faInstagram}
                />
                <Link
                    href="https://www.instagram.com/pequenostalentosunica/"
                    text="@pequenostalentosunica"
                    icon={faInstagram}
                />
                <Link
                    href="https://tecnologiaunica.com.br/"
                    text="Tecnologia Única"
                    icon={faComputer}
                />
                <Link
                    href="https://www.youtube.com/channel/UCCBK5UP30vaTiEfK4sZMCEQ"
                    text="Pequenos Talentos"
                    icon={faYoutube}
                />
            </div>
        </footer>
    )
}