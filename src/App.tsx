import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

// components
import Main from "./components/Main";
import Header from "./components/Header";
import Section from "./components/Section";
import Aside from "./components/Aside";
import SideMenu from "./components/SideMenu";
import Links from "./components/Links";
import SignInSignOut from "./components/SignInSignOut";

// page components
import Chat from "./components/Pages/Chat";
import Profile from "./components/Pages/Profile";
import Users from "./components/Pages/Users";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import About from "./components/Pages/About";

//context
import Context from "./context/Context";

// css
import "./css/App.scss";

function App() {
  return (
    <>
      <Context>
        <Router>
          <Header>
            <Links />
            <SignInSignOut />
          </Header>
          <Main>
            <SideMenu />
            <Section>
              <Routes>
                <Route path="/" element={<Navigate to="/chat" />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/usuarios" element={<Users />} />
                <Route path="/entrar" element={<Login />} />
                <Route path="/cadastrar" element={<Register />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/sair" element={<>sair **</>} />
              </Routes>
            </Section>
            <Aside />
          </Main>
        </Router>
      </Context>
    </>
  );
}

export default App;
