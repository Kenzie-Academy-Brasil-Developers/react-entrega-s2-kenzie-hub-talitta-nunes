import styled from "styled-components";

export const Container = styled.div`
  background-color: #121214;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
export const TechContainer = styled.div`
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  width: 100%;
`;
export const TechList = styled.ul`
  width: 100%;
  padding: 0 15px;
  margin-top: 32px;
  background-color: #212529;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InnerContainer = styled.div`
  width: 80%;
  max-width: 600px;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 16px;
    font-family: "Inter";
    font-weight: 600;
    color: #f8f9fa;
  }

  div {
    flex: 1;
    display: flex;
    margin-top: 1rem;

    button + button {
      margin-left: 1rem;
    }
  }
  span {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    flex-wrap: wrap;
  }
`;
