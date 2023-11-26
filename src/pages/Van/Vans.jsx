import { Link, useLoaderData, useSearchParams } from 'react-router-dom';

//import { useEffect, useState } from 'react';

import { getVans } from '../../Api';
import { requiredAuth } from '../../Utils';

export async function loader() {
  await requiredAuth();
  return getVans(); 
}

const Vans = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  //const [products, setProducts] = useState([]);
  //const [Loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);
  const products = useLoaderData();

  const typeFilter = searchParams.get('type');
  const DisplayVans = typeFilter
    ? products.filter((product) => product.type === typeFilter)
    : products;

  //useEffect(() => {
  //async function loadVans() {
  //setLoading(true);
  //try {
  // const data = await getVans();
  // setProducts(data);
  //} catch (err) {
  // setError(err);
  //} finally {
  // setLoading(false);
  //}
  //}
  //loadVans();
  //}, []);

  function HandleFilterchange(key, value) {
    setsearchParams((prevParams) => {
      if (value == null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  //return //Loading ? (
  // <h1>loading...</h1>
  //) : error ? (
  //<h1>(error.message)</h1>
  //) : (
  return (
    <div className="bg-[#FFF7ED]">
      <h1
        className="mt-2  text-center w-full font-palanquin text-4xl
         max-sm:text-[48px] max-sm:leading-[72px] font-bold"
      >
        Explore our van options
      </h1>

      <div className="flex flex-start justify-around  py-20 px-6">
        <button
          className={`bg-[#FFEAD0]  text-black px-4 py-2 hover:bg-yellow-900  rounded-xl text-xl
          ${typeFilter === 'simple' ? 'bg-orange-900 text-white ' : ''} `}
          onClick={() => HandleFilterchange('type', 'simple')}
        >
          simple
        </button>
        <button
          className={`bg-[#FFEAD0]  text-black px-4 py-2 hover:bg-yellow-900 
           rounded-xl ${
             typeFilter === 'luxury' ? 'bg-blue-900 text-white ' : ''
           } text-xl `}
          onClick={() => HandleFilterchange('type', 'luxury')}
        >
          luxury
        </button>
        <button
          className={`bg-[#FFEAD0]  text-black px-4 py-2 hover:bg-yellow-900  
          rounded-xl ${
            typeFilter === 'rugged' ? 'bg-green-800 text-white ' : ''
          } text-xl `}
          onClick={() => setsearchParams({ type: 'rugged' })}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            className="bg-[#FFEAD0]  text-black px-4 py-2 hover:bg-yellow-900  rounded-xl text-xl "
            onClick={() => setsearchParams({})}
          >
            clear filter
          </button>
        ) : null}
      </div>

      <div className="my-6 ml-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-10">
        {DisplayVans.map((product) => (
          <div
            key={product.id}
            className="flex flex-1 flex-col w-full max-sm:w-full"
          >
            <Link
              to={product.id}
              state={{
                search: `?${searchParams.toString()}`,
                type: typeFilter,
              }}
            >
              <img
                src={product.imgURL}
                alt={product.name}
                className="w-[282px] h-[282px]"
              />
              <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
                {product.name}
                <span className="ml-6"> {product.price}</span>
              </h3>
              <p
                className={`mt-2  w-32 h-[40px] text-center hover:bg-green-800 rounded-xl font-montserrat text-white text-2xl leading-normal bg-orange-900`}
              >
                {product.type}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vans;
