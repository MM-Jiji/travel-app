import "./styles/HeroStyles.css";

export default function HeroSection(props) {
  return (
    <div className={props.cName}>
      <img alt="Hero Image" src={props.heroImg} />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClassName}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
}
