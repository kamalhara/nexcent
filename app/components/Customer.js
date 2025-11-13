import Image from "next/image";
import Link from "next/link";

function Customer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between  my-10 gap-10 bg-gray-100 px-10 py-5 md:pr-20 ">
      {/* Image Section */}
      <div className=" md:w-1/2 flex justify-center">
        <Image
          src="/tesla.png"
          alt="about"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-gray-600 text-sm md:text-base mb-6 font-semibold">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="text-(--green) font-bold text-xl mb-10">Tim Smith</p>
        <p className="text-gray-500 text-sm md:text-base mb-6">
          British Dragon Boat Racing Association
        </p>
        <div className="flex gap-3 flex-col md:flex-row md:gap-10 my-5 items-center">
          <Image src="/client1.svg" width={40} height={40} alt="clients" />
          <Image src="/client2.svg" width={40} height={40} alt="clients" />
          <Image src="/client3.svg" width={40} height={40} alt="clients" />
          <Image src="/client4.svg" width={40} height={40} alt="clients" />
          <Image src="/client5.svg" width={40} height={40} alt="clients" />
          <Image src="/client6.svg" width={40} height={40} alt="clients" />
          <Link
            href="#"
            className="text-(--green) hover:text-green-800 font-bold"
          >
            {" "}
            Meet all customers<span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Customer;
