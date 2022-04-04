import React, { useState, useEffect } from "react";

// components
import Main from "./components/Main";
import Header from "./components/Header";
import Section from "./components/Section";
import Aside from "./components/Aside";
import SideMenu from "./components/SideMenu";
import Message from "./components/Message";
import Links from "./components/Links";
import SignInSignOut from "./components/SignInSignOut";

// page components
import Chat from "./components/Pages/Chat";

// css
import "./css/App.scss";

export type MessagesType = {
  author: string;
  message: string;
};

function App() {
  const [limitOfMessages, setLimitOfMessages] = useState(300);
  const [messages, setMessages] = useState<MessagesType[]>([
    {
      author: "Bob",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vel dolores temporibus recusandae laboriosam quas perferendis dignissimos repudiandae amet maxime ratione tenetur cumque, porro veritatis hic sequi",
    },
    {
      author: "johnydep",
      message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
    {
      author: "iamtheone34",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vel dolores temporibus recusandae laboriosam quas perferendis dignissimos repudiandae amet maxime ratione tenetur cumque, porro veritatis hic sequi, quisquam accusantium est laudantium illo quaerat ab alias aliquid. Vero quia natus recusandae harum illum, unde voluptate nihil quam veniam ullam ipsa architecto.",
    },
    {
      author: "bob",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vel dolores temporibus recusandae laboriosam quas perferendis dignissimos repudiandae ",
    },
    {
      author: "johnydep",
      message: "Lorem ipsum dolor",
    },
    {
      author: "iamtheone34",
      message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
    {
      author: "bob",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ",
    },
    {
      author: "johnydep",
      message: "Lorem",
    },
    {
      author: "iamtheone34",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vel dolores temporibus recusandae laboriosam quas perferendis dignissimos repudiandae amet maxime ratione tenetur cumque, porro veritatis hic sequi, quisquam accusantium est laudantium illo quaerat ab alias aliquid. Vero quia natus recusandae harum illum, unde voluptate nihil quam veniam ullam ipsa architecto.",
    },
    {
      author: "bob",
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vel dolores temporibus recusandae laboriosam quas perferendis dignissimos repudiandae amet maxime ratione tenetur cumque, porro veritatis hic sequi, quisquam accusantium est laudantium illo quaerat ab alias aliquid. Vero quia natus recusandae harum illum, unde voluptate nihil quam veniam ullam ipsa architecto.",
    },
  ]);

  // delete old messages
  useEffect(() => {
    if (messages.length > limitOfMessages) {
      const newMessages = messages;
      newMessages.splice(0, 50);
      setMessages((prev) => [...newMessages]);
    }
  });

  return (
    <>
      <Header>
        <Links />
        <SignInSignOut loggedIn={false} />
      </Header>
      <Main>
        <SideMenu />
        <Section title="CHAT">
          <Chat setMessages={setMessages}>
            {messages.map((msg, i) => (
              <Message key={i} author={msg.author} message={msg.message} />
            ))}
          </Chat>
        </Section>
        <Aside>
          <li>hellowoaaaaaaaaaaaaaaaarld</li>
          <li>KKKKKKKKSFFSKKKKKKKKK</li>
          <li>helloworlaaaaaaaaaaaaaaaaaaaad</li>
          <li>helloworld</li>
          <li>helloworld</li>
          <li>helloafafsafsworld</li>
          <li>helloworld</li>
          <li>helloworld</li>
          <li>helloworld</li>
          <li>helloworld</li>
        </Aside>
      </Main>
    </>
  );
}

export default App;
