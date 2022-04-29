import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  label {
    color: #f8f9fa;
    text-align: left;
  }
`;

export const InputContainer = styled.div`
  background: #343b41;
  border-radius: 3.19px;
  border: 2px solid transparent;
  color: var(--gray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  select {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey2);
    &::placeholder {
      color: var(--gray);
    }
  }
`;
