import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    nome: props.nome,
    salario: props.salario,
    local: props.local,
    description: props.description,
  });

  const HandleEditVagas = () => {
    axios.put("https://ndserver.onrender.com/edit", {
      id: editValues.id,
      nome: editValues.nome,
      salario: editValues.salario,
      local: editValues.local,
      description: editValues.description,
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);

    props.setOpen(false);
  };

  const HandleDeleteVaga = () => {
    axios
      .delete(`https://ndserver.onrender.com/delete/${editValues.id}`)
      .then(() => {
        props.setOpen(false);
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      });
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const HandleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };
  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="nome"
          label="Nome Da vaga"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={props.nome}
          onChange={HandleChangeValues}
        />
        <TextField
          autoFocus
          margin="dense"
          id="salario"
          label="Salário"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={props.salario}
          onChange={HandleChangeValues}
        />
        <TextField
          autoFocus
          margin="dense"
          id="local"
          label="Local"
          type="text"
          fullWidth
          variant="standard"
          defaultValue={props.local}
          onChange={HandleChangeValues}
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="Descrição"
          type="type"
          fullWidth
          variant="standard"
          defaultValue={props.description}
          onChange={HandleChangeValues}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={HandleEditVagas}>Salvar</Button>
        <Button onClick={HandleDeleteVaga}>Excluir</Button>
        <Button onClick={handleClose}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
}