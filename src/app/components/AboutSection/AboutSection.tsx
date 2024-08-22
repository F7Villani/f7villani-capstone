export default function About() {
  return (
    <section id="about">
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
  );
}