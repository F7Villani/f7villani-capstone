import { Cinzel } from "@next/font/google";
import { useTranslations } from "next-intl";
import Link from "next/link";

const cinzel = Cinzel({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Header() {

  const t = useTranslations();

  return (
    <section id="intro" className="gradient-background">

      <img src="./assets/geometry.png" alt="" className="geometry" />

      <div className="language-container">
        <Link href="/" locale="en" className="language-link">
          <img src="./assets/flags/brasil.jpg" alt="brazil flag" className="flag" />
          <p>{t("language")}</p>
        </Link>
      </div>
      <div className="nav-bar">
        <a href="#about">Sobre mim</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </div>

      <div className="name">
        <h1 className={cinzel.className}>Felipe Villani</h1>
        <hr />
        <h2>Desenvolvedor de Software</h2>
      </div>
    </section>
  );

}