const Card = () => {
  const Styles = {
    cardContainer: `
      flex
      flex-col
      justify-center
      items-center
      w-4/5
      aspect-[30/31]
      rounded-2xl
      flip-card
      gap-[50px]
    `,
    cardInner: `
      w-full
      h-full
      flip-card-inner
    `,
    cardFront: `
      flex
      flex-col
      justify-between
      p-4
      bg-indigo-200
      items-center
      rounded-2xl
      flip-card-front
    `,
    cardBack: `
      flex
      flex-col
      justify-between
      p-4
      bg-blue-200
      items-center
      rounded-2xl
      flip-card-back
    `,
    title: `
      text-3xl 
      text-red-500
      font-bold
    `,
    downCard: `
      w-[80%] 
      text-sm
      text-center
    `,
    buttons: `
      flex
      justify-around 
    `,
    button: `
      mt-2
      bg-red-200 
      rounded-md
      w-20
      h-8
      self-center
    `
  }
  
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardInner}>
        <div className={Styles.cardFront}>
          <h1 className={Styles.title}>Carta</h1>
          <img src="" alt="Image" />
          <div className={Styles.downCard}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas ab.</p>
            <div className={Styles.buttons}>
              <button className={Styles.button}>edit</button>
              <button className={Styles.button}>delete</button>
            </div>
          </div>
        </div>
        <div className={Styles.cardBack}>
          <h1 className={Styles.title}>Reverso</h1>
          <p>Este es el contenido del reverso de la carta.</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
