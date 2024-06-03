import { useState ,useRef } from "react";
import ReactForm from '../components/Form.jsx';

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
      text-sm
      h-10
      w-screen
      fixed
    `,
    rigthNav: `
      flex
      justify-end
    `,
    buttonStyles: `
      bg-cyan
      rounded
      me-2
      w-24
    `, 
    inputStyle: `
      text-center
      rounded
      me-5
      w-24
    `
  }

  return (
    <div className="h-screen w-screen bg-primary-bg bg-cover relative" ref={divRef} onClick={cerrarForm}>
      <nav className={Styles.nav} id="nav">
        <div>
          <a href="/">&#8592; Anterior</a>
        </div>
        <div className={Styles.rigthNav}>
          <button className={Styles.buttonStyles} onClick={putForm}>agregar</button>
          <input type="text" placeholder="buscar" className={Styles.inputStyle} />
        </div>      
      </nav>
      {children}
      {showForm && <ReactForm onFormSubmit={hiddenForm}/>}
    </div>
  );
};

export default NavCards;

