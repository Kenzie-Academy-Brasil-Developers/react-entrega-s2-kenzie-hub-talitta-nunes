import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .container_Register {
    h1 {
      color: #ff577f;
      text-align: center;
      margin-bottom: 16px;
    }
    h2,
    p,
    span,
    label {
      color: #f8f9fa;
    }
    div {
      color: #f8f9fa;
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
  height: 100%;
  margin:10px;
  max-height: 600px;
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
        color: var(--pinkKenzie);
      }
    }
  }
`;
