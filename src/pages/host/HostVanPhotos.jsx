import { useOutletContext } from 'react-router-dom';

const HostVanPhotos = () => {
  const { product } = useOutletContext();
  return (
    <div>
      {product ? (
        <div className="w-[150px] pl-10 py-4 items-end">
          <img src={product.imgURL} alt={product.name} />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default HostVanPhotos;
