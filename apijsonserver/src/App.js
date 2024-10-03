import "./App.css";
import { useState, useEffect } from "react";
const url = "http://localhost:5000/alunos";

function App() {
  // variavel pra guardar os dados vindos da api
  const [alunos, setAlunos] = useState([]);

  //variveis pra novo aluno
  const [nome, setNome] = useState([]);
  const [turma, setTurma] = useState([]);
  const [ano_escolar, setAnoEscolar] = useState([]);
  const [idAluno, setIdAluno] = useState([]);
  
  // Variavel pra controlar o loading
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // funcao pra adicionar os produtos após o clique
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const aluno = { nome, turma, ano_escolar };
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno),
    });
    // atualizar a lista na tela do client com o último aluno adicionado
    const alunoAdicionado = await res.json();
    setAlunos((prevAlunos) => [...prevAlunos, alunoAdicionado]);
    setNome("");
    setTurma("");
    setAnoEscolar("");
    setLoading(false);
  };

  // funcao pra remover os produtos após o clique
  const handleRemove= async (e) => {
    e.preventDefault();

    try{
      const id = idAluno
    const res = await fetch(`http://localhost:5000/alunos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    // atualizar a lista na tela do client com o último aluno adicionado
    const alunoRemovido = await res.json();

    //console.log(alunoRemovido)
    //setAlunos(alunos.filter((eu) => eu.id !== idAluno))
    

    //setAlunos(alunos);
  }
  catch (error) {
    setError("Houve algum erro ao deletar os dados");
    console.log(error.message);
  }
  };

  // Resgate de dados da api
  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        // busca os dados
        const res = await fetch(url);
        // converte o resultado pra json
        const data = await res.json();
        setAlunos(data);
      } catch (error) {
        setError("Houve algum erro ao carregar os dados");
        console.log(error.message);
      }
      setLoading(false);
    }
    fetchData();
    console.log(alunos);
  }, []);

  return (
    <div className="App">
      <div className="add-aluno">
        <h1>Adicione um aluno</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Aluno:
            <input
              type="text"
              value={nome}
              name="name"
              onChange={(e) => setNome(e.target.value)}
            ></input>
          </label>
          <label>
            Turma:
            <input
              type="text"
              value={turma}
              name="turma"
              onChange={(e) => setTurma(e.target.value)}
            ></input>
          </label>
          <label>
            Ano escolar:
            <input
              type="number"
              value={ano_escolar}
              name="ano"
              onChange={(e) => setAnoEscolar(Number(e.target.value))}
            ></input>
          </label>
          {loading && (
            <input type="submit" disabled value="Aguarde" className="btn" />
          )}
          {!loading && (
            <input type="submit" value="Adicionar" className="btn" />
          )}
        </form>

        <h1>Remova um aluno</h1>
        <form onSubmit={handleRemove}>
          <label>
            Id aluno:
            <input
              type="number"
              value={idAluno}
              name="id_aluno"
              onChange={(e) => setIdAluno(Number(e.target.value))}
            ></input>
          </label>
          <input type="submit" value="Remover" className="btn" />
        </form>
      </div>
      <div className="lista-alunos">
        <h1>Lista de Alunos</h1>
        {loading && <h3>Carregando lista...</h3>}
        {error && <h3>Houve um erro ao carregar os dados</h3>}
        {!error && (
          <ul>
            {alunos.map((aluno) => (
              <li key={aluno.id}>
                Aluno: {aluno.nome} - Turma: {aluno.turma} - Ano:{" "}
                {aluno.ano_escolar}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="tabela-alunos">
        <table
          style={{
            border: "2px solid black",
            backgroundColor: "lightblue",
            margin: " 0px auto",
          }}
        >
          <thead>
            <th>Aluno</th>
            <th>Turma</th>
            <th>Ano</th>
          </thead>
          <tbody>
            {alunos.map((aluno) => (
              <tr key={aluno.id}>
                <td>{aluno.nome}</td>
                <td>{aluno.turma} </td>
                <td>{aluno.ano_escolar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
