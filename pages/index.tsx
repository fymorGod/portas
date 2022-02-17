import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/porta";
//import Presente from "../components/Presente";

export default function Home() {
  const [ portas, setPortas] = useState(criarPortas(4, 3))

  function renderizerPortas (){
    return portas.map( porta => {
      return <Porta
        key={porta.numero} 
        value={porta} 
        onChange={novaPorta => {
          setPortas(atualizarPortas(portas, novaPorta))
        }}
        />
    })
  }
  
  return (
    <div style={{ display: "flex" }}>
      {
        renderizerPortas()
      }
    </div>
  )
}
