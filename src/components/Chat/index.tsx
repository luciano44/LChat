import "./style.scss";
import React, { useRef, useEffect } from "react";
import { Messages } from "../../App";

type Props = {
  children: React.ReactNode;
  setMessages: React.Dispatch<React.SetStateAction<Messages[]>>;
};

function Index({ children, setMessages }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   inputRef?.current.focus();
  // }, []);

  function submitHandler(e: any) {
    e.preventDefault();
    setMessages((prev) => [...prev, { author: "bob", message: "mesagaga" }]);
  }

  return (
    <div className="section__chat">
      <ul className="section__chat__messages">{children}</ul>

      <form onSubmit={submitHandler}>
        <input ref={inputRef} type="text" name="message" id="message" />
        <button ref={buttonRef} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Index;
