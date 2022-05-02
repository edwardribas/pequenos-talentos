import React from 'react';
import Title from '../components/title.js';

export default function Projeto () {
    return (
        <section id="projeto">
            <Title section="Proposta"/>
            <div className="content">
                <div className="card">
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
                <div className="text">
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