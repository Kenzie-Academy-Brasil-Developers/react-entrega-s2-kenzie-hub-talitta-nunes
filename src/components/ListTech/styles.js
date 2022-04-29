import styled from "styled-components";

export const Container = styled.li`
  background-color: #121212;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 50px;
  padding: 16px;
  margin: 15px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #f8f8fa;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    background-color: #343b41;
    transition: 0.5s;
  }
`;
