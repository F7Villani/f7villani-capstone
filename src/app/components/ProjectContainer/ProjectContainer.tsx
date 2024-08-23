import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './ProjectContainer.css';

interface ProjectProps {
  title: string;
  name: string;
  color: string;
  description: string;
  technologies: string[];
  link: string;
  imageSrc: string;
  inverted?: boolean;
}

export default function Project({
  title,
  name,
  color,
  description,
  technologies,
  link,
  imageSrc,
  inverted = false,
}: ProjectProps) {
  return (
    <div className="project">
      {
        !inverted ? (
          <img src={imageSrc} alt="/" />
        ) : null
      }
      <div>
        <h4>{title} <span style={{ color: color }}>{name}</span></h4>
        <p>{description}</p>
        <p><span className="bold">Tecnologias: </span>{technologies.join(" ")}</p>
        <a href={link} className="see-more" target="_blank">
          {name}
          <OpenInNewIcon className="open-new-icon" />
        </a>
      </div>
      {
        inverted ? (
          <img src={imageSrc} alt="/" />
        ) : null
      }
    </div>
  );
}