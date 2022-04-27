import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { Container, Content, TechContainer } from "./styles";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import ListTech from "../../components/ListTech";
import ListUser from "../../components/ListUser";

function Home({ authenticated }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tech, setTech] = useState([]);
  const [isModalDel, setIsModalDel] = useState(false);
  const [nameUser, setNameUser] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [id] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:id")) || ""
  );
  const modalOn = () => {
    setIsModalVisible(!isModalVisible);
  };

  function loadTechs() {
    api
      .get(`/users/${id}`)
      .catch((err) => {
        console.log(err);
        toast.error("Requisição falhou!");
      })
      .then((response) => {
        setTech(response.data.techs);
        const { name, course_module } = setNameUser(response.data);
        toast.success("Sucesso, Kenzinho!");
      });
  }

  useEffect(() => {
    loadTechs();
  }, [setIsModalVisible, setIsModalDel]);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <Container>
      <TechContainer>
        <ListUser
          name={nameUser.name}
          course_module={nameUser.course_module}
          id={nameUser.id}
        />
      </TechContainer>
      <Modal
        isModalVisible={isModalVisible}
        modalOn={modalOn}
        token={token}
        setIsModalVisible={setIsModalVisible}
      />
      <Content>
        <h1>KenzieHub</h1>
        <div>
          <Button
            pinkSchema
            onClick={() => modalOn()}
            whiteSchema
            type="button"
          >
            Create
          </Button>
        </div>
      </Content>
      <TechContainer>
        {tech.map((techS) => (
          <ListTech
            title={techS.title}
            status={techS.status}
            key={techS.id}
            id={techS.id}
            setIsModalDel={setIsModalDel}
            isModalDel={isModalDel}
            token={token}
          />
        ))}
      </TechContainer>
    </Container>
  );
}
export default Home;
