import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import styles from "./page.module.css";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTranslations } from "next-intl";


export default function Home() {

  const t = useTranslations();

  return (
    <main className={styles.main}>

      <Header />

      <section id="about">
        <div className="loader"></div>
        <h3>Sobre mim</h3>
        <hr />
        <div className="grid">
          <div className="who-am-i">
            <p>
              <img src="./assets/Foto_LinkedIn_fundo_preto.png" alt="picture of mine"></img>
              Sou o Felipe Villani, formado em Engenharia da Computação no Instituto Mauá de Tecnologia. Entusiasmado por games, esportes e pelo mercado financeiro, estou sempre em busca de desafios que me permitam crescer profissionalmente. Movido pela busca contínua por conhecimento e pela aplicação prática das minhas habilidades em desenvolvimento de software, com foco em soluções limpas e eficientes. Além disso, valorizo o trabalho em equipe como meio para alcançar resultados excepcionais.
            </p>
          </div>
          <div className="technologies">
            <div className="technology">
              <img src="./assets/c-sharp.png" alt="" />
              <h5>C# (.NET)</h5>
              <p>Desde o início da minha trajetória profissional, tenho atuado predominantemente com C#, envolvendo o desenvolvimento e manutenção de sistemas e APIs, geralmente utilizando o banco de dados MS SQL Server.</p>
            </div>
            <div className="technology">
              <img src="./assets/flutter-logo.png" alt="" />
              <h5>Flutter</h5>
              <p>Fiz alguns aplicativos e um curso de Flutter. Com ele aprendi bastante sobre reatividade, gerenciadores de estado e também muito sobre Arquitetura Limpa.</p>
            </div>
            <div className="technology">
              <img src="./assets/python.png" alt="" />
              <h5>Python</h5>
              <p>Durante meu período na faculdade foi a linguagem que mais utilizei, principalmente para dados e IA. Tenho um bom entendimento da linguaguem e de algumas bibliotecas, como Pandas, NumPy e SciKit-Learn.</p>
            </div>
            <div className="technology">
              <img src="./assets/JavaScript.png" alt="" />
              <h5>JavaScript/HTML/CSS</h5>
              <p>Profissionalmente já tive que desenvolver e sustentar aplicações que utilizavam Angular, e afim de aprender mais sobre o esse mundo fiz um curso de desenvolvimento web e alguns projetos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h3>Projetos</h3>
        <hr />
        <div className="projects-container">
          <Project
            title="Gerador de QRCode"
            name="Code Crafty"
            color="#9340FF"
            description="Um site responsivo e visualmente atraente que gera QR Codes estáticos a partir de dados de texto inseridos pelo usuário, permitindo o download fácil e rápido dos códigos."
            technologies={["HTML", "CSS", "JavaScript"]}
            link="https://f7villani.github.io/code-crafty/"
            imageSrc="./assets/code-crafty-logo.png"
          />
          <Project
            title="Organizador de Viagens"
            name="Trip Planner"
            color="#0774f0"
            description="Uma plataforma que te ajuda a organizar sua próxima viagem, permitindo a criação de orçamentos, te dando expectativa de climas e te mostrando pontos turísticos."
            technologies={["React", "Next.js"]}
            link="https://f7villani.github.io/trip-planner/"
            imageSrc="./assets/trip-planner-logo.png"
            inverted = {true}
          />
          <Project
            title="Calculadora de"
            name="Renda Fixa"
            color="#ED1C24"
            description="Desenvolvida para auxiliar na escolha de qual produto de renda fixa é a melhor escolha para uma determinada quantidade de tempo."
            technologies={["Flutter"]}
            link=""
            imageSrc="./assets/calculator.png"
          />
        </div>
      </section>

      <section id="contact">
        <h3>Contato</h3>
        <hr />
        <p>Quer entrar em contato comigo?</p>
        <p>Fique a vontade para me mandar um email!</p>
        <a style={{ marginTop: "20px" }} href="mailto:felipevillani.2000@hotmail.com" className="gradient-button">Envie um Email</a>
      </section>

      <Footer />

      <a href="#intro" className="gradient-button top-button">
        <div >
          <ExpandLessIcon />
        </div>
      </a>
    </main>
  );
}
