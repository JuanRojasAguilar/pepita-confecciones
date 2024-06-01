const NavCards = ({ children }) => {

  return (
    <div>
      <nav>
        <a href="/">&#8592; Anterior</a>
      </nav>
      {children}
    </div>
  );
};

export default NavCards;

