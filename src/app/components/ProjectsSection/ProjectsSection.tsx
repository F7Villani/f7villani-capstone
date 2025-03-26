import { useTranslations } from "next-intl";
import Project from "../ProjectContainer/ProjectContainer";
import "./ProjectsSection.css";

export default function ProjectsSection() {

  const t = useTranslations("projects");

  return (
    <section id="projects">
        <h3>{t("title")}</h3>
        <hr />
        <div className="projects-container">
        <Project
            title={t("timeCapsulee.title")}
            name="Time Capsulee"
            color="#5FB0FF"
            description={t("timeCapsulee.description")}
            technologies={["React", "Next.js"]}
            link="https://timecapsulee.com"
            imageSrc="./assets/time-capsule.png"
            inverted={true}
          />
          <Project
            title={t("codeCrafty.title")}
            name="Code Crafty"
            color="#9340FF"
            description={t("codeCrafty.description")}
            technologies={["HTML", "CSS", "JavaScript"]}
            link="https://f7villani.github.io/code-crafty/"
            imageSrc="./assets/code-crafty-logo.png"
          />
          <Project
            title={t("tripPlanner.title")}
            name="Trip Planner"
            color="#0774f0"
            description={t("tripPlanner.description")}
            technologies={["React", "Next.js"]}
            link="https://trip-planner-f7villani.vercel.app"
            imageSrc="./assets/trip-planner-logo.png"
            inverted={true}
          />
          {
            /*
              <Project
                title={t("aHalfIMDB.title")}
                name="IMDB 2"
                color="#f0a007"
                description={t("aHalfIMDB.description")}
                technologies={["Flutter"]}
                link=""
                imageSrc="./assets/calculator.png"
              />
            */
          }
        </div>
      </section>
  );
}