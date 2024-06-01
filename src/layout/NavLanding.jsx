import { ButtonPhone } from "../components/button-phone";
import Pages from "../pages/Pages";
import { useRef } from "react";

const NavLanding = ({ children }) => {
  const checkboxRef = useRef(null);
  const menuRef = useRef(null);

  const aparecerMenu = (event) => {
    if (event.target.id === "get-started") {
      checkboxRef.current.checked = true;
    }
    if (checkboxRef.current.checked) {
      menuRef.current.classList.remove("h-0");
      menuRef.current.classList.add("h-max");
    } else {
      menuRef.current.classList.remove("h-max");
      menuRef.current.classList.add("h-0");
    }
  };

  const Styles = {
    navbar: `
      w-screen
      h-10
      sm:h-20
      bg-cyan
      fixed
      flex
      justify-between
    `,
    topinfo: `
      w-1/3
      sm:w-2/3
      leading-none
      h-full
      flex
      items-center
      ms-3
      sm:text-3xl
    `,
    menu: `
      text-3xl
      flex
      justify-center
      items-center
      w-10
      sm:hidden
    `,
    menudesp: `
      h-0
      truncate
      absolute
      mt-10
      w-full
      flex
      flex-col
      sm:hidden
    `,
  };

  return (
    <div className="h-screen w-screen bg-primary-bg bg-cover">
      <div className={Styles.navbar}>
        <p className={Styles.topinfo}>confecciones pepita</p>
        <div onClick={aparecerMenu} className={Styles.menu}>
          <label htmlFor="burguer-menu">
            <i className="bx bx-menu"></i>
          </label>
          <input
            type="checkbox"
            className="hidden"
            id="burguer-menu"
            name="burguer-menu"
            ref={checkboxRef}
          />
        </div>
        <div id="menu-desplegable" className={Styles.menudesp} ref={menuRef}>
          {Pages.map((page) => (
            <ButtonPhone page={page} key={page.title} />
          ))}
        </div>
      </div>
      <div className="h-full pt-10 sm:pt-20">{children}</div>
    </div>
  );
};

export default NavLanding;
