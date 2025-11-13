// components/ClientCardSection.js

// Define the data for the three cards
const cardData = [
  {
    // Use an icon component or SVG here (example uses simple emoji placeholders)
    iconPlaceholder: "./clientcard1.png",
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    iconPlaceholder: "./clientcard2.png",
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    iconPlaceholder: "./clientcard3.png",
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

// Reusable Card Sub-Component (defined within the main component for simplicity)
const Card = ({ iconPlaceholder, title, description }) => (
  <div
    className="bg-white p-6 md:p-10 shadow-lg rounded-lg text-center 
                transform transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:border hover:border-(--green)"
  >
    {/* Icon Area: Circular container with light green background */}
    <div className="flex justify-center mb-4">
      <div
        className="w-16 h-16 bg-green-100 rounded-full flex items-center 
                    justify-center text-3xl text-green-700 mx-auto"
      >
        <img src={iconPlaceholder} alt="ads" />
      </div>
    </div>

    {/* Content Area */}
    <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-base text-gray-500 leading-relaxed">{description}</p>
  </div>
);

// Main Component
export default function ClientCardSection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            iconPlaceholder={card.iconPlaceholder}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
