import React from "react";
import "./style.scss";

type Props = {
  author: string;
  message: string;
};

function Message({ author, message }: Props) {
  return (
    <li className="section__chat__message">
      <p>
        <span className="author">{`${author}: `}</span>
        <span className="message">{message}</span>
      </p>
    </li>
  );
}

export default Message;
