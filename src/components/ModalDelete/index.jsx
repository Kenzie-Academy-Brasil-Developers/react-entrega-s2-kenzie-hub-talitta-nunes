import Button from "../Button";
import Input from "../Input";
import SelectModal from "../SelectModal";
import { useForm } from "react-hook-form";
import { Container, ModalTec } from "./styles";
import { InputContainer } from "../Input/styles";
import { api } from "../../services/api";

function ModalDelete({ isModalDel, modalDelOn, setIsModalDel, token, title, id}) {
  const handleDelete = () => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data);
    setIsModalDel(false);
  };

  const { register, handleSubmit } = useForm();

  return (
    <ModalTec isModalDel={isModalDel}>
      <Container onSubmit={handleSubmit()}>
        <InputContainer>
          <h3>Detalhes da Tecnologia</h3>
          <span onClick={() => modalDelOn()}>X</span>
        </InputContainer>
        <Input
          label="Nome da Tecnologia"
          placeholder="Tecnologia"
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
        <Button onClick={handleDelete} type="button">Excluir</Button>
        <Button type="submit">Alterar</Button>
      </Container>
    </ModalTec>
  );
}
export default ModalDelete;
