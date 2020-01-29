import React, { useState, useEffect } from 'react';

function App() {

  /*
    // Criando variaveis mutaveis
    //     nome   -  funcao q atualiza   -   valor inicial
    const [contador, setContador] = useState(0);

    // Chamando funcoes toda vez q algo alterar ou uma unica vez
    // algo entre o created e o watch do Vue
    //  preencher com o nome da funcao e com q qtde de vezes q deve executar (dentro do array)
    useEffect(() => {
      async function carregar() {

      }

      // Executa quando useEffect for criado
      carregar()
    }, [])

    //  Cria funcao
    fucntion teste() {
      setContador(contador + 1)
    }

    async function enviar(e) {
      e.preventDefault();

      // Apos envio de informacoes para api limpa o campo
      setContador('')
    }
    
    
  */
  return (
    /*
      // Serve como template
      <>
        <Componente/>

        // Passando props
        <Componente props="props"/>

        // Apresentando valores
        <h1>Contador: {contador}

        // Chamando Funcoes
        <button onClick={teste}>Incrementa</button>

        // Criando Form (on submit utilizado quando clicar no botao)
        <form onSubmit={enviar}>
          <label htmlFor="title">Titulo</label>
          // Usando valor do contador no campo
          // E garantido q alteracoes sejam passadas para variavel
          <input 
            name="title"
            id="title"
            required
            value={contador}
            onChange={e => setContador(e.target.value)}
          />
        </form>

        // Fazendo um for para apresentacao
        <ul>
          {array.map(info => (
            // Deve adicionar o id
            <li key={info._id}>{info}</li>
          ))}
        </ul>

      </>
    */
  );
}

