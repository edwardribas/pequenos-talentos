import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DefaultLogo from '../../assets/img/logo.svg';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';


export default function Hero () {
    return (
        <section id="inicio" className={styles.inicio}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1>Pequenos Talentos</h1>
                    <h3>
                        Empenhados e apaixonados pela formação de laços
                        entre uma nova geração de programadores.
                    </h3>
                    <a href="#projeto"><i><FontAwesomeIcon icon={faComputerMouse}/></i> Conheça </a>
                </div>
                <div className={styles.image}>
                    <img src={DefaultLogo} alt="Logo do projeto Pequenos Talentos."/>
                </div>
            </div>
        </section>
    )
}