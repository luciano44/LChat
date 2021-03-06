import "./style.scss";
import Message from "../../Message";

import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  SyntheticEvent,
} from "react";

import { usersContext } from "../../../context/Context";

function Chat() {
  const { messages } = useContext(usersContext)!;
  const { sendMessage } = useContext(usersContext)!;

  const [shouldItScroll, setShouldItScroll] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLUListElement>(null);

  // console.log(messages);

  const limitOfMessages = 300;

  // automatically scrolls the chat to the bottom when comp. is rendered.
  useEffect(() => {
    messagesRef.current?.scrollBy(0, 9999);
    inputRef.current?.focus();
  }, []);

  // scrolls the chat to the bottom at every new message if it's already scrolled next to the bottom.
  useEffect(() => {
    const scrollHeight = messagesRef.current?.scrollHeight;
    const scrollDistanceFromTop = messagesRef.current?.scrollTop;
    const messagesHeight = Number(
      getComputedStyle(messagesRef.current!).height.split(".")[0]
    );
    const MinimumToAutoScroll =
      scrollHeight && scrollHeight - messagesHeight - 500;

    if (scrollDistanceFromTop && MinimumToAutoScroll) {
      scrollDistanceFromTop > MinimumToAutoScroll &&
        messagesRef.current?.scrollBy(0, 9999);
    }

    //first scroll (scroll once after scroll size gets bigger than screen )
    if (shouldItScroll) {
      const messagesHeight = Number(
        getComputedStyle(messagesRef.current!).height.split(".")[0]
      );

      if (scrollHeight && messagesHeight) {
        if (scrollHeight > messagesHeight + 5) {
          messagesRef.current?.scrollBy(0, 9999);
          setShouldItScroll((previousValue) => !previousValue);
        }
      }
    }
  });

  // delete old messages
  useEffect(() => {
    if (messages.length > limitOfMessages) {
      const newMessages = messages;
      newMessages.splice(0, 50);
      // setMessages(() => [...newMessages]);
    }
  });

  function submitHandler(e: SyntheticEvent) {
    e.preventDefault();
    const message = inputRef.current?.value;
    if (message) {
      // setMessages((prev) => [
      //   ...prev,
      //   { author: "BOTLCN44", message: message! },
      // ]);
      sendMessage(message);
      inputRef.current!.value = "";
      messagesRef.current?.scrollBy(0, 9999);
    }
  }

  return (
    <div className="section__chat">
      <ul ref={messagesRef} className="section__chat__messages">
        {messages.map((msg, i) => (
          <Message key={i} author={msg.author} message={msg.message} />
        ))}
      </ul>

      <form onSubmit={submitHandler}>
        <input
          ref={inputRef}
          type="text"
          name="message"
          id="message"
          maxLength={1500}
        />
        <button ref={buttonRef} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Chat;
