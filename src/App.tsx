import Main from "./components/Main";
import Header from "./components/Header";
import "./css/App.scss";
import Section from "./components/Section";
import Aside from "./components/Aside";
import SideMenu from "./components/SideMenu";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Header />
      <Main>
        <SideMenu />
        <Section>
          <Chat />
        </Section>
        <Aside />
      </Main>
    </>
  );
}

export default App;
