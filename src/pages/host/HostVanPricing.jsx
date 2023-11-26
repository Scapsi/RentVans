import { useOutletContext } from "react-router-dom";


const HostVanPricing = () => {
  const { product } = useOutletContext();
  return (
    <div>
      {product ? (
        <div>
          <h1>{product.price}</h1>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default HostVanPricing;
