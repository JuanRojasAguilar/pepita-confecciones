import { useState } from "react";
import { Landing } from "./components/Landing";

const App = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
    console.log(contador);
  }


  return (
    <div className="w-screen h-screen">
      <Landing />
    </div>
  )
}

export default App
