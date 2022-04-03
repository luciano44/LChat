import "./style.scss";
import React, { useRef, useEffect } from "react";
import { MessagesType } from "../../App";

type Props = {
  children: React.ReactNode;
  setMessages: React.Dispatch<React.SetStateAction<MessagesType[]>>;
};

function Index({ children, setMessages }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLUListElement>(null);

  // automatically scrolls the chat to the bottom once when comp. is rendered.
  useEffect(() => {
    messagesRef.current?.scrollBy(0, 9999);
  }, []);

  // scrolls the chat to the bottom at every new message if it's already scrolled next to the bottom.
  useEffect(() => {
    const scrollHeight = messagesRef.current?.scrollHeight;
    const scrollDistanceFromTop = messagesRef.current?.scrollTop;
    const MinimumToAutoScroll = scrollHeight && scrollHeight - 800;

    if (scrollDistanceFromTop && MinimumToAutoScroll) {
      if (scrollDistanceFromTop > MinimumToAutoScroll) {
        messagesRef.current?.scrollBy(0, 9999);
      }
    }
  });

  function submitHandler(e: any) {
    const message = inputRef.current?.value;

    e.preventDefault();
    setMessages((prev) => [...prev, { author: "bob", message: message! }]);
    inputRef.current!.value = "";
  }

  return (
    <div className="section__chat">
      <ul ref={messagesRef} className="section__chat__messages">
        {children}
      </ul>

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
