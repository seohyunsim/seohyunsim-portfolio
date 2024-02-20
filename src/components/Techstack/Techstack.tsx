import { Skill } from "dev-portfolio";
import { SkillWrapper, TeckStackWrap } from "./style";
import { skillsConfig } from "./config";

export const Techstack = () => {
  return (
    <TeckStackWrap id="['SKILL', 'akar-icons:stack-overflow-fill']">
      <h3>Skill</h3>
      <SkillWrapper>
        {skillsConfig.map(
          ({ title, titleSize, iconName, iconSize, iconColor }) => (
            <Skill
              title={title}
              titleSize={titleSize}
              iconName={iconName}
              iconSize={iconSize}
              iconColor={iconColor}
            />
          )
        )}
      </SkillWrapper>
    </TeckStackWrap>
  );
};
