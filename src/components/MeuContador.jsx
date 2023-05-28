import { useState } from "react";

export default function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }
  function diminuir() {
    setContador(contador - 1);
  }

  //renderizaçao condicional
  //renderiza esse return do bloco caso a condicao seja veradeira
  if (contador > 5) {
    return (
      <div>
        <h1>maior que 5</h1>
        <button onClick={diminuir}>diminuir</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Meu contador</h1>
      {contador > 9 ? <h1>Valor muito grande</h1> : null}
      <h3>{contador}</h3>
      <button onClick={aumentar}>aumentar</button>
      <button onClick={diminuir}>diminuir</button>

    </div>
  );
}
