import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Home,
  Input,
  TextArea,
  Title,
} from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Index = () => {
  const [values, setValues] = useState();

  const HandleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    if (
      values.nome &&
      values.salario &&
      values.local &&
      values.description !== null
    ) {
      
        axios.post("https://ndserver.onrender.com/register", {
          nome: values.nome,
          salario: values.salario,
          local: values.local,
          description: values.description,
        })
        .then((response) => {
          console.log(response);
        }); 

        console.log(values)

      // Notifição de que a vaga foi enviada
      

      toast.success("Vaga adicionada com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      window.alert("erro");
    }
  };

  return (
    <Container>
      <Link to={"/"}>
        <Home>
          <HomeIcon />
        </Home>
      </Link>
      <Form>
        <Title>Adicionar Vagas</Title>
        <label htmlFor="nome">Nome da Vaga</label>
        <Input
          id="nome"
          type="text"
          name="nome"
          onChange={HandleChangeValues}
        />
        <label htmlFor="salario">Salário</label>
        <Input
          id="salario"
          type="text"
          name="salario"
          onChange={HandleChangeValues}
        />
        <label htmlFor="local">Local</label>
        <Input
          id="local"
          type="text"
          name="local"
          onChange={HandleChangeValues}
        />
        <label htmlFor="description">Descrição</label>
        <TextArea
          id="description"
          name="description"
          onChange={HandleChangeValues}
        />
        <Button onClick={HandleSubmit}>Adicionar</Button>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          theme="colored"
          pauseOnHover={false}
          pauseOnFocusLoss={true}
        />
      </Form>
    </Container>
  );
};

export default Index;