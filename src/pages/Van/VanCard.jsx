import { Link, useLoaderData, useLocation } from 'react-router-dom';
//import { products } from '../../constants';
//import { useEffect, useState } from 'react';
import { Button } from '../../components';
import { getVans } from '../../Api';
import { requiredAuth } from '../../Utils';

export async function loader({ params }) {
  await requiredAuth();
  return getVans(params.id);
}

const VanCard = () => {
  // const params = useParams();
  const location = useLocation();
  const search = location.state?.search || '';
  const type = location.state?.type || 'all';
  //const [product, setProducts] = useState(null);.for use effect to fetch data

  const product = useLoaderData();

  //useEffect(() => {
  // fetch(`/api/vans/${params.id}`)
  // .then((res) => res.json())
  // .then((data) => setProducts(data.products));
  // }, [params.id]);

  return (
    <div>
      <Link
        to={`..${search}`}
        relative="path"
        className="pl-5 hover:text-amber-700  mt-2"
      >
        Back to {type} Vans
      </Link>

      <div className="flex flex-1 ml-20  mb-10 flex-col w-ful max-sm:w-full">
        <img
          src={product.imgURL}
          alt={product.name}
          className="w-[500px] h-[500px]"
        />
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {product.name}
          <span className="ml-6"> {product.price}</span>
        </h3>
        <p className="mt-5  w-32 h-[40px] text-center  rounded-xl font-montserrat text-white text-2xl leading-normal bg-black">
          {product.type}
        </p>
        <p className="font-montserrat text-left mr-20  text-[18px] font-semibold leading-5 mt-6 mb-6">
          {product.description}
        </p>
        <div className="flex-1 pr-20">
          <Button
            borderColor="border-[#FF8C38]"
            backgroundColor="bg-[#FF8C38]"
            textColor="text-white"
            label="Rent this van"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default VanCard;
