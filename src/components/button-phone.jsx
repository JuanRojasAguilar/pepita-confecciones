export const ButtonPhone = ({ page }) => {
    return (
      <a href={page.url}>
        <button
          className="text-white font-semibold bg-dark-blue w-full h-12 truncate text-[25px]"
        >
          {page.title}
        </button>
      </a>
    )
  }