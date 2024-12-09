// //assinatura do componente
const BoasVindas =({nome,genero}) => {
  //logica do componente



  //jsx do componente
  return(
   <h1>Seja bem-vind{genero == 'f' ? 'a' : 'o'} {nome} </h1>
  )
}


const App = () => {
  const aluno = [
    {
      nome: "Levi",
      genero: "m"
    },

    {
      nome: "Ale",
      genero: "m"
    },

    {
      nome: "Yara",
      genero: "f"
    },

    {
      nome: "Liana",
      genero: "f"
    },
  ]



  return (

  <>
    {/*
<BoasVindas nome="Levi" genero="m"/>
<BoasVindas nome="Ale" genero="m"/>
<BoasVindas nome="Nayara" genero="f"/>
<BoasVindas nome="Liana" genero="f"/>*/}

    {
      aluno.map(alunos => (
        <BoasVindas
          nome={alunos.nome}
          genero={alunos.genero}
        />
      ))
    }
  </>
  )
}
export default App;