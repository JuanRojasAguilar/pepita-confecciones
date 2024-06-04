import NavCards from "../layout/NavCards";
import Card from "../components/Cards";
import { getAllMaterials, postMaterial } from "../hooks/useMaterialApi";
import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";

const CardDisplay = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllMaterials().then((data) => {
      const newCards = data.map((material) => {
        return <Card key={material.id} material={material} />;
      });
      setCards(newCards);
    });
  }, []);

  // console.log(
  //   getAllMaterials().then((data) => {
  //     return data.map((material) => {
  //       return <Card material={material} />;
  //     });
  //   })
  // );
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
        {cards}
      </div>
    </NavCards>
  );
};

export default CardDisplay;
