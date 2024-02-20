import { Experience } from "dev-portfolio";
import { historyListDefault } from "../../defaultProps/CommonProps";

export const Experiences = () => {
  return (
    <div style={{ padding: "0em 3em" }} id="['EXPERIENCE', 'bi:card-list']">
      <Experience
        theme="vertical"
        shape="round-square"
        historyList={historyListDefault}
      />
    </div>
  );
};
