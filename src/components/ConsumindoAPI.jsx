import { useEffect, useState } from "react";

//nesse componente foi combinado uso de:
//- hooks
//- consumo de api
//- renderizaçao condicional

export default function ConsumindoAPI() {
  //defini a url
  const API = `https://jsonplaceholder.typicode.com/todos`;

  //defini onde serao salvos os resultados da API
  const [todos, setTodos] = useState([]);
  const [filterTodo, setFilterTodo] = useState("");
  const [todosFilter, setTodosFilter] = useState([]);

  //gatilho para a consulta a API
  useEffect(() => {
    //funcao assicrona para aguardar o resulta
    async function buscarDados() {
      //relizando o fetch na API, convertendo em JSON e retornando o resultado
      const resultado = (await fetch(API)).json();
      return resultado;
    }

    //resolvendo a promisse que foi salva em resuldo com o then e
    //incluindo o valor no estate de todos.
    buscarDados().then((res) => {
      setTodos(res);
      setTodosFilter(res);
    });
  }, []);

  useEffect(() => {
    if (filterTodo) {
      const novaLista = todos.filter((item) => {
        return item.title.includes(filterTodo);
      });
      setTodosFilter(novaLista);
    } else {
      setTodosFilter(todos);
    }
  }, [filterTodo]);

  return (
    <>
      <h1 className="title">Buscando tarefas</h1>
      <input
        type="text"
        placeholder="buscar tarefas"
        className="input-todo"
        value={filterTodo}
        onChange={(e) => {
          setFilterTodo(e.target.value);
        }}
      />
      <ol>
        {todosFilter.map((item) => {
          return (
            //renderizaçao condicional na classe do li
            <>
            <li
              key={item.id}
              className={`${
                item.completed ? "completed" : "no-completed"
              } item`}
            >
              {item.title}
            </li>
            </>
          );
        })}
      </ol>
    </>
  );
}
