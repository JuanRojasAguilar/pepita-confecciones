import NavCards from "../layout/NavCards";
import Card from "../components/Cards";
import { getAllMaterials } from "../hooks/useMaterialApi";

const CardDisplay = () => {
  const { _, materials } = getAllMaterials();
  const Styles = {
    cardGrid: `
      grid
      grid-cols-1
      p-2
      justify-items-center
      h-full
      w-full
      overflow-auto
      pt-12
      sm:pt-16
      landscape:2xl:pt-28
      gap-y-8
      sm:grid-cols-2
      lg:grid-cols-3
      landscape:2xl:grid-cols-4
    `,
  };

  return (
      <NavCards>
        <div id="cardContainer" className={Styles.cardGrid}>
        {materials && materials.map(material => {
          return <Card  key={material.id} material={material}/>
        })}
        </div>
      </NavCards>
  );
};

export default CardDisplay;
