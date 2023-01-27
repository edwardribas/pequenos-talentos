import React, { useState } from 'react';
import styles from './styles.module.scss';
import Title from '../../components/Title';
import {
    camille, 
    evellyn,
    flavio,
    fernando, 
    giovana, 
    gustavo,
    gustavoSantiago,
    izabelli,
    joao,
    joaoSoares,
    lawrence, 
    lucas,
    lauraReis,
    leonardo,
    marjory, 
    manuela,
    marcos,
    matheus, 
    micaela, 
    ricardo,
    roberto,
    rebeca,
    rafaelDus,
    sabrina, 
    samuel,
    stephany, 
    thalys, 
    thiago,
    thaina,
    victorFaustinho,
    vitor,
    sampaio, 
    giovanna, 
    gustavosilverio, 
    julia, 
    laura, 
    leticia, 
    nayara, 
    pedro, 
    ribas, 
    raissa, 
    davi, 
    andrey, 
    eduardo,
    rafael,
    luana
} from '../../assets/img';

import SemImage from '../../assets/img/SemImage.png'

// Aluno
const Aluno = ({src, name, desc}) => {
    return (
        <div className={styles.aluno}>
            <div className={styles.image}>
                <img src={src} alt="Imagem de um dos Pequenos Talentos."/>
            </div>
            <div className={styles.description}>
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default function Participantes () {
    const [selectedGallery, selectGallery] = useState('');
    const [selectedYear, selectYear] = useState('');
    
    return (
        <section id="participantes" className={styles.participantes}>
            <Title section="Participantes"/>

            <div className={styles.switcher}>
            
                <button 
                    aria-label="Ver pequenos"
                    className={selectedGallery ? undefined : styles.active}
                    onClick={() => selectGallery('')}
                >
                    Pequenos
                </button>
                <button
                    aria-label="Ver padrinhos"
                    className={selectedGallery ? styles.active : undefined}
                    onClick={() => selectGallery('1')}
                >
                    Padrinhos
                </button>


                <button 
                    aria-label="Ver 2022"
                    className={selectedYear ? styles.active2023 : undefined}
                    onClick={() => selectYear('2022')}
                    style={{border:'1px solid #8b8b8d', marginRight:'1em',borderRadius:'5px'}}
                >
                    2022
                </button>
                <button
                    aria-label="Ver 2023"
                    className={selectedYear ? undefined : styles.active2023 }
                    onClick={() => selectYear('2023')}
                    style={{border:'1px solid #8b8b8d',borderRadius:'5px'}}
                >
                    2023
                </button>
            </div>

            <div className={styles.main_wrapper}>
                <div className={selectedGallery ? styles.pequenos : `${styles.pequenos} ${styles.checked}`}>
                    {selectedYear === '2022' && (
                         <div className={styles.wrapper}>
                        
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
                    )}

                    {selectedYear == 0 && (
                        <div className={styles.wrapper23}>
                        
                          <Aluno
                              src={evellyn} name="Evellyn"
                              desc="Olá eu sou a Evellyn Furtado, tenho 14 anos, estou no 9° ano. Gosto de ler livros de romance, jogo alguns jogos online e gosto de redes sociais. Minha expectativa para esse projeto é conseguir ter um bom desempenho, e assim ter experiência para me desenvolver profissionalmente."
                          />
                          <Aluno
                              src={flavio} name="Flavio"
                              desc="Meu nome é Flávio Santana,tenho 12 anos e estou no 7° ano, amo jogar e aprender sobre a natureza, espero adquirir cada vez mais conhecimento para ingressar no mundo do trabalho! Sou muito grato a empresa e estou ansioso para começar."
                          />
                          <Aluno
                              src={gustavoSantiago} name="Gustavo"
                              desc="Olá, sou o Gustavo Santiago, tenho 14 anos, estou no 9º ano, gosto muito de jogar 7DSGC e outros jogos também.  Minha expectativa  é que eu conheça mais sobre tecnologia e programação. Espero ampliar  meus conhecimento e que eu tenha um bom desenvolvimento (aproveitamento ) do curso."
                          />
                          <Aluno
                              src={joaoSoares} name="João"
                              desc="Tenho 14 anos, estou no 9°ano, gosto de dançar e cantar. Minhas expectativas para o curso são: Adquirir conhecimento e me divertir aprendendo, agradeço desde já pela oportunidade!"
                          />
                          <Aluno
                              src={joao} name="João Costa"
                              desc="Olá, sou o João Costa! Tenho 14 anos, moro com minha família em Ribeirão Pires e estudo na escola Judith Ferreira Piva. Durante meu tempo livre, costumo assistir séries e filmes, ler livros e jogar video-games. Meu atual objetivo é entrar na ETEC MCM à guisa de cursar Tecnologia da Informação (TI)."
                          />
                        <Aluno
                             src={lawrence} name="Lawrence"
                             desc="Tenho 12 anos e estou na 8ª série no Olavo Hansen. Sou ginasta, gosto de cantar, dançar e escutar música. A minha expectativa para o projeto é que eu consiga programar e fazer aplicativos."
                         />
                          <Aluno
                              src={leonardo} name="Leonardo"
                              desc="Meu nome é Leonardo Silva, tenho 14 anos. Estudo no Olavo Hansen, 9º ano. Entrei nesse projeto por ter muito interesse na área de tecnologia, especialmente robótica. Meu passatempo favorito é jogar video game e assistir vídeos no youtube."
                          />
                           <Aluno
                              src={lauraReis} name="Laura"
                              desc="Olá eu sou a Laura Reis,tenho 12 anos, estudo no Judith Ferreira Piva estou no 7o ano, gosto de jogar Fortnite e outros jogos de pc e console, espero aprender muitas coisas e aproveitar o máximo dessa grande oportunidade."
                          />
                          <Aluno
                              src={marcos} name="Marcos"
                              desc="Eu sou Marcos Basso, tenho 14 estou no 9°ano, estudo no Judith Ferreira Piva.Tenho diversas metas que eu vou tentar alcançar, eu sou comprometido com o que me pedem e espero que esse projeto seja apenas o começo da minha carreira profissional"
                          />
                          <Aluno
                              src={manuela} name="Manuela"
                              desc="Meu nome é Manuela, tenho 14 anos de idade, estudo na escola Judith Ferreira Piva, estou indo para o 9° ano. O projeto dos Pequenos Talentos é uma das experiências que irei gostar bastante com todos vocês, será uma boa oportunidade para a minha projeção no futuro, tenho metas a qual eu desejo cumprir e os pequenos talentos será um deles que vou conseguir aprender muita coisa, principalmente dar orgulho a mim mesma e aos meus próximos."
                          />
                          <Aluno
                             src={matheus} name="Matheus Marques"
                             desc="Tenho 13 anos, estou no 8º ano na escola Olavo Hansen. Sou uma pessoa responsável e comprometida com o que faço! Estarei com toda disposição para embarcar nessa experiência e darei o melhor pra ajudá-los."
                         />
                         
                          
                          <Aluno
                              src={rafaelDus} name="Rafael"
                              desc="Meu nome é Rafael Dus, estou no 8° ano na escola E.E.Jardin cruzeiro. Tenho 14 anos, agradeço a oportunidade de se juntar aos pequenos talentos."
                          />
                          <Aluno
                              src={roberto} name="Roberto"
                              desc="Sou o Roberto Souza, tenho 14 anos, estou no 9° ano na escola Olavo hansen. Adoro estudar matemática, espanhol e música, porém qualquer outro assunto pode me deixar interessado. Essa oportunidade com certeza irá mudar minha vida e as demais perto de mim e, portanto, determinação e foco serão meus aliados."
                          />
                          <Aluno
                             src={ricardo} name="Ricardo"
                             desc="Tenho 12 anos, estou atualmente no Olavo Hansen no 8º ano. Gosto de jogos e muitas outras coisas. Sou bem objetivo no que faço. Minha expectativa para o curso é de aprender e conquistar coisas boas."
                         />
                            <Aluno
                              src={rebeca} name="Rebeca"
                              desc="Meu nome é Rebeca Fernandes,tenho 14 anos mas estou pra fazer 15, estou no 9°ano no Judith Ferreira Piva.Eu amo ler,escrever,estudar e desenhar. Meu objetivo em fazer este curso é me empenhar numa área profissionalizante técnica e aprender algo diferente. Estou cheia de entusiasmoe bem ansiosa pra começar, não esperem de mim nada menos que dedicação."
                          />
                          
                          
                          <Aluno
                              src={samuel} name="Samuel"
                              desc="Olá eu sou o Samuel Pires, tenho 12 anos e estou na 8° série no Jardim Cruzeiro. Adoro esportes e de escutar música. Minha expectativa para o projeto é aprender diversas coisas sobre tecnologia."
                          />
                         
                          <Aluno
                              src={thaina} name="Thainá"
                              desc="Meu nome é Thainá Borges, tenho 13 anos e sou estudante da escola Judith Ferreira Piva.  Tenho muitos sonhos pela frente e tenho certeza que o pequeno talento vai ser muito importante na minha vida.  Um dos meus sonhos é entrar para a ETEC, e com a ajuda desse curso tenho certeza que consigo.  Agradeço a minha escola por acreditar em mim, e a vocês por me darem essa oportunidade única."
                          />
                          <Aluno
                             src={thalys} name="Thalys"
                             desc="Tenho 13 anos eu gosto bastante de andar de bike e nos tempos livres eu jogo roblox. Esse curso é uma grande oportunidade. Sou muito grato por ser um dos escolhidos."
                         />
                          
                          <Aluno
                              src={victorFaustinho} name="Victor"
                              desc="Sou Victor Faustino, tenho 13 anos, gosto de animais e criação de jogos, estudo na escola estadual Jardim cruzeiro e vou para o 9° ano, quando eu soube da oportunidade contei a minha mãe sobre e aqui estou."
                          />
                           <Aluno
                              src={vitor} name="Vitor"
                              desc="Olá, sou o Vitor Lopes, tenho 14 anos e estou no 9° ano do Olavo Hansen. 
                              Gosto de jogos e de ouvir músicas, vou me dedicar ao máximo a essa  oportunidade de me preparar para o futuro."
                          />
                      </div>
                    )}
                   
                </div>

                <div className={selectedGallery ? `${styles.padrinhos} ${styles.checked}` : styles.padrinhos}>
                {selectedYear === '2022' && (
                          <div className={styles.wrapper}>
                          <Aluno
                              src={ribas} name="Eduardo Ribas"
                              desc="Tenho 17 anos e estou na 2ª série na ETEC MCM. Tem sido uma ótima experiência auxiliar neste projeto e espero que ele possa impactar positivamente na vida de cada um dos atuais e futuros integrantes."
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
                          <Aluno
                              src={luana} name="Luana Miron"
                              desc='Tenho 16 anos, estudo na Etec Maria Cristina Medeiros cursando o 2° ano de Técnico em administração integrado ao ensino médio. No meu tempo livre gosto de ler, cozinhar, jogar e principalmente dançar. Participar do projeto é uma oportunidade incrível para passar  aos pequenos todo o meu conhecimento e ajuda-los em seu futuro.'
                          />
                          <Aluno
                              src={eduardo} name="Eduardo Lordeiro"
                              desc='Olá, me chamo Eduardo Lordeiro, tenho 16 anos e atualmente estudo na Etec Maria Cristina Medeiros, cursando o 2° ano do Técnico em Informática integrado ao Ensino Médio. Eu sou muito fã de tecnologia e coisas do tipo, adoro programação e desenvolvimento de jogos. Eu gosto muito de ouvir música, jogar no meu PC, e ler um pouco as vezes. Eu estou no projeto pois a ideia de ajudar pessoas seja da forma que eu puder, sempre foi encantadora.'
                          />
                      </div>
                    )}

                    {selectedYear == 0 && (
                         <div className={styles.wrapper23}>
                         <Aluno
                             src={SemImage} name="???"
                             desc=""
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=""
                             />
                         <Aluno
                             src={SemImage} name="???"
                             desc=""
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=""
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=""
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=""
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=""
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=""
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=""
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                         <Aluno
                             src={SemImage} name="???"
                             desc=''
                         />
                     </div>
                    )}
                  
                </div>
            </div>

        </section>
    )
}