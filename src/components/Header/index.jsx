import Button from "../Button";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import logo from "../../assets/KenzieHub2.svg";

function Header() {
  const history = useHistory();
  const handleNavigationLogin = (path) => {
    localStorage.clear();
    return history.push(path);
  };

  return (
    <Container>
      <img src={logo} alt="logo" />
      <div>
        <Button
          sair
          buttonSchema
          onClick={() => handleNavigationLogin("/login")}
          type="button"
        >
          Sair
        </Button>
      </div>
    </Container>
  );
}
export default Header;
