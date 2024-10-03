import { useState } from "react";
const Forms = (props) => {
  const [name, setName] = useState(props ? props.name : "");
  const [email, setEmail] = useState(props ? props.email : "");
  const [desc, setDesc] = useState();
  const [tipo, setTipo] = useState()
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(desc);
    console.log(tipo);
    setName("");
    setEmail("");
    setDesc("");
    setTipo("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Com html for */}
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome:"
            onChange={handleName}
          />
          {/* Com label envolvendo o input */}
          <label>
            <span>Email:</span>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email:"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>
          {/* TEXTAREA */}
          <label>
            <span>Descrição:</span>
            <textarea
              name="decricao"
              placeholder="Se descreva:"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></textarea>
          </label>
          <label>
            <span>Tipo de usuário:</span>
            <select
              name="tipoU"
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            >
                <option value="usuario">Usuário </option>
                <option value="adm">Administrador </option>
                <option value="cliente"> Cliente </option>
            </select>
          </label>
        </div>
        <input type="submit" value="Enviar" />
        {/* formluario pre preenchido */}
        {/* <label htmlFor="nome">Nome : </label>
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome:"
          onChange={handleName}
          value={name}
        />
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email:"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          ></input>
        </label> */}

      </form>
    </div>
  );
};

export default Forms;
