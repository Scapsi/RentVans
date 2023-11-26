import { Await, Link, defer, useLoaderData } from 'react-router-dom';

import { products } from '../../constants';
import { Suspense } from 'react';
import { requiredAuth } from '../../Utils';
import { getVans } from '../../Api';
import { BsStarFill } from 'react-icons/bs';

export async function loader({ request }) {
  await requiredAuth(request);
  return defer({ products: getVans() });
}

export default function Host() {
  const loaderData = useLoaderData();

  function renderVanElements(products) {
    const hostVansEls = products.map((product) => (
      <div className="host-van-single" key={product.id}>
        <img src={product.imgURL} alt={`Photo of ${product.name}`} />
        <div className="host-van-info">
          <h3>{product.name}</h3>
          <p>{product.price}/day</p>
        </div>
        <Link to={`Vans/${product.id}`}>View</Link>
      </div>
    ));

    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="review">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={loaderData.products}>{renderVanElements}</Await>
        </Suspense>
      </section>
    </>
  );
}
