import Button from '../components/Button';

const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto bg-hero  bg-cover bg-center ">
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full
        max-xl:padding-x pt-28 max-container text-white"
      >
        <h1
          className="mt-10  text-center w-full font-palanquin text-4xl
         max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="font-montserrat  text-[18px] font-medium leading-6">
          Add adventure to your life by joining the #vanlife movement.
          <br /> Rent the perfect van to make your perfect road trip.
        </p>
        <div className=" mt-8">
          <Button
            label="Find Your Van"
            backgroundColor="bg-[#FF8C38]"
            borderColor="border-[#FF8C38]"
            textColor="text-white"
            fullWidth=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
