import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
//import Presente from "../components/Presente";

export default function Home() {
  const [ p1, setP1] = useState(new PortaModel(1))

  return (
    <div style={{ display: "flex" }}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  )
}
