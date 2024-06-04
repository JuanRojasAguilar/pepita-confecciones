import { Button } from "../components/Button";
import Pages from "./Pages";
import NavLanding from "../layout/NavLanding";

export const Landing = () => {

  const Styles = {
    container: `
              h-full
            flex
            flex-col
            items-center
            justify-center
            landscape:flex-row
            landscape:justify-around
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
            flex
        `,
  };

  return (
    <NavLanding>
      <div className={Styles.container}>
        <h1 className={Styles.title}>
          Confecciones Pepita
          <img src="/cosedora.png" className={Styles.cosedora} alt="image" />
        </h1>
        <div className={Styles.buttonArea}>
          {Pages.map((page) => (
            <Button page={page} key={page.title} />
          ))}
        </div>
      </div>
    </NavLanding>
  );
};
