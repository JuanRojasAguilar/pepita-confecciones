const Card = ({material}) => {
  const Styles = {
    cardContainer: `
      flex
      flex-col
      justify-center
      items-center
      w-11/12
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
      sm:text-5xl
      landscape:2xl:text-7xl
      text-red-500
      font-bold
    `,
    downCard: `
      w-[80%] 
      text-sm
      sm:text-lg
      landscape:2xl:text-xl
      text-center
    `,
    buttons: `
      flex
      justify-around 
      w-full
      ps-4
      pe-4
    `,
    button: `
      mt-2
      bg-gray-900 
      rounded-md
      sm:rounded-xl
      w-20
      sm:w-28
      landscape:2xl:w-40
      h-8
      sm:h-12
      landscape:2xl:h-16
      self-center
      text-white 
      sm:text-xl
      landscape:2xl:text-3xl
      shadow-md 
      shadow-stone-900
    `
  }
  
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.cardInner}>
        <div className={Styles.cardFront}>
          <h1 className={Styles.title}>{material.name}</h1>
          <img src={material.image} alt="Image" className="w-1/2" />
          <div className={Styles.downCard}>
            <p>{material.quantity} - {material.proveedor}</p>
          </div>
        </div>
        <div className={Styles.cardBack}>
          <h1 className={Styles.title}>{material.name}</h1>
          <div className={Styles.downCard}>
            <p>${material.price} x {material.quantity}</p>
          </div>
          <div className={Styles.buttons}>
              <button className={Styles.button}>edit</button>
              <button className={Styles.button}>delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
