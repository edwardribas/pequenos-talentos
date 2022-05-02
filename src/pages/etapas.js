import React from 'react';
import Title from '../components/title.js';


function Card (props){
    return (
        <div className="item">
            <i className={props.icon}></i>
            <p>{props.text}</p>
        </div>
    )
}

export default function Etapas () {
    return (
        <section id="etapas">
            <Title section="Etapas"/>
            <div className="etapas">
                <Card icon="fa-solid fa-bullseye" text="Selecionar 15 alunos de baixa renda entre o 8º e 9º ano de escolas públicas da Grande São Paulo."/>
                <Card icon="fa-solid fa-laptop" text="Ensinar programação e permitir a ambientação do jovem ao mercado de trabalho."/>
                <Card icon="fa-solid fa-money-check-dollar" text="Fornecer transporte até a empresa e uma bolsa de R$200,00 para incentivo aos estudos*."/>
                <Card icon="fa-solid fa-handshake" text="Realizar uma parceria com APM da ETEC MCM, proporcionando aos alunos visitas a unidade e oficinas de mentoria realizadas pelos alunos da ETEC."/>
                <Card icon="fa-solid fa-suitcase" text="Proporcionar ao aluno que conseguiu ingressar na ETEC no 1º ano, e que teve empenho no programa, um estágio na Tecnologia Única."/>
            </div>
            <p>* Mediante presença mínima e desempenho.</p>
        </section>
    )
}