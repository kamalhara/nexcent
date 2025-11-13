import Image from "next/image";
import Link from "next/link";

const card = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: "/blog1.png",
  },
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: "/blog2.png",
  },
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: "/blog3.png",
  },
];
function CaringSection() {
  return (
    <section className="text-center py-16 px-4">
      <div data-aos-delay="100">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&apos;s more.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-col md:flex-row md:grid-cols-3 gap-8 mt-12">
        {/* Card 1 */}
        {card.map((card) => (
          <div
            key={card.image}
            className="bg-white rounded-lg  py-0   transition-all duration-300 relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="relative">
              <Image
                src={card.image}
                alt="Blog 1"
                width={400}
                height={250}
                className="rounded-t-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 left-1/2 transform  hover:opacity-90 transition-all duration-300 -translate-x-1/2 bg-white bg-opacity-20 px-6 py-2 rounded-lg shadow-md">
                <h3 className="text-gray-500 font-semibold font-mediumtext-sm md:text-base">
                  {card.title}
                </h3>
                <a
                  href="#"
                  className="text-[var(--green)] font-medium flex items-center justify-center gap-1 hover:gap-2 transition-all duration-200"
                >
                  Read more →
                </a>
              </div>
            </div>
            <div className="p-6 mt-8"></div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-3xl md:text-6xl font-semibold text-gray-700 md:mx-30 md:my-15 my-10 mt-20">
          The children are welcome to fringilla free eu.
        </h2>
        <Link
          href="#"
          className="px-4 md:px-8 md:py-4 text-xl py-2 hover:border-2 hover:border-(--green) hover:bg-white hover:text-(--green) bg-(--green) text-white rounded-md transition-all hover:px-9 hover:py-5 duration-300 hover:text-2xl"
        >
          Get Demo
        </Link>
      </div>
    </section>
  );
}

export default CaringSection;
