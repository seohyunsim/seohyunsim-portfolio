import { Carousel, Image } from "dev-portfolio";

export const Banner = () => {
  return (
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
      <Image noShowHead={true} zoomWhenHover={false} src="common/banner.png" />
    </Carousel>
  );
};
