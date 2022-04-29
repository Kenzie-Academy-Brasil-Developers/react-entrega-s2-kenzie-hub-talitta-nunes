import styled from "styled-components";

export const ModalTec = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: auto;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isModalDel ? "block" : "none")};
`;

export const Container = styled.form`
  background-color: #212529;
  width: 80%;
  max-width: 400px;
  padding: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
`;
export const InputContainerModal = styled.div`
  background: #343b41;
  border: 2px solid transparent;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;
  margin-bottom: 20px;
  h3 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #868e96;
    cursor: pointer;
  }
`;
