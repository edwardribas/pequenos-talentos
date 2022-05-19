import React, { useState } from 'react';
import Title from '../components/title';
import {camille, fernando, giovana, gustavo, izabelli, lawrence, lucas, marjory, matheus, micaela, ricardo, sabrina, stephany, thalys, thiago,
sampaio, gabryel, giovanna, gustavosilverio, larissa, julia, laura, leticia, nayara, pedro, ribas, raissa, davi, andrey, rafael} from '../index.js';

// Aluno
const Aluno = props => {
    return (
        <div className="aluno">
            <div className="image">
                <img src={props.src} alt="Imagem de um dos Pequenos Talentos."/>
            </div>
            <div className="description">
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}



export default function Participantes () {

    const [selectedGallery, selectGallery] = useState('');
    
    return (
        <section id="participantes">
            <Title section="Participantes"/>

            <div className='box-check'>
                <button aria-label="Ver pequenos" className={selectedGallery ? '' : 'active'} onClick={() => selectGallery('')}>Pequenos</button>
                <button aria-label="Ver padrinhos" className={selectedGallery ? 'active' : ''} onClick={() => selectGallery('1')}>Padrinhos</button>
            </div>

            <div className='main_wrapper'>
                <div className={selectedGallery ? 'pequenos' : 'pequenos checked'}>
                    <div className='wrapper'>
                        <Aluno
                            src={lawrence} name="Lawrence"
                            desc="Tenho 12 anos e estou na 8ª série no Olavo Hansen. Sou ginasta, gosto de cantar, dançar e escutar música. A minha expectativa para o projeto é que eu consiga programar e fazer aplicativos."
                        />
                        <Aluno
                            src={camille} name="Camille"
                            desc="Tenho 13 anos, estou no 8º ano, gosto de estudar, me maquiar e jogar alguns jogos. Minha expectativa é aprender com essa oportunidade e conseguir alcançar todas as metas depositadas nesse ano com vocês."
                        />
                        <Aluno
                            src={matheus} name="Matheus Marques"
                            desc="Tenho 13 anos, estou no 8º ano na escola Olavo Hansen. Sou uma pessoa responsável e comprometida com o que faço! Estarei com toda disposição para embarcar nessa experiência e darei o melhor pra ajudá-los."
                        />
                        <Aluno
                            src={fernando} name="Fernando"
                            desc="Tenho 14 anos e estou no 9º ano. Tenho várias metas e sonhos para alcançar, e tenho certeza que este projeto aqui é apenas meu inicio. Gosto muito de tecnologia, esportes marciais e aprender novos idiomas."
                        />
                        <Aluno
                            src={giovana} name="Giovana"
                            desc="Tenho 15 anos, estou no 9º ano. Amo jogar roblox, mas jogo outros jogos também. Minha expectativa para essa experiência é a melhor possível e é uma honra poder participar desse projeto incrível, para conseguir um futuro melhor para mim e minha família."
                        />
                        <Aluno
                            src={ricardo} name="Ricardo"
                            desc="Tenho 12 anos, estou atualmente no Olavo Hansen no 8º ano. Gosto de jogos e muitas outras coisas. Sou bem objetivo no que faço. Minha expectativa para o curso é de aprender e conquistar coisas boas."
                        />
                        <Aluno
                            src={izabelli} name="Izabelli"
                            desc="Tenho 12 anos estou no 8º ano. Gosto muito de jogar FreeFire e Minecraft. Minhas expectativas para esse curso são de desenvolver habilidades e competências que me ajudem a ter um futuro melhor, com oportunidades de crescimento profissional, pessoal e financeiro!"
                        />
                        <Aluno
                            src={stephany} name="Stephany"
                            desc="Tenho 14 anos, estou no 9º ano e gosto muito de ler e cozinhar. Minha expectativa é aprender e me empenhar ao máximo com essa oportunidade oferecida."
                        />
                        <Aluno
                            src={thalys} name="Thalys"
                            desc="Tenho 13 anos eu gosto bastante de andar de bike e nos tempos livres eu jogo roblox. Esse curso é uma grande oportunidade. Sou muito grato por ser um dos escolhidos."
                        />
                        <Aluno
                            src={sabrina} name="Sabrina"
                            desc="Tenho 14 anos, estou no 9°ano, gosto bastante de mexer nas redes sociais e em jogos on-line, fiquei extremamente feliz com a oportunidade que me foi dada de participar dos Pequenos Talentos. A palavra que define é gratidão!"
                        />
                        <Aluno
                            src={thiago} name="Thiago"
                            desc="Tenho 14 anos, estou no 9º ano, gosto muito de estudar, jogar Minecraft e outros jogos também. Minha expectativa para essa oportunidade é a melhor possível para conseguir um futuro melhor para minha família."
                        />
                        <Aluno
                            src={gustavo} name="Gustavo"
                            desc="Tenho 14 anos, estou no 9º ano do ensino fundamental na escola Leico Akaishi. Meus hobbies são ouvir música, apreciar a natureza e amo jogar. Eu espero muito que o curso me ajude a ter mais conhecimento e que eu possa crescer profissionalmente."
                        />
                        <Aluno
                            src={micaela} name="Micaela"
                            desc="Tenho 12 anos, estou no 8º ano e gosto de jogar e de redes sociais. Eu estou muito animada para o inicio do projeto e agradeço a todos os que irão me ajudar nessa aventura."
                        />
                        <Aluno
                            src={marjory} name="Marjory"
                            desc="Tenho 14 anos, estou no 9°ano, gosto de dançar e cantar. Minhas expectativas para o curso são: Adquirir conhecimento e me divertir aprendendo, agradeço desde já pela oportunidade!"
                        />
                        <Aluno
                            src={lucas} name="Lucas"
                            desc="Tenho 13 anos, estou no 9° ano. Gosto de jogar bastante jogos de ação... eu espero desenvolver bastante conhecimento neste treinamento/curso."
                        />
                    </div>
                </div>

                <div className={selectedGallery ? 'padrinhos checked' : 'padrinhos'}>
                    <div className='wrapper'>
                        <Aluno
                            src={ribas} name="Eduardo Ribas"
                            desc="Tenho 17 anos e estou na 2ª série na ETEC MCM. Tem sido uma ótima experiência auxiliar neste projeto e espero que ele possa impactar positivamente na vida de cada um dos atuais e futuros integrantes."
                        />
                        <Aluno
                            src={gabryel} name="Gabryel Henrique"
                            desc='Tenho 17 anos e estou no 2° ano do Ensino Médio. No meu tempo livre gosto de jogar, ouvir músicas, cozinhar e caminhar. Estou gostando muito de participar do projeto, está sendo uma experiência incrível ajudar os “Pequenos”.'
                        />
                        <Aluno
                            src={sampaio} name="Gabriel Sampaio"
                            desc="Tenho 16 anos, curso o 2º ano do Ensino Médio integrado ao Técnico em Informática para Internet na Etec MCM e moro em Mauá. Curto jogar futebol, jogar no computador, programar e conversar com meus amigos. Estou amando o projeto e a experiência de passar o meu conhecimento."
                            />
                        <Aluno
                            src={giovanna} name="Giovanna Alves"
                            desc="Tenho 16 anos e estudo na ETEC MCM. Estou no curso de Informática para Internet no 3° ano e faço parte do projeto do Pequenos Talentos. No meu tempo livre, gosto de praticar esportes, dançar, ouvir música e ler de vez em quando. Me interessei em participar porque achei muito bonita a iniciativa de ajudar escolas estaduais da região. Está sendo uma oportunidade de aprendizado pra eles e para nós, estudantes da ETEC."
                        />
                        <Aluno
                            src={gustavosilverio} name="Gustavo Silvério"
                            desc="Tenho 16 anos e estou cursando Tecnologia da informação na ETEC MCM. Sonho trabalhar na área de T.I e pretendo ser um Engenheiro de Software no futuro. Em meu tempo vago, normalmente assisto animes ou jogo com meus amigos. Estou achando o projeto incrivel! Tem sido extremamente gratificante poder auxiliar os afilhados, todos são muito legais e atenciosos. Achei incrível a oportunidade que deram a eles."
                        />
                        <Aluno
                            src={julia} name="Júlia Granado"
                            desc="Tenho 16 anos e curso o 2º ano do Ensino Médio. Em meu tempo livre, gosto muito de escutar música e assistir filmes de terror. Minhas metas são adquirir cada vez mais conhecimento sobre a área de informática e realizar viagens para conhecer diversas culturas ao redor do mundo. Estou amando o projeto, principalmente os pequenos. É muito gratificante a sensação de estar inspirando e ensinando eles!"
                        />
                        <Aluno
                            src={larissa} name="Larissa Mota"
                            desc='Tenho 17 anos e curso o 3° ano de Administração integrado ao Ensino Médio na ETEC MCM. Gosto de artes, esportes ao ar livre e de ouvir música. No meu tempo livre, eu escrevo, desenho ou ando de bicicleta. Atualmente, pretendo me graduar em Neurociências e vejo esse projeto como uma oportunidade de aprender mais e ajudar os "Pequenos" a seguir nessa trajetória de conhecimento e visão de vida.'
                        />
                        <Aluno
                            src={laura} name="Laura Esther"
                            desc="Tenho 16 anos e atualmente estudo na ETEC Maria Cristina Medeiros cursando o 2° ano de Técnico em Informática integrado ao ensino médio. Gosto muito do meu curso e pretendo seguir na área. No meu tempo livre, gosto de ler, jogar e assistir séries e documentários. Entrei no projeto porque gostei muito da ideia, e na hora quis participar."
                        />
                        <Aluno
                            src={leticia} name="Letícia Honorio"
                            desc="Tenho 16 anos e estou no 2º ano do Ensino Médio integrado ao técnico de informática para a internet na ETEC Profª. Maria Cristina Medeiros. Quando estou com tempo, gosto de ler, assistir séries de comédia e ouvir músicas. Estou adorando a experiência de fazer parte deste projeto e ajudar os pequenos nos estudos."
                        />
                        <Aluno
                            src={nayara} name="Nayara Mota"
                            desc="Tenho 17 anos e estou cursando o 3° ano do Ensino médio integrado ao curso técnico de Administração  na ETEC Prof. Maria Cristina Medeiros. Meu hobby favorito é jogar futsal. Sou apaixonada pela área de química e gosto também da área de tecnologia. Estou amando fazer parte do projeto, ensinando e auxiliando os pequenos na construção do futuro deles."
                        />
                        <Aluno
                            src={pedro} name="Pedro Nicolas"
                            desc="Tudo bem? Tenho 16 anos de idade e atualmente curso Técnico em Informática para Internet na ETEC Profª. Maria Cristina Medeiros e estou vendo diversas coisas legais por lá! Aprendo tecnologias como HTML, CSS, JavaScript e PHP. Tem sido muito legal participar desse mega projeto e me dá ainda mais certeza de que devo seguir na área! Amo sair com meus amigos, ler livros e assistir séries."
                        />
                        <Aluno
                            src={raissa} name="Raíssa Bespalec"
                            desc='Eu tenho 16 anos e atualmente estou no 2º ano de informática para a internet na ETEC MCM. Amo programar, ler, viajar, comer e ir para a igreja. Minha meta é conseguir trabalhar nessa área de informática logo cedo e seguir na carreira até me aposentar. Curto demais ser madrinha, pois eu amo ajudar, ainda mais se for em algo que é a minha paixão. Espero muito que os "pequenos" aproveitem a oportunidade que estão sendo lhe dadas.'
                        />
                        <Aluno
                            src={davi} name="Davi Benatti"
                            desc='Eu tenho 16 anos e estou atualmente no 2º ano do Ensino Médio integrado a Técnico em Informática na ETEC MCM. Amo aprender diversas coisas novas e conversar sobre isso com os meus amigos. Tenho altas expectativas a respeito desse projeto e espero que, do mesmo jeito que eu auxilie os pequenos, aprenda muito com essa experiência.'
                        />
                        <Aluno
                            src={andrey} name="Andrey Viana"
                            desc='Tenho 17 anos e no momento, curso o 2º ano do Ensino Médio integrado a Informática para Internet na ETEC MCM. Estou gostando demais da experiência de poder ajudar e despertar o interesse na área da programação dos pequenos. Espero poder contribuir muito ainda com esse projeto e que eu também venha a aprender bastante com cada experiência.'
                        />
                        <Aluno
                            src={rafael} name="Rafael Lima"
                            desc='Eu tenho 16 anos, estudo na Etec MCM e curso o 2º ano do Ensino Médio. Entrar para esse projeto está sendo uma experiência inovadora, pois é realmente legal auxiliar para o desenvolvimento do futuro e contribuir para que os pequenos sejam os profissionais que o mercado de trabalho tanto precisa. Tenho ótimas expectativas sobre esse projeto!'
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}