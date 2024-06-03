import NavCards from "../layout/NavCards";
import Card from "../components/Cards";

const CardDisplay = () => {
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
      gap-2
    `
  }

  return (
    <NavCards>
      <div id="cardContainer" className={Styles.cardGrid}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </NavCards>
  )
}

export default CardDisplay;

