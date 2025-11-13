function Hero() {
  return (
    <section className=" w-auto md:h-150 h-130 md:mb-5 md:mt-60   mt-30 ">
      <div className="md:mx-60 flex flex-col gap-3 md:w-200">
        <h1 className="md:text-7xl text-5xl font-bold text-gray-700">
          Social media
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-(--green)  ">
          stratergies
        </h1>
        <p className="text-gray-400 font-semibold text-lg md:text-xl ">
          Learn effective social media marketing techniques to attract more
          clients and grow your audience.
        </p>
      </div>
      <button className="text-xl text-white rounded-md bg-(--green) py-2 md:py-4 md:px-7 px-5 my-10 md:mx-60 hover:bg-white hover:border-2 hover:border-(--green) hover:text-(--green) transition-all transformation-300">
        Learn More
      </button>
    </section>
  );
}

export default Hero;
