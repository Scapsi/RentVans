import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Error, Footer, HostLayout, Layout } from './components';
import {
  About,
  Hero,
  Host,
  HostVanDetails,
  HostVanPhotos,
  HostVanPricing,
  HostVans,
  HostVansCard,
  Income,
  NotFound,
  Review,
  SignIn,
  signInAction,
  signInloader,
} from './pages';
import { VanCard, VanCardloader, Vans, vanloader } from './pages/Van';
import { hostVanCardloader, hostVanloader, hostloader } from './pages/host';
import { requiredAuth } from './Utils';
import './constants/index';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Hero />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vanloader}
        errorElement={<Error />}
      />
      <Route
        path="/login"
        element={<SignIn />}
        loader={signInloader}
        action={signInAction}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanCard />}
        loader={VanCardloader}
        errorElement={<Error />}
      />
      <Route path="/host" element={<HostLayout />} errorElement={<Error />}>
        <Route
          index
          element={<Host />}
          loader={hostloader}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            await requiredAuth();
            return null;
          }}
        />
        <Route
          path="review"
          element={<Review />}
          loader={async () => {
            await requiredAuth();
            return null;
          }}
        />
        <Route path="Vans" element={<HostVans />}
         loader={hostVanloader}
         errorElement={<Error />}
          />
        
        <Route
          path="Vans/:id"
          element={<HostVansCard />}
          loader={hostVanCardloader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanDetails />}
            loader={async () => {
              await requiredAuth();
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => {
              await requiredAuth();
              return null;
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => {
              await requiredAuth();
              return null;
            }}
          />
        </Route>
      </Route>
      <Route path="footer" element={<Footer />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
