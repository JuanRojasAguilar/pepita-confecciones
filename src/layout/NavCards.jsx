import { useState ,useRef } from "react";
import OrderForm from "../components/OrderForm";

const NavCards = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const divRef = useRef(null)

  const putForm = () => setShowForm(true);

  const hiddenForm = () => setShowForm(false)

  const cerrarForm = (event) => {
    const html = event.target
    if (html.id === 'nav' || html.id === 'cardContainer') {
      hiddenForm()
    }
  }

  const Styles = {
    nav: `
      flex
      justify-between
      items-center
      h-18
      w-screen
      fixed
      z-10
      text-white
      text-3xl
      pl-4
      pt-2
    `,
    rigthNav: `
      flex
      justify-end
    `,
    buttonStyles: `
      bg-cyan
      rounded
      me-2
      w-32
    `, 
    inputStyle: `
      text-center
      rounded
      me-5
      w-28
    `
  }

  return (
    <div className="h-screen w-screen bg-primary-bg bg-cover relative" ref={divRef} onClick={cerrarForm}>
      <nav className={Styles.nav} id="nav">
        <div>
          <a href="/">&#8592; Anterior</a>
        </div>
        <div className={Styles.rigthNav}>
          <button className={Styles.buttonStyles} onClick={putForm}>Agregar</button>
          <input type="text" placeholder="Buscar" className={Styles.inputStyle} />
        </div>      
      </nav>
      {children}
      {showForm && <OrderForm onFormSubmit={hiddenForm}/>}
    </div>
  );
};

export default NavCards;

