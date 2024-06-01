import NavCards from "../layout/NavCards";
import Card from "../components/Cards";

const CardDisplay = () => {
  const Styles = {
    cardGrid: `
      flex
      flex-wrap
      gap-y-10
      justify-around
    `
  }

  return (
    <NavCards>
      <div className={Styles.cardGrid}>
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

