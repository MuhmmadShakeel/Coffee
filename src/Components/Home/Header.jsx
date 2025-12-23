import React from "react";
import cup from "../../assets/images/Cup.png";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 900,
  once: true,
  easing: "ease-out-cubic",
});

const Header = () => {
  return (
    <section className="bg-[#562B08] text-white h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div data-aos="fade-right" className="space-y-6">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            Premium <span className="text-[#F4C430]">Coffee</span>
          </h1>

          <p className="text-[#EADFD6] text-base md:text-lg leading-relaxed max-w-lg">
            Experience handcrafted coffee and refreshing tea made from premium
            ingredients — designed to energize your moments and relax your soul.
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

        {/* IMAGE */}
        <div
          className="flex justify-center md:justify-end relative"
          data-aos="fade-left"
        >
          <div className="absolute -inset-6 bg-[#F4C430]/20 blur-2xl rounded-full"></div>

          <img
            src={cup}
            alt="Coffee Cup"
            className="relative w-[280px] md:w-[360px] xl:w-[420px] drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Header;
