import styled, { css } from "styled-components";

export const Container = styled.button`
  height: 45px;
  border-radius: 8px;
  border: 2px solid transparent;
  font-family: "Inter", monospace;
  margin-top: 16px;
  width: ${(props) => (props.sair ? "50px" : "100%")};
  transition: 0.5s;
  :hover {
    border: 2px solid #f5f5f5;
  }

  ${(props) => {
    switch (props.buttonSchema) {
      case "pinkButton":
        return css`
          background-color: #ff577f;
          color: #f5f5f5;
        `;
      case "grayButton":
        return css`
          background-color: #868e96;
          color: #f5f5f5;
        `;
      case "disabled":
        return css`
          background-color: #59323f;
          color: #f5f5f5;
        `;
      default:
        return css`
          background-color: #212529;
          color: #f5f5f5;
        `;
    }
  }}
`;
