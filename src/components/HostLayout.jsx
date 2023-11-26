import { NavLink, Outlet } from 'react-router-dom';

const HostLayout = () => {
  const ActiveStyle = {
    fontWeight: 'semibold',
    textDecoration: 'underline',
    color: 'red',
  };

  return (
    <div>
      <nav className="pl-10 list-none hidden sm:flex flex-row gap-8 font-medium ">
        <NavLink
          to="."
          className=" hover:text-red-400 "
          end
          style={({ isActive }) => (isActive ? ActiveStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className=" hover:text-red-400 "
          style={({ isActive }) => (isActive ? ActiveStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className=" hover:text-red-400 "
          style={({ isActive }) => (isActive ? ActiveStyle : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to="review"
          className=" hover:text-red-400 "
          style={({ isActive }) => (isActive ? ActiveStyle : null)}
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
