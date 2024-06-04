import { Button } from "../components/Button";
import Pages from "./Pages";
import NavLanding from "../layout/NavLanding";
import { getAllMaterials, postMaterial } from "../hooks/useMaterialApi";
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
            landscape:2xl:text-9xl
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
            landscape:2xl:w-48
            right-5
            top-10
            landscape:2xl:top-32
            landscape:md:w-40
            hover:-translate-y-5
            transition-all
        `,
    buttonArea: `
            w-3/5
            flex-col
            items-center
            gap-4
            sm:flex
            hidden
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
