import { Container } from "./styles";

const Button = ({ children, pinkSchema = false, ...rest }) => {
  return (
    <Container pinkSchema={pinkSchema} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
