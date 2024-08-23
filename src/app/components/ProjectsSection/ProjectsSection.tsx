import Project from "../ProjectContainer/ProjectContainer";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
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
            inverted={true}
          />
          <Project
            title="Aplicativo de Filmes"
            name="IMDB 2"
            color="#f0a007"
            description="Desenvolvida para auxiliar na escolha de qual produto de renda fixa é a melhor escolha para uma determinada quantidade de tempo."
            technologies={["Flutter"]}
            link=""
            imageSrc="./assets/calculator.png"
          />
        </div>
      </section>
  );
}