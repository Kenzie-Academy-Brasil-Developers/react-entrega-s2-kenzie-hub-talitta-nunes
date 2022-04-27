import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.pinkSchema ? "#FF577F" : "#343B41")};
  color: ${(props) => (props.pinkSchema ? "#f5f5f5" : "#f5f5f5")};
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--black);
  font-family: "Roboto Mono", monospace;
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;
  :hover {
    border: 2px solid #c85511;
  }
`;
