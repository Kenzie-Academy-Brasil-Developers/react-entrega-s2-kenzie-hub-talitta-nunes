import Button from "../Button";
import Input from "../Input";
import SelectModal from "../SelectModal";
import { useForm } from "react-hook-form";
import { Container, ModalTec } from "./styles";
import { api } from "../../services/api";
//import { useState } from "react";
import { InputContainerModal } from "../Modal/styles";

function ModalDelete({
  modalDelOn,
  token,
  title,
  id,
  list,
  setList,
  isModalDel,
  setIsModalDel,
}) {
  const handleDelete = () => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setIsModalDel(!isModalDel);
        setList(!list);
      });
  };

  const { register, handleSubmit } = useForm();

  return (
    <ModalTec isModalDel={isModalDel}>
      <Container onSubmit={handleSubmit()}>
        <InputContainerModal>
          <h3>Detalhes da Tecnologia</h3>
          <span onClick={() => modalDelOn()}>X</span>
        </InputContainerModal>
        <Input
          disabled
          label="Nome da Tecnologia"
          placeholder={title}
          register={register}
          name={title}
          error=""
        />
        <SelectModal
          label="Status"
          placeholder="Selecione seu nível"
          register={register}
          name="status"
        />
        <Button buttonSchema="grayButton" onClick={handleDelete} type="button">
          Excluir
        </Button>
        <Button buttonSchema="disabled" type="button">
          Alterar
        </Button>
      </Container>
    </ModalTec>
  );
}
export default ModalDelete;
