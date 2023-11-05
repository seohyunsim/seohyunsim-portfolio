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
  VisitorComment,
  Skill,
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
        width="82%"
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

      <IntroduceBanner>
        {/* <h3>안녕하세요</h3> */}
        <div className="wrapper">
          <div className="detailWrap">
            <div className="titleWrap">
              <span className="title">🏆 npm 라이브러리 개발 및 수상 경험</span>
            </div>
            <div className="des">
              <span>
                포트폴리오를 쉽게 만들수 있도록 UI 라이브러리를 개발하여 npm
                package로 배포한 경험이 있으며,
              </span>
              <span>
                국내 최대규모 2022 공개SW 개발자대회에 참가해 총 350팀 중 은상을
                수상했습니다.
              </span>
              <Link
                onClick={() =>
                  window.open(
                    "https://www.oss.kr/dev_competition_activities/show/48e8c48e-b01a-4970-99aa-8acd24122892"
                  )
                }
              >
                2022 공개SW 개발자대회 수상내역
              </Link>
            </div>
          </div>
          <div className="detailWrap">
            <div className="titleWrap">
              <span className="title">🔅 인터랙티브한 개발자</span>
            </div>
            <div className="des">
              <span>
                사용자와의 상호작용을 강조하고, 이를 통해 웹 페이지나
                애플리케이션을 더 동적이고 매력적으로 만드는데 중점을 둡니다.
              </span>
              <span>
                서비스를 개발하며 전반적인 UI/UX 구현을 담당한 경험이 있으며,
                지속적으로 개선해 완성도를 높인 결과물로 팀원들에게도 인정받은
                경험이 있습니다.
              </span>
              <Link
                onClick={() =>
                  window.open(
                    "https://www.notion.so/459a959ffb74477e89b04780c901aa73?pvs=4"
                  )
                }
              >
                개발 팀원이 평가한 나
              </Link>
            </div>
          </div>
          <div className="detailWrap">
            <div className="titleWrap">
              <span className="title">💁‍♀️ 천상 프론트엔드 개발자!</span>
            </div>
            <div className="des">
              <span>
                UI/UX 개발을 즐겨하며, 주도적으로 애니메이션 및 모션에 관한
                효과를 구현하는데 긍정적입니다.
              </span>
              <span>
                또한 클린코드와 더 나은 개발 방식과 습관을 찾도록 주기적인
                리팩터링을 지향합니다.
              </span>
            </div>
          </div>
        </div>
      </IntroduceBanner>

      {/* <SizeAdjustment id="['INTRO', 'fa:smile-o']">
        <Intro
          backgroundColor="white"
          title=""
          shortIntro=""
          description={introDesDefault}
        />
      </SizeAdjustment> */}

      <TeckStackWrap id="['SKILL', 'akar-icons:stack-overflow-fill']">
        <h3>Skill</h3>
        <SkillWrapper>
          <Skill
            title="Javascript"
            titleSize="16px"
            iconName="ion:logo-javascript"
            iconSize="40px"
            iconColor="#F0DB4F"
          />
          <Skill
            title="Typescript"
            titleSize="16px"
            iconName="logos:typescript-icon"
            iconSize="35px"
          />
          <Skill
            title="React"
            titleSize="16px"
            iconName="logos:react"
            iconSize="35px"
          />
          <Skill
            title="Next.js"
            titleSize="16px"
            iconName="devicon:nextjs"
            iconSize="35px"
          />
          <Skill
            title="Recoil"
            titleSize="16px"
            iconName="logos:recoil"
            iconSize="32px"
          />
          <Skill
            title="Zustand"
            titleSize="16px"
            iconName="fluent-emoji-flat:bear"
            iconSize="40px"
          />
          <Skill
            title="HTML"
            titleSize="16px"
            iconName="vscode-icons:file-type-html"
            iconSize="40px"
          />
          <Skill
            title="CSS"
            titleSize="16px"
            iconName="vscode-icons:file-type-css"
            iconSize="40px"
          />
          <Skill
            title="Scss"
            titleSize="16px"
            iconName="vscode-icons:file-type-scss2"
            iconSize="40px"
          />
          <Skill
            title="Style-Component"
            titleSize="16px"
            iconName="vscode-icons:file-type-styled"
            iconSize="40px"
          />
          <Skill
            title="Emotion"
            titleSize="16px"
            iconName="skill-icons:emotion-light"
            iconSize="40px"
          />
          <Skill
            title="Vanilla-Extract"
            titleSize="16px"
            iconName="vscode-icons:file-type-vanilla-extract"
            iconSize="40px"
          />
          <Skill
            title="npm"
            titleSize="16px"
            iconName="logos:npm-icon"
            iconSize="32px"
          />
          <Skill
            title="github-action"
            titleSize="16px"
            iconName="logos:github-actions"
            iconSize="35px"
          />
        </SkillWrapper>
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
        <h3 className="subtitle">1. Summary</h3>
        <Gallery column={2} padding="0em 3em">
          <Item
            redirectURL="https://dongurami.co.kr/"
            src="common/circle.png"
            title="동그라미"
            description="교내 동아리 커뮤니티 플랫폼 서비스"
          />
          <Item
            redirectURL="https://kitty-collector.vercel.app/"
            src="common/kittyMain.png"
            title="키티 컬렉터"
            description="화살표에 맞는 고양이를 선택하는 게임"
          />
          <Item
            redirectURL="https://www.npmjs.com/package/dev-portfolio"
            src="common/dev-portfolio.png"
            title="dev-portfolio"
            description="포트폴리오 개발 오픈소스 라이브러리"
          />
          <Item
            redirectURL="http://52.78.64.144/"
            src="common/dev-demo-app.png"
            title="dev-portfolio-demo-app"
            description="dev-portfolio를 활용한 demo app"
          />
        </Gallery>
        <h3 className="subtitle">2. Detail</h3>
        <div className="detailWrap">
          <div className="titleWrap">
            <span className="title">dev-portfolio</span>
            <span>2022.03 - 2022.09</span>
          </div>
          <div className="des">
            <span>주간 npm 다운로드 수 1,300회 돌파</span>
            <span>2022 공개SW 개발자대회 참가 → 상위 16팀 선정</span>
            <span>• 쉽고 빠르게 포트폴리오를 만들 수 있는 npm 라이브러리</span>
            <span>• 기술 : Typescript, React, styled-components, npm</span>
            <span>
              • 활동 : 프론트엔드 팀장/서비스 기획/ 리액트 UI 라이브러리
              개발/npm package 배포
            </span>
            <span>• 협업 : 스크럼, 스프린트 등 애자일 방법론 활용</span>
          </div>
        </div>
        <div className="detailWrap">
          <div className="titleWrap">
            <span className="title">Kitty Collector</span>
            <span>2022.06 - 2022.07</span>
          </div>
          <div className="des">
            <span>사이드 프로젝트</span>
            <span>• 화살표에 맞춰 고양이들을 옮기는 게임</span>
            <span>• 기술 : Typescript, React, styled-components, vercel</span>
            <span>
              • 목적 : 협업이 아닌 개인 역량으로 만 개발해 보고자 진행
            </span>
            <span>• 활동 : 기획/개발/배포 전반 담당</span>
          </div>
        </div>
        <div className="detailWrap">
          <div className="titleWrap">
            <span className="title">동그라미</span>
            <span>2021.08 - 2021. 12</span>
          </div>
          <div className="des">
            <span>SEO 점수 100점/SSR 개발/22년 5월 기준 사용자 400명</span>
            <span>• 교내 동아리 커뮤니티 서비스</span>
            <span>
              • 기술 : React, Next.js, React-Redux, Scss, axios(fetch library)
            </span>
            <span>• 활동 : 프론트엔드/서비스 기획/디자인 기획/서비스 배포</span>
            <span>• 협업 : 스크럼, 스프린트 등 애자일 방법론 활용</span>
          </div>
        </div>
      </GalleryWrap>

      {/* <SizeAdjustment id="['PRESENTATION', 'entypo:modern-mic']">
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
      </SizeAdjustment> */}

      <Contact
        id="['CONTACT', 'carbon:phone']"
        buttonBorderColor="lightgrey"
        backgroundColor="#c3c7de33"
        channels={channelOptionDefault}
        aboutMeInfos={[
          {
            title: "Major",
            description: "컴퓨터전자공학 전공",
          },
          {
            title: "Email",
            description: "ssh123661@gmail.com",
          },
          {
            title: "Phone",
            description: "010 9572 3357",
          },
        ]}
        title="저에 대해 더 궁금하신가요?"
        subTitle="주저하지 말고 지금 바로 📧📲"
        email="ssh123661@gmail.com"
        buttonText="Come here to send mail !"
      />
    </div>
  );
}

export default App;

const SizeAdjustment = styled.div`
  padding: 0em 2em;
  h3 {
    margin: 0;
    font-size: 30px;
    padding: 10px 0;
    border-bottom: 1px solid;
  }
  @media screen and (max-width: 768px) {
    padding: 10vw;
    h3 {
      font-size: 5vw;
    }
  }
`;

const TeckStackWrap = styled.div`
  padding: 3em 5em;
  h3 {
    font-size: 35px;
    padding: 10px 0;
    border-bottom: 1px solid;
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 5vw;
    }
  }
`;

const GalleryWrap = styled.div`
  padding: 8em 5em;
  h2 {
    font-size: 35px;
    padding: 10px 10px 20px 10px;
    border-bottom: 1px solid;
  }
  .subtitle {
    margin-bottom: 0;
    font-size: 28px;
    padding: 10px 10px 20px 50px;
  }
  .detailWrap {
    padding: 2em 0em;
    width: 90%;
    margin: 0 auto;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin-bottom: 3em;
    .title {
      font-weight: 800;
      font-size: 23px;
      padding: 0em 1em 0em 2em;
    }
    .des {
      padding: 1em 3em 0em 3em;
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10vw;
    h2 {
      font-size: 5vw;
    }
    .detailWrap {
      .titleWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          padding: 10px 0;
        }
      }
    }
  }
`;

const SkillWrapper = styled.div`
  padding: 0px 1em;
  margin-bottom: 8em;

  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
`;

const IntroduceBanner = styled.div`
  padding: 0em 5em;
  h3 {
    margin: 0;
    font-size: 30px;
    padding: 10px 0;
    border-bottom: 1px solid;
  }

  .wrapper {
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .detailWrap {
    padding: 20px 2em;
    width: 90%;
    margin: 0 auto;
    box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    .title {
      font-weight: 800;
      font-size: 18px;
    }
    .des {
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10vw;
    h3 {
      font-size: 8vw;
    }
    .detailWrap {
      .titleWrap {
        display: flex;
        flex-direction: column;
        .title {
          padding: 10px 0;
        }
      }
      .des {
        padding: 10px;
        gap: 5px;
      }
    }
  }
`;

const Link = styled.div`
  cursor: pointer;
  border-bottom: 1px solid;
  width: fit-content;
  color: #2e61bf;
`;
