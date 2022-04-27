import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  background: var(--grey1);
  border-radius: 10px;
  border: 2px solid var(--gray);
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
