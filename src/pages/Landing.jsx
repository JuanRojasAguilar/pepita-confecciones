import { Button } from "../components/Button";
import { ButtonPhone } from "../components/button-phone";
import Pages from "./Pages";
import { useRef } from "react";

export const Landing = () => {

    const checkboxRef = useRef(null);
    const menuRef = useRef(null);

    const aparecerMenu  = (event) => {
        if (event.target.id === 'get-started') {
            checkboxRef.current.checked = true
        }

        if (checkboxRef.current.checked) {
            menuRef.current.classList.remove('h-0');
            menuRef.current.classList.add('h-max');
        } else {
            menuRef.current.classList.remove('h-max');
            menuRef.current.classList.add('h-0');
        }

        
        
    }

    const Styles = {
        navbar: `
            w-screen
            h-10
            sm:h-20
            bg-cyan
            fixed
            flex
            justify-between
        ` ,
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
        container: `
            h-screen
            w-screen
            flex
            flex-col
            items-center
            justify-center
            landscape:flex-row
            landscape:justify-around
            landscape:pt-10
        `,
        title: `
            text-5xl
            mb-10
            justify-self-center
            text-center
            portrait:sm:mb-20
            portrait:sm:text-7xl
            portrait:sm:portrait:text-9xl
            landscape:md:text-7xl
            landscape:md:portrait:text-9xl
            landscape:mb-0
            landscape:ms-5
            landscape:text-left
            shadow-neon-blue
            bg-dark-neon-blue
            rounded
            relative
        `,
        cosedora: `
            absolute
            w-20
            right-5
            top-10
            landscape:md:w-40
            hover:-translate-y-5
            transition-all
        `,
        buttongetstarted: `
            w-1/3
            bg-cyan
            rounded-lg
            h-12
            sm:hidden
        `,
        buttonArea: `
            w-3/5
            flex-col
            items-center
            gap-4
            hidden
            sm:flex
        `
    }

    return (
        <div>
            <div className={Styles.navbar}>
                <p className={Styles.topinfo}>confecciones pepita</p>
                <div  onClick={aparecerMenu} className={Styles.menu}>
                    <label htmlFor="burguer-menu"><i className='bx bx-menu'></i></label>
                    <input type="checkbox" className="hidden" id="burguer-menu" name="burguer-menu" ref={checkboxRef} />
                </div>
                <div id="menu-desplegable" className={Styles.menudesp} ref={menuRef}>
                    {Pages.map(page => <ButtonPhone  page={page} key={page.title}/>)}
                </div>
            </div>
            <div className={Styles.container}>
                <h1 className={Styles.title}>Confecciones Pepita<img src="/cosedora.png" className={Styles.cosedora} alt="image" /></h1>
                <button id="get-started" onClick={aparecerMenu} className={Styles.buttongetstarted} >Get Started</button>
                <div className={Styles.buttonArea}>
                    {Pages.map(page => <Button page={page} key={page.title}/>)}
                </div>
            </div>
        </div>
    )
}
