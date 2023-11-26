import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Error:{error.message}</h1>
      <p>
        {error.statusText}-{error.status}
      </p>
    </div>
  );
};

export default Error;
