import { useState } from "react";
import Card from "./components/Cards";

const App = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
    console.log(contador);
  }


  return (
    <>
      <div className="flex justify-center">
        <Card />
      </div>
    </>
  )
}

export default App
