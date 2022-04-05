import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Main from "./components/Main";
import Header from "./components/Header";
import Section from "./components/Section";
import Aside from "./components/Aside";
import SideMenu from "./components/SideMenu";
import Links from "./components/Links";
import SignInSignOut from "./components/SignInSignOut";
import User from "./components/User";

// page components
import Chat from "./components/Pages/Chat";
import Profile from "./components/Pages/Profile";
import Users from "./components/Pages/Users";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import About from "./components/Pages/About";

// css
import "./css/App.scss";

function App() {
  return (
    <>
      <Router>
        <Header>
          <Links />
          <SignInSignOut loggedIn={false} />
        </Header>
        <Main>
          <SideMenu />
          <Section>
            <Routes>
              <Route path="/chat" element={<Chat />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/usuarios" element={<Users />} />
              <Route path="/entrar" element={<Login />} />
              <Route path="/cadastrar" element={<Register />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/sair" element={<>sair **</>} />
            </Routes>
          </Section>
          <Aside>
            <User name="bob11" />
            <User name="miky" />
            <User name="@whydoesmynamegottabysobig" />
            <User name="21_miky" />
            <User name="the biggest name in the entire world" />
            <User name="Bob32!!_" />
          </Aside>
        </Main>
      </Router>
    </>
  );
}

export default App;
