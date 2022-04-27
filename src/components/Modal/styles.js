import styled from "styled-components";

export const ModalTec = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: auto;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isModalVisible ? "block" : "none")};
`;

export const Container = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  background: var(--grey2);
`;
export const InputContainer = styled.div`
  background: var(--grey1);

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
  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
  }
`;
