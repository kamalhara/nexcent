import Image from "next/image";
import ClientCardSection from "./ClientCard";

function Clients() {
  return (
    <div className="text-gray-700 flex flex-col items-center">
      {" "}
      <h2 className="text-2xl md:text-5xl font-semibold ">Our CLients</h2>
      <p className="text-lg my-5 text-gray-500 text-center">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex gap-3  md:gap-60 my-5">
        <Image src="/client1.svg" width={60} height={60} alt="clients" />
        <Image src="/client2.svg" width={60} height={60} alt="clients" />
        <Image src="/client3.svg" width={60} height={60} alt="clients" />
        <Image src="/client4.svg" width={60} height={60} alt="clients" />
        <Image src="/client5.svg" width={60} height={60} alt="clients" />
        <Image src="/client6.svg" width={60} height={60} alt="clients" />
      </div>
      <div className="block md:w-190 my-5 md:my-10 text-align text-center">
        <p className="text-2xl md:text-5xl font-semibold text-gray-700">
          Manage your entire community in a single system
        </p>
        <p className="text-lg my-5 text-gray-500 text-center">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div>
        <ClientCardSection />
      </div>
    </div>
  );
}

export default Clients;
