import model from "../assets/HeroImage.jpg"

const Hero = () => {
  return (
    <div
      className="w-full h-screen  flex px-20 pt-20 bg-cover"
      style={{ backgroundImage: `url(${model})` }}
    >
      {/*<div
        className="fixed inset-0 bg-black/10  z-40 transition-opacity duration-300"
      ></div>*/}

      <div className="w-full h-full flex items-center justify-start">
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="text-6xl font-bold tracking-wide">VELORA</h1>
          <p className="text-md font-medium sm:tracking-wider tracking-tight text-gray-800">
            Discover the latest trends in fashion and elevate your style with
            our curated collection of clothing, accessories, and more.
          </p>
          <button className="w-40 h-12 bg-amber-300 text-black font-medium rounded-md hover:bg-amber-500 transition-all cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </div> 
  );
}

export default Hero