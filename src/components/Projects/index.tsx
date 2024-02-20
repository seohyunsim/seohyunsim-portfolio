import { Detail } from "./Detail";
import { Preview } from "./Preview";
import { GalleryWrap } from "./style";

export const Projects = () => {
  return (
    <GalleryWrap id="['PROJECT', 'icon-park-outline:picture-album']">
      <Preview />
      <Detail />
    </GalleryWrap>
  );
};
