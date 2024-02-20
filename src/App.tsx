import { Header, Contact } from "dev-portfolio";
import {
  logoOptionDefault,
  channelOptionDefault,
  sideBarOptionDefault,
} from "./defaultProps/HeaderProps";
import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { Techstack } from "./components/Techstack/Techstack";
import { Experiences } from "./components/Experiences/Experiences";
import { Projects } from "./components/Projects";
import { Presentation } from "./components/Presentation/Presentation";

function App() {
  return (
    <div className="App">
      <Header
        headerBackgroundColor="white"
        sideBarOption={sideBarOptionDefault}
        logoOption={logoOptionDefault}
        channels={channelOptionDefault}
      />
      <Banner />
      <Techstack />
      <Experiences />
      <Projects />
      <Presentation />
      <Contact
        id="['CONTACT', 'carbon:phone']"
        buttonBorderColor="lightgrey"
        backgroundColor="#c3c7de33"
        channels={channelOptionDefault}
        aboutMeInfos={[
          {
            title: "Birth",
            description: "2000.11.20",
          },
          {
            title: "Major",
            description: "컴퓨터전자공학 전공",
          },
          {
            title: "Email",
            description: "ssh123661@gmail.com",
          },
        ]}
        title="저에 대해 더 궁금하신가요?"
        subTitle=""
        email="ssh123661@gmail.com"
        buttonText="Come here to send mail !"
      />
    </div>
  );
}

export default App;
