const Card = () => {
  const Styles = {
    title: `text-3xl text-red-500 sm:text-8xl
    `
  }
    return (
      <div className="flex flex-col w-[80%] bg-indigo-200">
        <div>
          <h1 className={Styles.title}>Carta</h1>
        </div>
        <div className="w-[40%] self-center">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias saepe optio quidem quasi earum maxime quia tempore laudantium. Esse ducimus natus odit veniam minima quam nihil doloribus molestias nobis eum!
            Itaque illo, molestias quidem perspiciatis laboriosam deserunt saepe magnam nulla facere quod accusamus libero beatae ipsum obcaecati dicta vitae aliquid amet quia expedita sit voluptas voluptatum quae aut? Quos, ab!</p>
          <button onClick={() => handleClick()}>Click me</button>
        </div>
      </div>
    )
}

export default Card;