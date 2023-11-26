import { Link } from 'react-router-dom';
import { Button } from '../components';

const NotFound = () => {
  return (
    <div>
      <h1>Sorry this page is not found!</h1>
      <Link to="/">
        <Button
          borderColor="border-[#FF8C38]"
          backgroundColor="bg-[#FF8C38]"
          textColor="text-white"
          label="Return back home"
          fullWidth
        />
      </Link>
    </div>
  );
};

export default NotFound;
