import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: left;
  div {
    color: #f8f9fa;
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background-color: #343b41;
  border-radius: 3.19px;
  border: 2px solid transparent;
  color: var(--gray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}
  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: #f8f9fa;
    &::placeholder {
      color: var(--gray);
    }
  }
`;
