import "./style.scss";

function index() {
  return (
    <div className="section__chat">
      <ul className="section__chat__messages">
        <li>Peterson: Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        <li>Peterson: Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        <li>Peterson: Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        <li>Peterson: Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
      </ul>

      <form>
        <input type="text" name="message" id="message" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default index;
