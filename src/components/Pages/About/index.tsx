import "./style.scss";
import { useRef } from "react";
import meme from "../../../img/logos/gif/meme.gif";

const About = () => {
  const technologiesRef = useRef<HTMLDivElement>(null);

  return (
    <div className="section__about">
      <img src="#" alt="logo" className="logo" />
      <i>Tecnologias utilizadas</i>

      <ul className="technologies">
        <div className="technology">aaaaaaaaaaaaaaa</div>
        <div className="technology">b</div>
        <div className="technology">c</div>
        <div className="technology">d</div>
        <div className="technology">e</div>
        <div className="technology">f</div>
        <div className="technology">ggggggggg</div>
        <div className="technology">h</div>
        <div className="technology">i</div>
        <div className="technology">j</div>
        <div className="technology">k</div>
        <div className="technology">l</div>
        <div className="technology">m</div>
        {/*  */}
        <div className="technology">a</div>
        <div className="technology">b</div>
        <div className="technology">c</div>
        <div className="technology">d</div>
        <div className="technology">e</div>
        <div className="technology">f</div>
        <div className="technology">g</div>
        <div className="technology">h</div>
        <div className="technology">i</div>
        <div className="technology">j</div>
        <div className="technology">k</div>
        <div className="technology">l</div>
        <div className="technology">m</div>
      </ul>
      <i>Obrigado pela visita :)</i>
      <img src={meme} alt="logo" className="gif" />
    </div>
  );
};

export default About;
