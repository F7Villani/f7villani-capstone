import { useTranslations } from "next-intl";
import "./ContactSection.css";

export default function Contact() {

  const t = useTranslations("contact");

  return (
    <section id="contact">
      <h3>{t("title")}</h3>
      <hr />
      <p>{t("firstMessage")}</p>
      <p>{t("secondMessage")}</p>
      <a
        style={{ marginTop: "20px" }}
        href="mailto:felipevillani.2000@hotmail.com"
        className="gradient-button">
        {t("buttonMessage")}
      </a>
    </section>
  );
}