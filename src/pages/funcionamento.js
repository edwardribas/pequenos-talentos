import React from 'react';
import Title from '../components/title.js';

export default function funcionamento () {
    return (
        <section id="funcionamento">
            <Title section="Funcionamento"/>
            <div className="content">
                <div className="text">
                    <p>
                        A APM ETEC MCM será responsável por auxiliar na divulgação do edital de seleção e apresentar o projeto ao 
                        O Grêmio Estudantil e o Laboratório de Aprendizagem Empresa Júnior.</p>                    
                    <p>
                        Estes alunos serão convidados a dar suporte ao projeto. Poderão apadrinhar os ingressantes do programa
                        e acompanhá-los durante as visitas à Escola Técnica por meio de ações lúdicas que incentivem ao aprendizado 
                        e continuação nos estudos.</p>
                    <p>
                        Os alunos serão capacitados, com <b>conceitos básicos</b> que estimulam a <b>lógica de programação, 
                        criação de jogos, aplicativos</b> e <b>robótica</b>.
                    </p>
                </div>
                <div className="card">
                    <h3>Seleção</h3>

                    <p>
                        Além da <b>bolsa de R$200</b> durante a capacitação, alunos com empenho satisfatório, que queiram 
                        crescer profissionalmente; ingressando na ETEC, mediante processo seletivo, serão <b>convidados 
                        a participar do quadro de profissionais da Tecnologia Única por meio de estágio</b>.
                    </p>
                    <p>
                        Serão selecionados para o projeto alunos de baixa renda que mostrem empenho nos estudos, por 
                        meio de <b>médias das notas</b>.
                    </p>
                </div>
            </div>
        </section>
    )
}