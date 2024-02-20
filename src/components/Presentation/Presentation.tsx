import { Masonry, Image } from "dev-portfolio";
import { SizeAdjustment } from "./style";

export const Presentation = () => {
  return (
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
  );
};
