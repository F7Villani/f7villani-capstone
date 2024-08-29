import { useTranslations } from "next-intl";
import "./AboutSection.css";

export default function About() {

  const t = useTranslations("aboutMe"); 

  return (
    <section id="about">
        <h3>{t("title")}</h3>
        <hr />
        <div className="grid">
          <div className="who-am-i">
            <p>
              <img src="./assets/Foto_LinkedIn_fundo_preto.png" alt="picture of mine"></img>
              {t("description")}        
            </p>
          </div>
          <div className="technologies">
            <div className="technology">
              <img src="./assets/c-sharp.png" alt="" />
              <h5>C# (.NET)</h5>
              <p>{t("csharpExperience")}</p>
            </div>
            <div className="technology">
              <img src="./assets/flutter-logo.png" alt="" />
              <h5>Flutter</h5>
              <p>{t("flutterExperience")}</p>
            </div>
            <div className="technology">
              <img src="./assets/python.png" alt="" />
              <h5>Python</h5>
              <p>{t("pythonExperience")}</p>
            </div>
            <div className="technology">
              <img src="./assets/JavaScript.png" alt="" />
              <h5>JavaScript/HTML/CSS</h5>
              <p>{t("javaScriptExperience")}</p>
            </div>
          </div>
        </div>
      </section>
  );
}