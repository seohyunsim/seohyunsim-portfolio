import styled from "styled-components";

export const GalleryWrap = styled.div`
  padding: 8em 5em;
  h2 {
    font-size: 35px;
    padding: 10px 10px 20px 10px;
    border-bottom: 1px solid;
  }
  .subtitle {
    margin-bottom: 0;
    font-size: 28px;
    padding: 10px 10px 20px 50px;
  }
  .detailWrap {
    padding: 2em 0em;
    width: 90%;
    margin: 0 auto;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin-bottom: 3em;
    .title {
      font-weight: 800;
      font-size: 23px;
      padding: 0em 1em 0em 2em;
    }
    .des {
      padding: 1em 3em 0em 3em;
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10vw;
    h2 {
      font-size: 5vw;
    }
    .detailWrap {
      .titleWrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          padding: 10px 0;
        }
      }
    }
  }
`;
