import Button from "../Button";
import Input from "../Input";
import SelectModal from "../SelectModal";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ModalTec, InputContainerModal } from "./styles";
import { api } from "../../services/api";
import { toast } from "react-toastify";

function Modal({ isModalVisible, modalOn, setIsModalVisible, token }) {
  const createTechs = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        toast.error("Requisição falhou!");
        console.log(err);
      })
      .then((response) => setIsModalVisible(false));
    //console.log(data);
  };

  const formSchema = Yup.object().shape({
    title: Yup.string().required("tecnologia obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <ModalTec isModalVisible={isModalVisible}>
      <Container onSubmit={handleSubmit(createTechs)}>
        <InputContainerModal>
          <h3>Cadastrar Tecnologias</h3>
          <span onClick={() => modalOn()}>X</span>
        </InputContainerModal>
        <Input
          placeholder="Tecnologia"
          register={register}
          name="title"
          error={errors.title?.message}
        />
        <SelectModal
          placeholder="Selecione seu nível"
          register={register}
          name="status"
        />
        <Button buttonSchema="pinkButton" type="submit">
          Cadastrar Tecnologia
        </Button>
      </Container>
    </ModalTec>
  );
}
export default Modal;
