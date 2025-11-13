import Image from "next/image";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:mx-20 mx-5 my-10 gap-10">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <Image
          src="/about.png"
          alt="about"
          width={400}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-4">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="bg-(--green) hover:bg-green-100 hover:text-(--green) hover:px-8 transition-all duration-300 text-white font-medium py-2 px-6 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;
