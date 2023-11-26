//import { useEffect, useState } from 'react';
import {  useOutletContext } from 'react-router-dom';
//import { getVans } from '../../Api';
//import { requiredAuth } from '../../Utils';


const HostVanDetails = () => {
  //const params = useParams();
  //const [product, setProducts] = useState(null);
  //const product = useLoaderData();
    const {product} = useOutletContext(); 
  //useEffect(() => {
  // fetch(`/api/vans/${params.id}`)
  //.then((res) => res.json())
  //.then((data) => setProducts(data.products));
  //}, [params.id]);
  return (
    <div>
      <div className="gap-5 flex flex-col py-5 px-5 justify-start">
        <h1 className="text-2xl font-sans font-semibold ">
          <span className="font-black font-serif">Name:</span>
          {product.name}
        </h1>
        <h1 className="text-2xl font-sans font-semibold ">
          <span className="font-black font-serif">Category:</span>
          {product.type}
        </h1>
        <p className="text-2xl font-sans font-semibold ">
          <span className="font-black font-serif">Description:</span>
          {product.description}
        </p>
        <h1 className="text-2xl font-sans font-semibold ">
          <span className="font-black font-serif">Visibility:</span>Public
        </h1>
      </div>
    </div>
  )
};

export default HostVanDetails;
