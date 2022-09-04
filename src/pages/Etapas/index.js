import React from 'react';
import Title from '../../components/Title/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faLaptop, faMoneyCheckDollar, faHandshake, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss';


function Card ({icon, text}){
    return (
        <div className={styles.cardItem}>
            <span><FontAwesomeIcon icon={icon}/></span>
            <p>{text}</p>
        </div>
    )
}

export default function Etapas () {
    return (
        <section id="etapas" className={styles.etapas}>
            <Title section="Etapas"/>
            <div className={styles.items}>
                <Card 
                    icon={faBullseye} 
                    text="Selecionar 15 alunos de baixa renda entre o 8º e 9º ano de escolas públicas da Grande São Paulo."
                />
                <Card 
                    icon={faLaptop}
                    text="Ensinar programação e permitir a ambientação do jovem ao mercado de trabalho."
                />
                <Card
                    icon={faMoneyCheckDollar}
                    text="Fornecer transporte até a empresa e uma bolsa de R$200,00 para incentivo aos estudos*."
                />
                <Card
                    icon={faHandshake}
                    text="Realizar uma parceria com APM da ETEC MCM, proporcionando aos alunos visitas a unidade e oficinas de mentoria realizadas pelos alunos da ETEC."
                />
                <Card
                    icon={faSuitcase}
                    text="Proporcionar ao aluno que conseguiu ingressar na ETEC no 1º ano, e que teve empenho no programa, um estágio na Tecnologia Única."
                />
            </div>
            <p>* Mediante presença mínima e desempenho.</p>
        </section>
    )
}