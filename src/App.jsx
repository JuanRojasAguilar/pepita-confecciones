import { useState } from "react";
import { Landing } from "./pages/Landing";
import ReactForm from "./components/Form";

const App = () => {
  return (
    <div className="w-screen h-screen bg-primary-bg bg-cover">
      <ReactForm />
    </div>
  );
};

export default App;
