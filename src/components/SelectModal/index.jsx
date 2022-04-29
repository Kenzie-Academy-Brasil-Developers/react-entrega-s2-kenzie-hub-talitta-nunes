import { Container, InputContainer } from "./styles";

function SelectModal({ label, register, name, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer>
        <select {...register(name)} {...rest}>
          <option value="" hidden>
            Status
          </option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </InputContainer>
    </Container>
  );
}

export default SelectModal;
