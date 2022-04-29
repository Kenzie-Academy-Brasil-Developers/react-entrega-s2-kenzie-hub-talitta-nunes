import Button from "../../components/Button";
import { AnimationContainer, Container, Content } from "./styles";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { Redirect } from "react-router-dom";

function Register({ authenticated }) {
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Nome obrigatório")
      .max(18, "Nome no máximo 18 caracteres")
      .matches(/^[a-zA-Z_ ]*$/, "Somente letras permitidas"),
    email: Yup.string()
      .required("E-mail obrigatório")
      .email("E-mail inválido!"),
    password: Yup.string()
      .required("A senha é obrigatória")
      .min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "As senhas devem ser iguais!"
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();

  const handleRegister = ({ name, email, password, course_module }) => {
    const user = {
      name,
      email,
      password,
      contact: "ok",
      bio: "ok",
      course_module,
    };
    api
      .post("/users", user)
      .catch((err) => {
        console.log(err);
        toast.error("Requisição falhou!");
      })
      .then((res) => {
        console.log(res);
        toast.success("Cadastro feito com sucesso!");
        history.push("/login");
      });
  };
  if (authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <div className="container_Register">
        <h1>KenzieHub</h1>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(handleRegister)}>
              <h2>Crie sua conta</h2>
              <span>rápido e grátis, vamos lá?</span>
              <Input
                register={register}
                label="Nome"
                placeholder="Seu nome"
                name="name"
                error={errors.name?.message}
              />
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
              <Input
                register={register}
                label="Confirme sua senha"
                placeholder="Confirme sua senha"
                type="password"
                name="confirmPassword"
                error={errors.confirmPassword?.message}
              />
              <Select
                register={register}
                label="Selecione o Módulo"
                placeholder="Selecione seu módulo"
                type="select"
                name="course_module"
              />
              <Button buttonSchema="disabled" type="submit">
                Enviar
              </Button>
              <p>
                Já tem uma conta? Faça seu <Link to="/login">login</Link>
              </p>
            </form>
          </AnimationContainer>
        </Content>
      </div>
    </Container>
  );
}
export default Register;
