export const Button = ({ page }) => {
  return (
    <a className="flex justify-center hover:translate-x-10 w-3/5 transition-all" href={page.url}>
      <button
        className="text-white font-semibold rounded-md bg-cyan w-full h-12 landscape:sm:h-15 landscape:lg:h-20 landscape:2xl:h-32  portrait:sm:h-20 truncate text-[25px] landscape:2xl:text-[50px] md:text-[35px]"
      >
        {page.title}
      </button>
    </a>
  )
}

