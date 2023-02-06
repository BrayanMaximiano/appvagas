import {
    Container,
    IndexDesc,
    IndexLabel,
    IndexLocal,
    IndexName,
    IndexSalary,
    Indice,
    VagasWrapper,
  } from "./styles";
  import VagaItem from "../VagaItem";
  import { useState } from "react";
  import { useEffect } from "react";
  import axios from "axios";
  import ClipLoader from "react-spinners/ClipLoader";
  import FormDialog from "../Dialog/Dialog";
  
  const Index = () => {
    const [loading, setLoading] = useState();
    const [ListVagas, setListVagas] = useState();
    const [open, setOpen] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      axios.get("https://ndserver.onrender.com/getVagas").then((response) => {
        setListVagas(response.data);
        setLoading(false);
      });
    }, []);
  
    return (
      <>
        <FormDialog open={open} setOpen={setOpen} />
        <Container>
          <Indice>
            <IndexName>
              <IndexLabel>Nome</IndexLabel>
            </IndexName>
            <IndexSalary>
              <IndexLabel>Salario</IndexLabel>
            </IndexSalary>
            <IndexLocal>
              <IndexLabel>Local</IndexLabel>
            </IndexLocal>
            <IndexDesc>
              <IndexLabel>Descrição</IndexLabel>
            </IndexDesc>
          </Indice>
          <VagasWrapper>
              
            {loading ? (
              <ClipLoader size={50} color={"#0000ff"} loading={loading} />
            ) : (
              typeof ListVagas !== "undefined" &&
              ListVagas.map((value) => {
                return (
                  <VagaItem
                    key={value.id}
                    hotListVagas={ListVagas}
                    setHotListVagas={setListVagas}
                    id={value.id}
                    nome={value.nome}
                    salario={value.salario}
                    local={value.local}
                    description={value.description}
                  />
                );
              })
            )}
          </VagasWrapper>
        </Container>
      </>
    );
  };
  
  export default Index;