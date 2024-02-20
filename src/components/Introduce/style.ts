import styled from "styled-components";

export const IntroduceBanner = styled.div`
  padding: 0em 5em;
  h3 {
    margin: 0;
    font-size: 30px;
    padding: 10px 0;
    border-bottom: 1px solid;
  }

  .wrapper {
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .detailWrap {
    padding: 20px 2em;
    width: 90%;
    margin: 0 auto;
    box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    .title {
      font-weight: 800;
      font-size: 18px;
    }
    .des {
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10vw;
    h3 {
      font-size: 8vw;
    }
    .detailWrap {
      .titleWrap {
        display: flex;
        flex-direction: column;
        .title {
          padding: 10px 0;
        }
      }
      .des {
        padding: 10px;
        gap: 5px;
      }
    }
  }
`;

export const Link = styled.div`
  cursor: pointer;
  border-bottom: 1px solid;
  width: fit-content;
  color: #2e61bf;
`;
