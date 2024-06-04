import { useState ,useRef } from "react";
import OrderForm from "../components/OrderForm";

const NavCards = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const divRef = useRef(null)

  const putForm = () => setShowForm(true);

  const hiddenForm = () => setShowForm(false)

  const cerrarForm = (event) => {
    const html = event.target
    if (html.id === 'nav' || 
    html.id === 'cardContainer' ||
    html.classList.contains('flip-card-back')) {
      hiddenForm()
    }
  }

  const Styles = {
    nav: `
      flex
      justify-between
      items-center
      text-sm
      h-12
      sm:h-16
      landscape:2xl:h-28
      w-screen
      fixed
      z-10
      pl-4
    `,
    anterior: `
      sm:text-4xl
      landscape:2xl:text-6xl
      text-white
    `,
    rigthNav: `
      flex
      justify-end
    `,
    buttonStyles: `
      bg-cyan
      rounded
      landscape:2xl:rounded-xl
      me-2
      w-24
      sm:w-32
      landscape:2xl:w-60
      sm:h-8
      landscape:2xl:h-16
      sm:text-2xl
      landscape:2xl:text-4xl
      shadow-lg 
      shadow-stone-900
    `, 
    inputStyle: `
      text-center
      rounded
      landscape:2xl:rounded-xl
      me-5
      w-24
      sm:w-32
      landscape:2xl:w-60
      sm:h-8
      landscape:2xl:h-16
      sm:text-2xl
      landscape:2xl:text-4xl
      shadow-lg 
      shadow-stone-900
    `
  }

  return (
    <div className="h-screen w-screen bg-primary-bg bg-cover relative" ref={divRef} onClick={cerrarForm}>
      <nav className={Styles.nav} id="nav">
        <div>
          <a href="/" className={Styles.anterior}>&#8592; Anterior</a>
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

