import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { Container, Content, TechList, InnerContainer } from "./styles";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import ListTech from "../../components/ListTech";
import ListUser from "../../components/ListUser";
import Header from "../../components/Header";

function Home({ authenticated }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tech, setTech] = useState([]);
  const [list, setList] = useState(false);
  const [nameUser, setNameUser] = useState({});
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [id] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:id")) || ""
  );
  const modalOn = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .catch((err) => {
        console.log(err);
        toast.error("Requisição falhou!");
      })
      .then((response) => {
        setTech(response.data.techs);
        const { name, course_module } = response.data;
        setNameUser({ name, course_module });
      });
  }, [isModalVisible, list]);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <Container>
      <InnerContainer>
        <Header />

        <ListUser
          name={nameUser.name}
          course_module={nameUser.course_module}
          id={nameUser.id}
        />

        <Modal
          isModalVisible={isModalVisible}
          modalOn={modalOn}
          token={token}
          setIsModalVisible={setIsModalVisible}
        />
        <Content>
          <h3>Tecnologias</h3>

          <Button
            sair
            pinkSchema
            onClick={() => modalOn()}
            whiteSchema
            type="button"
          >
            +
          </Button>
        </Content>
        <TechList>
          {tech.map((techS) => (
            <ListTech
              title={techS.title}
              status={techS.status}
              key={techS.id}
              id={techS.id}
              token={token}
              list={list}
              setList={setList}
            />
          ))}
        </TechList>
      </InnerContainer>
    </Container>
  );
}
export default Home;
