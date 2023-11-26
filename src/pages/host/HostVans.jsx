import { Link, useLoaderData } from 'react-router-dom';
import { products } from '../../constants';
import {  getVans } from '../../Api';
import { requiredAuth } from '../../Utils';

export async function loader() {
  await requiredAuth();
  return getVans();
}

const HostVans = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1>you listed Vans</h1>
      <div className=" bg-[#100d25] rounded-[20px]">
        <div className=" flex flex-col pb-14 gap-7 sm:px-16 px-6 sm:py-16 py-10 bg-slate-300 rounded-2xl min-h-[300px] ">
          {products.map((product) => (
            <Link to={product.id} key={product.id}>
              <div key={product.id} className="   bg-white  rounded-xl">
                <div className="flex flex-row gap-10 px-5 py-5 ">
                  <img src={product.imgURL} alt={product.name} />
                  <div className="flex flex-col items-center pt-6 gap-5  font-palanquin text-lg  font-semibold">
                    <h1 className="font-black text-green-900 hover:text-yellow-800">
                      {product.name}
                    </h1>
                    <p>{product.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostVans;
