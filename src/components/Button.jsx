export const Button = ({ page }) => {
  console.log(page)
  return (
    <a href={page.url}>
      <button
        className="text-white font-semibold rounded bg-cyan w-80 h-16 text-3xl"
      >
        {page.title}
      </button>
    </a>
  )
}

