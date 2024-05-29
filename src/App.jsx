import { useState } from "react";
import Card from "./components/Cards";
import ReactForm from "./components/Form";

const App = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
    console.log(contador);
  }


  return (
    <div className="w-screen h-screen">
      <ReactForm />
    </div>
  )
}

export default App
