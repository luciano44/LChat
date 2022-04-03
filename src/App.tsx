import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Section from "./components/Section";
import Aside from "./components/Aside";
import SideMenu from "./components/SideMenu";
import Chat from "./components/Chat";
import Message from "./components/Message";
import Links from "./components/Links";
import SignInSignOut from "./components/SignInSignOut";
import "./css/App.scss";

export type MessagesType = {
  author: string;
  message: string;
};

function App() {
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
        <Aside />
      </Main>
    </>
  );
}

export default App;
