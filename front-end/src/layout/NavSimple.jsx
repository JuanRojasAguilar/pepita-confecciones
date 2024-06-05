const NavSimple = ({ children }) => {
  return (
    <div
      className="h-screen w-screen bg-primary-bg bg-cover relative"
    >
      <nav className="pl-4 pt-2 text-white text-3xl" >
        <div>
          <a href="/">&#8592; Anterior</a>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default NavSimple;

