import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #121214;
  .container_Form {
    h1 {
      color: #ff577f;
      text-align: center;
      margin-bottom: 16px;
    }
    div {
      color: var(--gray);
    }
  }
`;

export const Content = styled.div`
  background-color: #212529;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  max-height: 400px;
  margin: 10px;
  color: #f8f9fa;
  h2 {
    color: #f8f9fa;
  }
`;
const appearFromRight = keyframes`
from{
    opacity:0;
    transform: translateX(50px);
}
to{
    opacity: 1;
    transform: translateX(0px);
}`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 32px;
    }
    > div {
      margin-top: 16px;
    }
    p {
      margin-top: 8px;
      > a {
        font-weight: bold;
        color: var(--orange);
      }
    }
  }
`;
