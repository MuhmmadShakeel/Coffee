import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const menuItems = [
  {
    title: "Espresso",
    description:
      "Rich and bold espresso made from freshly roasted premium beans, perfect for an energy boost.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkKnHzryhejx2EA2XzKt0riq7ZqilBRxBdg&s",
  },
  {
    title: "Cappuccino",
    description:
      "Creamy cappuccino topped with delicate foam, offering a smooth and delightful experience.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmqKWf2Dvb2cnV3PNc7LvaxkLotLwNwJRig&s",
  },
  {
    title: "Green Tea",
    description:
      "Refreshing green tea brewed to perfection, bringing calmness and wellness in every sip.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60",
  },
];

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-2">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-[#562B08] inline-block relative">
          Our Menu
          <span className="absolute left-0 -bottom-2 w-24 h-1 bg-[#F4C430] rounded-full"></span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Explore our finest selection of coffee and teas, crafted for every taste.
        </p>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform group"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover group hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#562B08] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
