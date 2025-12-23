import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCoffee, FaLeaf } from "react-icons/fa";

const SweatMenu = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="bg-[#562B08] text-white w-full min-h-[80vh] flex items-center py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Text Content */}
        <div className="md:w-2/3 space-y-6 text-center md:text-left" data-aos="fade-up">

          {/* Top Small Title */}
          <h4 className="text-[#F4C430] text-xl md:text-2xl font-semibold uppercase tracking-wide">
            Explore Our Menu
          </h4>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Premium <span className="text-[#F4C430]">Coffee & Tea</span> Experience
          </h1>

          {/* Description */}
          <p className="text-[#EADFD6]">
            Step into a world of premium flavors. Our coffees and teas are carefully crafted 
            to provide a luxurious experience with every sip. From classic brews to modern blends, 
            delight your senses and awaken your taste buds.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap gap-6 mt-6 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-[#F4C430]" data-aos="fade-right">
              <FaCoffee size={28} />
              <span className="font-semibold">Premium Coffee</span>
            </div>
            <div className="flex items-center gap-2 text-[#F4C430]" data-aos="fade-right" data-aos-delay="100">
              <FaLeaf size={28} />
              <span className="font-semibold">Organic Teas</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <button className="bg-[#F4C430] text-[#562B08] px-6 py-3 rounded-full font-semibold
                               shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300"
                    data-aos="zoom-in">
              Contact Us
            </button>
            <button className="border-2 border-[#F4C430] text-[#F4C430] px-6 py-3 rounded-full font-semibold
                               hover:bg-[#F4C430] hover:text-[#562B08] hover:scale-105 transition-all duration-300"
                    data-aos="zoom-in" data-aos-delay="100">
              View Menu
            </button>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="hidden md:block md:w-1/3 relative">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F4C430]/20 rounded-full blur-3xl" data-aos="zoom-in"></div>
          <div className="absolute top-28 -left-12 w-40 h-40 bg-[#F4C430]/20 rounded-3xl blur-3xl" data-aos="zoom-in-up"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#F4C430]/10 rounded-full blur-2xl" data-aos="zoom-in" data-aos-delay="200"></div>
        </div>
      </div>
    </section>
  );
};

export default SweatMenu;
