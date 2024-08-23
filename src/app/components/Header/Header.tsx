"use client";

import { Cinzel } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";
import { setUserLocale } from "@/app/hooks/locale";
import "./Header.css";

const cinzel = Cinzel({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Header() {

  const t = useTranslations("header");
  const locale = useLocale();
  const nextLocale = locale === "pt-BR" ? "en" : "pt-BR"; 
  const flagPath = locale === "pt-BR" ? "./assets/flags/brasil.jpg" : "./assets/flags/eua.jpg";

  async function toogleLanguage() {
    await setUserLocale(nextLocale);
  }

  return (
    <section id="intro" className="gradient-background">

      <img src="./assets/geometry.png" alt="" className="geometry" />

      <div className="language-container">
        <div  className="language-link" onClick={toogleLanguage}>
          <img src={flagPath} alt="brazil flag" className="flag" />
          <p>{t("language")}</p>
        </div>
      </div>
      <div className="nav-bar">
        <a href="#about">{t("aboutMe")}</a>
        <a href="#projects">{t("projects")}</a>
        <a href="#contact">{t("contact")}</a>
      </div>

      <div className="name">
        <h1 className={cinzel.className}>Felipe Villani</h1>
        <hr />
        <h2>{t("subtitle")}</h2>
      </div>
    </section>
  );

}