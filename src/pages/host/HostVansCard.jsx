//import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getHostVans, getVans } from '../../Api';
import { requiredAuth } from '../../Utils';

export async function loader({ params }) {
  await requiredAuth();
  return getVans(params.id);
}

const HostVansCard = () => {
  //const { id } = useParams();
  //const [product, setProducts] = useState(null);

  const product = useLoaderData();

  // useEffect(() => {
  //fetch(`/api/vans/${id}`)
  //.then((res) => res.json())
  //.then((data) => setProducts(data.products));
  //}, [id]);
  const ActiveStyle = {
    fontWeight: 'semibold',
    textDecoration: 'underline',
    color: 'red',
  };

  return (
    <div className=" flex flex-col pb-14 gap-7 sm:px-16 px-6 sm:py-16 py-10 bg-slate-300 rounded-2xl min-h-[300px]">
      <NavLink
        to=".."
        relative="path"
        className="pl-5 hover:text-amber-700  mt-2"
      >
        Back to vans
      </NavLink>

      <div>
        <div className="bg-white flex-col rounded-xl">
          <div className="flex flex-row gap-10 px-5 py-5 max-sm:flex-col ">
            <img src={product.imgURL} alt={product.name} />
            <div className="flex flex-col items-start pt-6 gap-4 font-palanquin text-lg  font-semibold">
              <p className="bg-black text-white-400 px-4 py-2 hover:bg-yellow-900  rounded-xl text-xl ">
                {product.type}
              </p>
              <p className="text-2xl font-sans font-semibold ">
                {product.name}
              </p>
              <p className="text-xl font-sans font-semibold">
                {product.price}/day
              </p>
            </div>
          </div>
          <nav className="gap-10 flex flex-row py-5 px-5 items-center justify-start">
            <NavLink
              to="."
              className="font-black font-serif text-xl hover:text-blue-950"
              style={({ isActive }) => (isActive ? ActiveStyle : null)}
              end
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className="font-black font-serif text-xl hover:text-blue-950"
              style={({ isActive }) => (isActive ? ActiveStyle : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className="font-black font-serif text-xl hover:text-blue-950"
              style={({ isActive }) => (isActive ? ActiveStyle : null)}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ product }} />
        </div>
      </div>
    </div>
  );
};

export default HostVansCard;
