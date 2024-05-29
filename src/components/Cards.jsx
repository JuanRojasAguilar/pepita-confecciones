const Card = () => {
  const Styles = {
    imageContainer: `
      flex
      flex-col
      w-80
      bg-indigo-200
    `,
    title: `
      text-3xl 
      text-red-500
      font-bold
    `,
    button: `
      bg-red-200 
      rounded
      w-20
      h-8
    `
  }
    return (
      <div className={Styles.imageContainer}>
        <div className="self-center">
          <h1 className={Styles.title}>Carta</h1>
          <img src="" alt="Image" />
        </div>
        <div className="w-[80%] self-center">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas ab.</p>
          <button className={Styles.button}>Click me</button>
        </div>
      </div>
    )
}

export default Card;