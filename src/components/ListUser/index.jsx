import { Container } from "./styles";

function ListUser({ name, course_module }) {
  return (
    <Container>
      <p>{name}</p>
      <span>{course_module}</span>
    </Container>
  );
}
export default ListUser;
