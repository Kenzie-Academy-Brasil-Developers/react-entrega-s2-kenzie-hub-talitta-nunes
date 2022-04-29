//import { TechContainer } from "../../pages/Home/styles";
import { Container } from "./styles";
//import { useState } from "react";
import ModalDelete from "../ModalDelete";
import { useState } from "react";

function ListTech({ title, status, list, setList, id, token }) {
  const [isModalDel, setIsModalDel] = useState(false);
  const modalDelOn = () => {
    setIsModalDel(!isModalDel);
    setList(!list);
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
        list={list}
        setList={setList}
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
