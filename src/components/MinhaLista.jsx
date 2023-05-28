import { useEffect, useState } from "react";

const minhaLista = [
  { id: "1", value: "fruta" },
  { id: "2", value: "legume" },
  { id: "3", value: "carne" },
  { id: "4", value: "cerveja" },
];

export default function MinhaLista() {
  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState("");
  
  //esse efeito é acionado quando há mudança no input
  useEffect(()=>{
    if (pesquisa) {
      const novaLista = minhaLista.filter((item)=>{
        return (
          item.value.toLowerCase().includes(pesquisa.toLowerCase())
        )
      })
      setProdutos(novaLista)
    } else {
      setProdutos(minhaLista)
    }
    },[pesquisa] 
  )
  
  return (
    <>
      <h1>Efeitos Colaterais e listas</h1>
      <input
        type="text"
        placeholder="pesquise aqui"
        value={pesquisa}
        onChange={(e) => {
          setPesquisa(e.target.value);
        }}
      />
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        );
      })}
    </>
  );
}
