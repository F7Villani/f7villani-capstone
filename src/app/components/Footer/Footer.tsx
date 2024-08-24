import "./Footer.css";

export default function Footer(){
  return (
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
  );
}