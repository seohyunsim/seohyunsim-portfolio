import { Masonry, Image } from "dev-portfolio";
import { SizeAdjustment } from "./style";
import { imagesConfig } from "./config";

export const Presentation = () => {
  return (
    <SizeAdjustment id="['PRESENTATION', 'entypo:modern-mic']">
      <h3>Presentation</h3>
      <Masonry>
        {imagesConfig.map(({ redirectURL, src, head }) => (
          <Image
            zoomWhenHover={true}
            redirectURL={redirectURL}
            src={src}
            subhead=""
            head={head}
          />
        ))}
      </Masonry>
    </SizeAdjustment>
  );
};
