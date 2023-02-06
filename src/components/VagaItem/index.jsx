import { Container, Descricao, Local, Nome, Salario } from "./styles";

import React, { useState } from "react";
import FormDialog from "../Dialog/Dialog";

const Index = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        nome={props.nome}
        salario={props.salario}
        local={props.local}
        description={props.description}
        hotListVagas={props.ListVagas}
        setHotListVagas={props.setListVagas}
        id={props.id}
      />
      <Container onClick={()=> {setOpen(true)}}>
        <Nome>{props.nome}</Nome>
        <Salario>{props.salario}</Salario>
        <Local> {props.local}</Local>
        <Descricao>{props.description}</Descricao>
      </Container>
    </>
  );
};

export default Index;