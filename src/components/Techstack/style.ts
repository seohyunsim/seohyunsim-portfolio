import styled from "styled-components";

export const TeckStackWrap = styled.div`
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

export const SkillWrapper = styled.div`
  padding: 0px 1em;
  margin-bottom: 8em;

  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
`;
