import styles from './styles.module.scss';
import React from 'react';
import Title from '../../components/Title/index.js';

export default function Projeto () {
    return (
        <section id="projeto" className={styles.projeto}>
            <div className={styles.banner_canal}>
                <h2>Aprender nunca foi tão fácil!</h2>
                <p>
                    Se inscreva já em nosso novo canal, onde você encontrará muito
                    conteúdo complementar para seus estudos!
                </p>
                <a
                    href="https://www.youtube.com/channel/UCCBK5UP30vaTiEfK4sZMCEQ"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visitar
                </a>
            </div>

            <Title section="Proposta"/>
            <div className={styles.content}>
                <div className={styles.card}>
                    <h3>Projeto</h3>

                    <p>
                        A parceria entre a empresa <b>Tecnologia Única</b> e a <b>Associação de Pais e Mestres da ETEC MCM</b>, 
                        visa a capacitação e desenvolvimento em tecnologia da informação para estudantes do ensino 
                        fundamental de escola pública municipal ou estadual.
                    </p>

                    <p>
                        Nosso propósito é <b>promover a adequação de competências técnicas e socioemocionais</b> atualmente
                        exigidas no mundo profissional.
                    </p>
                </div>
                <div className={styles.text}>
                    <p>
                        Este é um projeto piloto que inicialmente atende duas escolas estaduais, totalizando 15 alunos.
                        A proposta é:
                    </p>

                    <ul>
                        <li>Fomentar o interesse do público-alvo em cursar o ensino técnico/tecnológico;</li>
                        <li>Estimular e desenvolver o raciocínio lógico, a criatividade, competências socioemocionais nas relações pessoais e interpessoais;</li>
                        <li>Facilitar a inserção dos jovens no mundo do trabalho;</li>
                        <li>Instigar ao adolescente de baixa renda ter uma visão mais atrativa para seu futuro, por meio dosentimento de pertencimento ao mundo globalizado, conforme for se ambientalizando a rotina da empresa;</li>
                        <li>Atender a demanda profissional do mercado de trabalho;</li>
                        <li>Contribuir para a execução dos Objetivos do Desenvolvimento Sustentável (ODS) determinados pelos membros da Organização das Nações Unidas (ONU).</li>
                    </ul>

                </div>
            </div>
        </section>
    )
}