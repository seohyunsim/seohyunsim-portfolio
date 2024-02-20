import { Gallery, Item } from "dev-portfolio";

export const Preview = () => {
  return (
    <>
      <h2>Project</h2>
      <h3 className="subtitle">1. Summary</h3>
      <Gallery column={2} padding="0em 3em">
        <Item
          redirectURL="https://seohyunsim.notion.site/22bbc3b33c9043b49084caea41a35bc4?pvs=74"
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
          // redirectURL="http://52.78.64.144/"
          src="common/dev-demo-app.png"
          title="dev-portfolio-demo-app"
          description="dev-portfolio를 활용한 demo app"
        />
      </Gallery>
    </>
  );
};
