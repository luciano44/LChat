import "./style.scss";
import reactLogo from "../../../img/logos/technologies/react.png";
import sassLogo from "../../../img/logos/technologies/sass.png";
import tsLogo from "../../../img/logos/technologies/ts.png";
import mongoLogo from "../../../img/logos/technologies/mongo.png";
import nodeLogo from "../../../img/logos/technologies/node.png";
import socketioLogo from "../../../img/logos/technologies/socketio.png";
import logo from "../../../img/logos/svg/lr-logo-link.svg";
import { BsHandIndexThumb } from "react-icons/bs";

const About = () => {
  return (
    <div className="section__about">
      <a href="http://github.com/luciano44" className="logo" target="_blank">
        <img src={logo} alt="logo" />
      </a>
      <span>
        <BsHandIndexThumb className="icon rotated" />
        Sobre
      </span>
      <p>
        Chat App criado exclusivamente para o portfolio{" "}
        <a href="https://luciano44.github.io/">luciano44</a> para demonstração.
      </p>

      <span>
        <BsHandIndexThumb className="icon rotated" />
        Utilizados no projeto
      </span>

      <ul className="technologies">
        <div className="technology">
          <img src={tsLogo} alt="typescript logo" />
        </div>
        <div className="technology">
          <img src={reactLogo} alt="react logo" />
        </div>
        <div className="technology">
          <img src={sassLogo} alt="sass logo" />
        </div>
        <div className="technology">
          <img src={nodeLogo} alt="node logo" />
        </div>
        <div className="technology">
          <img src={mongoLogo} alt="mongoDB logo" />
        </div>
        <div className="technology">
          <img src={socketioLogo} alt="socket.io logo" />
        </div>

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        <div className="technology">
          <img src={tsLogo} alt="typescript logo" />
        </div>
        <div className="technology">
          <img src={reactLogo} alt="react logo" />
        </div>
        <div className="technology">
          <img src={sassLogo} alt="sass logo" />
        </div>
        <div className="technology">
          <img src={nodeLogo} alt="node logo" />
        </div>
        <div className="technology">
          <img src={mongoLogo} alt="mongoDB logo" />
        </div>
        <div className="technology">
          <img src={socketioLogo} alt="socket.io logo" />
        </div>
      </ul>
    </div>
  );
};

export default About;
