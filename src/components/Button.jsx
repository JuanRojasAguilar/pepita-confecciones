export const Button = ({ page }) => {
  console.log(page)
  return (
    <a href={page.url}>
      <button
        className="text-white font-semibold rounded bg-cyan w-48 h-12 text-[24px]"
      >
        {page.title}
      </button>
    </a>
  )
}