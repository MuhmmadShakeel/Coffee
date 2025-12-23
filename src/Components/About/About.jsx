import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

// Initialize AOS
AOS.init({
  duration: 900,
  once: true,
  easing: "ease-out-cubic",
});

const About = () => {
  return (
    <section className="bg-[#562B08] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div data-aos="fade-right" className="flex justify-center md:justify-start relative">
          <div className="absolute -inset-6 bg-[#F4C430]/20 blur-2xl rounded-full"></div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZwLhSq_o9KQFzkhXg325RoDTldIQOszxjg&s"
            alt="About Coffee & Tea"
            className="relative w-[280px] md:w-[360px] xl:w-[420px] drop-shadow-2xl rounded-xl"
          />
        </div>

        {/* TEXT */}
        <div data-aos="fade-left" className="space-y-6">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            About <span className="text-[#F4C430]">Us</span>
          </h1>

          <div className="w-20 h-1 bg-[#F4C430] rounded-full"></div>

          <p className="text-[#EADFD6] text-base md:text-lg leading-relaxed max-w-lg">
            At our café, we believe coffee and tea are more than just beverages—they are an experience.
            From handpicked beans to freshly brewed tea, we craft each cup with passion and precision.
          </p>

          <p className="text-[#EADFD6] text-base md:text-lg leading-relaxed max-w-lg">
            Whether you crave a bold espresso or a soothing cup of tea, our mission is to bring comfort, warmth,
            and a premium café experience to every customer.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-2">
            <button
              className="bg-[#F4C430] text-[#562B08] px-7 py-3 rounded-full font-semibold
                         hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30
                         transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Contact Us
            </button>

            <button
              className="border-2 border-[#F4C430] text-[#F4C430] px-7 py-3 rounded-full font-semibold
                         hover:bg-[#F4C430] hover:text-[#562B08] hover:scale-105
                         transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              View Menu
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
