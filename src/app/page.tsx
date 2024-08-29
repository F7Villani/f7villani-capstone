import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import About from "./components/AboutSection/AboutSection";
import Contact from "./components/ContactSection/ContactSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main className={styles.main}>

      <Header />
      <About />
      <ProjectsSection />
      <Contact />
      <Footer />
      <a href="#intro" className="gradient-button top-button">
        <ExpandLessIcon />
      </a>
    </main>
  );
}
