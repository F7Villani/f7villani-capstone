import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import styles from "./page.module.css";

export default function Home() {
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
            description="Você pode adicionar esse bot no seu grupo de amigos do WhatsApp e sempre que vocês marcarem de sair o bot cria um evento na agenda de todos."
            technologies={["React", "Next.js"]}
            link=""
            imageSrc="./assets/trip-planner-logo.png"
            inverted = {true}
          />
          <Project
            title="Calculadora de Renda Fixa"
            name="Renda Fixa"
            color="#ED1C24"
            description="Desenvolvida para auxiliar na escolha de qual produto de renda fixa é a melhor escolha para uma determinada quantidade de tempo."
            technologies={["Flutter"]}
            link=""
            imageSrc="./assets/calculator.png"
          />
          <Project
            title="WhatsApp Bot"
            name="WhatsApp"
            color="#4DCB5B"
            description="Você pode adicionar esse bot no seu grupo de amigos do WhatsApp e sempre que vocês marcarem de sair o bot cria um evento na agenda de todos."
            technologies={["Python"]}
            link=""
            imageSrc="./assets/whatsapp.png"
            inverted = {true}
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

      <section id="footer" className="gradient-background">
        <div className="copyright">
          <p>© 2024 Felipe Villani</p>
        </div>
        <div className="icons-container">
          <a href="https://github.com/F7Villani" target="_blank"><img src="./assets/icons/github.svg" alt="github logo" /></a>
          <a href="https://www.linkedin.com/in/felipe-villani/" target="_blank"><img src="./assets/icons/linkedin.svg" alt="linkedin logo" /></a>
          <a href="https://www.instagram.com/felipevillani_/" target="_blank"><img src="./assets/icons/instagram.png" alt="INSTAGRAM logo" /></a>
        </div>
      </section>

      <a href="#intro" className="gradient-button top-button">
        <div >
          <span className="material-symbols-outlined">
            expand_less
          </span>
        </div>
      </a>
    </main>
  );
}
