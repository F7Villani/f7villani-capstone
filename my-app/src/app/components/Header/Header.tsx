import { Cinzel } from "@next/font/google";

const cinzel = Cinzel({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function Header() {

  return (
    <section id="intro" className="gradient-background">
        
        <img src="./assets/geometry.png" alt="" className="geometry"/>

        <div className="language-container">
            <a href="" className="language-link">
                <img src="./assets/flags/brasil.jpg" alt="brazil flag" className="flag"/>
                <p>Português</p>
            </a>
        </div>
        <div className="nav-bar">
            <a href="#about">Sobre mim</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
        </div>

        <div className="name">
            <h1 className={cinzel.className}>Felipe Villani</h1>
            <hr/>
            <h2>Desenvolvedor de Software</h2>
        </div>
      </section>
  );

}