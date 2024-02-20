import styled from "styled-components";

export const SizeAdjustment = styled.div`
  padding: 0em 5em;
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
