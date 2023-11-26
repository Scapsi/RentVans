import { NavLink } from 'react-router-dom';

const Header = () => {
  const ActiveStyle = {
    fontWeight: '800',
    color: '#E8AA42',
  };
  function fakeLogOut() {
    localStorage.removeItem('login')
  }
  return (
    <div>
      <header
        className="padding-x py-8  z-10 w-full
        bg-white flex justify-between items-center max-container "
      >
        <NavLink
          to="/"
          className="font-montserrat leading-normal text-lg font-black hover:text-yellow-400"
        >
          #VANLIFE
        </NavLink>
        <nav className="list-none hidden sm:flex flex-row gap-4 font-medium ">
          <NavLink
            to="/login"
            className="hover:text-yellow-400"
            style={({ isActive }) => (isActive ? ActiveStyle : null)}
          >
            SignIn
          </NavLink>
          <NavLink
            to="/host"
            className="hover:text-yellow-400 "
            style={({ isActive }) => (isActive ? ActiveStyle : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-yellow-400"
            style={({ isActive }) => (isActive ? ActiveStyle : null)}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className="hover:text-yellow-400"
            style={({ isActive }) => (isActive ? ActiveStyle : null)}
          >
            Vans
          </NavLink>
          <button onClick={fakeLogOut}>X</button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
