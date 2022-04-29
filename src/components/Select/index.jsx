import { Container, InputContainer } from "./styles";

function Select({ label, register, name, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer>
        <select {...register(name)} {...rest}>
          <option value="" hidden>
            Módulos disponíveis
          </option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
      </InputContainer>
    </Container>
  );
}

export default Select;
