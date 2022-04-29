import Button from "../../components/Button";
import { AnimationContainer, Container, Content } from "./styles";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { Redirect } from "react-router-dom";

function Login({ authenticated, setAuthenticated }) {
  const handleNavigationLogin = (path) => {
    return history.push(path);
  };
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("E-mail obrigatório")
      .email("E-mail inválido!"),
    password: Yup.string()
      .required("A senha é obrigatória")
      .min(8, "A senha deve ter pelo menos 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();
  const handleLogin = (data) => {
    api
      .post("/sessions", data)
      .catch((err) => {
        console.log(err);
        toast.error("Requisição falhou");
      })
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        const { id } = res.data.user;
        localStorage.setItem("@KenzieHub:id", JSON.stringify(id));
        setAuthenticated(true);
        history.push("/");
      });
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <div className="container_Form">
        <h1>KenzieHub</h1>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(handleLogin)}>
              <h2>Login</h2>
              <Input
                register={register}
                label="Email"
                placeholder="Digite seu e-mail"
                name="email"
                error={errors.email?.message}
              />
              <Input
                register={register}
                label="Senha"
                placeholder="Coloque sua senha"
                type="password"
                name="password"
                error={errors.password?.message}
              />
              <Button buttonSchema="pinkButton" type="submit">
                Entrar
              </Button>
              <p>Ainda não possui uma conta?</p>
              <Button
                buttonSchema="grayButton"
                onClick={() => handleNavigationLogin("/register")}
                type="button"
              >
                Cadastre-se
              </Button>
            </form>
          </AnimationContainer>
        </Content>
      </div>
    </Container>
  );
}
export default Login;
