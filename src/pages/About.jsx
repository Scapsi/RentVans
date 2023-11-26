import { Link } from 'react-router-dom';
import { abouthero } from '../assets';
import Button from '../components/Button';

const About = () => {
  return (
    <div>
      <Link to="/about">
        <div className=" relative flex flex-col items-center w-full h-screen">
          <img
            src={abouthero}
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className=" px-8 flex flex-col jus items-start w-full
        max-xl:padding-x pt-8 max-container text-black  z-10 "
        >
          <p
            className="mt-2  text-center w-full font-palanquin text-4xl
         max-sm:text-[48px] max-sm:leading-[72px] font-bold"
          >
            Don’t squeeze in a sedan when you could relax in a van.
          </p>
          <p className="font-montserrat  text-[18px] font-bold leading-6 mt-6 mb-6">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br />
            {''} Our team is full of vanlife enthusiasts who know firsthand the
            magic of touring the world on 4 wheels.
          </p>
        </div>
        <div className="bg-[#FFCC8D] px-10 mx-40 rounded-2xl mb-10 ">
          <h1
            className="mt-6 py-4 text-center w-full font-palanquin text-4xl
         max-sm:text-[48px] max-sm:leading-[72px] font-medium"
          >
            Your destination is waiting. Your van is ready.
          </h1>
          <div className="py-6">
            <Button
              label="EXplore to van"
              backgroundColor="bg-black"
              borderColor="border-black"
              textColor="text-white"
            />
          </div>
        </div>
      </Link>
      
    </div>
  );
};

export default About;
