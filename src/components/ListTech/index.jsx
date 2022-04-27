//import { TechContainer } from "../../pages/Home/styles";
import { Container } from "./styles";
//import { useState } from "react";
import ModalDelete from "../ModalDelete";

function ListTech({ title, status, id, token, isModalDel, setIsModalDel }) {
  const modalDelOn = () => {
    setIsModalDel(!isModalDel);
  };

  return (
    <>
      <ModalDelete
        isModalDel={isModalDel}
        modalDelOn={modalDelOn}
        show={isModalDel}
        token={token}
        title={title}
        status={status}
        setIsModalDel={setIsModalDel}
        onClick={modalDelOn}
        id={id}
      />

      <>
        <Container onClick={modalDelOn}>
          <p>{title}</p>
          <span>{status}</span>
        </Container>
      </>
    </>
  );
}
export default ListTech;
