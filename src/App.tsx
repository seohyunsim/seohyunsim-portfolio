import {
  Header,
  TechStackList,
  Contact,
  Intro,
  Gallery,
  Item,
  Card,
  Masonry,
  Image,
  Carousel,
  Experience,
  TechStackInput,
} from "dev-portfolio";
import {
  logoOptionDefault,
  channelOptionDefault,
  sideBarOptionDefault,
} from "./defaultProps/HeaderProps";
import {
  techStacksDefault,
  historyListDefault,
  introDesDefault,
  contactOptionDefault,
} from "./defaultProps/CommonProps";
import styled from "styled-components";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header
        headerBackgroundColor="white"
        sideBarOption={sideBarOptionDefault}
        logoOption={logoOptionDefault}
        channels={channelOptionDefault}
      />
      <Carousel
        id="['TOP', 'akar-icons:align-to-top']"
        width="65%"
        isArrowShow={false}
        isAutoplay={true}
        transition={1}
        autoplaySpeed={900}
        isAutoplayControl={false}
      >
        <Image
          noShowHead={true}
          zoomWhenHover={false}
          src="common/firstBanner.png"
        />
        <Image
          noShowHead={true}
          zoomWhenHover={false}
          src="common/banner.png"
        />
      </Carousel>

      <SizeAdjustment id="['INTRO', 'fa:smile-o']">
        <h3>Intro</h3>
        <Intro
          backgroundColor="white"
          title=""
          shortIntro="세상에 긍정적인 변화를 일으킬 개발자 입니다."
          description={introDesDefault}
        />
      </SizeAdjustment>

      <TeckStackWrap id="['SKILL', 'akar-icons:stack-overflow-fill']">
        <h3>Skill</h3>
        <TechStackList techStackList={techStacksDefault} />
      </TeckStackWrap>

      <SizeAdjustment id="['EXPERIENCE', 'bi:card-list']">
        <Experience
          theme="vertical"
          shape="round-square"
          historyList={historyListDefault}
        />
      </SizeAdjustment>

      <GalleryWrap id="['PROJECT', 'icon-park-outline:picture-album']">
        <h2>Project</h2>
        <Gallery column={2} padding="0em 10em">
          <Item
            redirectURL="https://dongurami.co.kr/"
            src="common/circle.png"
            title="동그라미"
            description="교내 동아리 커뮤니티 플랫폼 서비스"
          />
          <Item
            redirectURL="https://www.npmjs.com/package/dev-portfolio"
            src="common/dev-portfolio.png"
            title="dev-portfolio"
            description="포트폴리오 개발 오픈소스 라이브러리"
          />
          <Item
            redirectURL="https://kitty-collector.vercel.app/"
            src="common/kittyMain.png"
            title="키티 컬렉터"
            description="화살표에 맞는 고양이를 선택하는 게임"
          />
        </Gallery>
      </GalleryWrap>

      <SizeAdjustment id="['PRESENTATION', 'entypo:modern-mic']">
        <h3>Presentation</h3>
        <Masonry>
          <Image
            zoomWhenHover={true}
            redirectURL="https://youtu.be/6FHMMk-gs0M"
            src="common/tecktalk/1.png"
            subhead=""
            head="브라우저 저장소의 차이"
          />
          <Image
            zoomWhenHover={true}
            redirectURL="https://youtu.be/7SGSN5h-u_w"
            src="common/tecktalk/2.png"
            subhead=""
            head="git VS github"
          />
          <Image
            zoomWhenHover={true}
            redirectURL="https://youtu.be/fNrm1JsktfQ"
            src="common/tecktalk/3.png"
            subhead=""
            head="dfs와 bfs"
          />
          <Image
            zoomWhenHover={true}
            redirectURL="https://youtu.be/g6L5rAlplig"
            src="common/tecktalk/4.png"
            subhead=""
            head="http 상태코드"
          />
          <Image
            zoomWhenHover={true}
            redirectURL="https://youtu.be/7phRfXdvb4M"
            src="common/tecktalk/5.png"
            subhead=""
            head="React"
          />
          <Image
            zoomWhenHover={true}
            redirectURL="https://youtu.be/Ghsow9H2BWg"
            src="common/tecktalk/6.png"
            subhead=""
            head="var, let, const"
          />
          <Image
            zoomWhenHover={true}
            redirectURL="https://youtu.be/yoHZVmEbnCo"
            src="common/tecktalk/7.png"
            subhead=""
            head="css와 scss"
          />
        </Masonry>
      </SizeAdjustment>

      <Contact
        id="['CONTACT', 'carbon:phone']"
        buttonBorderColor="lightgrey"
        backgroundColor="#c3c7de33"
        channels={channelOptionDefault}
        aboutMeInfos={[
          {
            title: "Residence",
            description: "Seoul, Republic of Korea",
          },
          {
            title: "Birth",
            description: "2000. 11. 20",
          },
          {
            title: "MBTI",
            description: "ESFP || ENFP",
          },
          {
            title: "Phone",
            description: "010 9572 3357",
          },
        ]}
        title="저에 대해 더 궁금하신가요?"
        subTitle="주저하지 말고 지금 바로 📧📲"
        email="ssh4563@naver.com"
        buttonText="Come here to send mail !"
      />
    </div>
  );
}

export default App;

const SizeAdjustment = styled.div`
  padding: 5em 10em;
  h3 {
    margin: 0;
    font-size: 40px;
    padding: 10px 0;
    border-bottom: 1px solid;
  }
  @media screen and (max-width: 768px) {
    padding: 10vw;
    h3 {
      font-size: 8vw;
    }
  }
`;

const TeckStackWrap = styled.div`
  padding: 5em 12em;
  h3 {
    font-size: 40px;
    padding: 10px 0;
    border-bottom: 1px solid;
  }
  @media screen and (max-width: 768px) {
    padding: 10vw;
    h3 {
      font-size: 8vw;
    }
  }
`;

const GalleryWrap = styled.div`
  padding: 5em 10em;
  h2 {
    font-size: 35px;
    padding: 10px 10px 20px 10px;
    border-bottom: 1px solid;
  }
  @media screen and (max-width: 768px) {
    padding: 10vw;
    h2 {
      font-size: 8vw;
    }
  }
`;
