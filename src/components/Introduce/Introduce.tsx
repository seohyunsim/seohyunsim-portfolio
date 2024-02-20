import { IntroduceBanner, Link } from "./style";

export const Introduce = () => {
  return (
    <IntroduceBanner>
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
              아이디어를 내고 구현하는데 강점이 있습니다.
            </span>
            <span>
              또한 클린코드와 더 나은 개발 방식과 습관을 찾도록 주기적인
              리팩터링을 지향합니다.
            </span>
          </div>
        </div>
      </div>
    </IntroduceBanner>
  );
};

{
  /* <SizeAdjustment id="['INTRO', 'fa:smile-o']">
        <Intro
          backgroundColor="white"
          title=""
          shortIntro=""
          description={introDesDefault}
        />
      </SizeAdjustment> */
}
