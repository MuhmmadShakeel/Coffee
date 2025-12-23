import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* IMAGE */}
        <div
          className="flex justify-center md:justify-start"
          data-aos="fade-right"
        >
          <img
            src="https://img.freepik.com/premium-photo/young-couple-having-tea-terrace-hotel-room-their-honeymoon_153608-6587.jpg"
            alt="About Coffee"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-6" data-aos="fade-left">
          {/* Heading with underline */}
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#562B08]">
              About Us
            </h2>
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-[#F4C430] rounded-full"></span>
          </div>

          {/* Paragraphs */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We believe coffee is more than just a drink — it’s an experience.
            From carefully sourced beans to expertly brewed cups, we bring you
            the perfect balance of flavor, aroma, and warmth.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Whether you crave a bold espresso or a calming cup of tea, our
            mission is to serve quality, comfort, and craftsmanship in every
            sip.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
