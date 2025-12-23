import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurStory() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const timeline = [
    {
      year: "2018",
      text: `Our journey began with a simple idea: crafting the perfect cup of coffee.
We experimented with premium beans and traditional brewing techniques.
Slowly, we built a small café where coffee lovers could gather and enjoy fresh blends.`,
    },
    {
      year: "2019",
      text: `We introduced our signature teas and specialty drinks.
Customers loved our cozy ambiance and rich flavors.
Our menu expanded with seasonal offerings, and our brand began to be recognized locally.`,
    },
    {
      year: "2020",
      text: `Amid challenges, we focused on perfecting quality and customer experience.
We collaborated with local roasters to source sustainable beans.
Our café became a favorite spot for both coffee and tea enthusiasts.`,
    },
    {
      year: "2021",
      text: `We launched our online ordering system for convenient pick-up and delivery.
New desserts and pastries were added to complement our drinks.
Social media campaigns started attracting coffee lovers from neighboring cities.`,
    },
    {
      year: "2022",
      text: `We opened our second location with a modern design and welcoming space.
Barista training programs ensured the highest quality in every cup.
Customer loyalty programs were introduced, strengthening our community.`,
    },
    {
      year: "2023",
      text: `We celebrated 5 years of serving premium coffee and tea.
Introduced new seasonal drinks and limited edition blends.
Our mission to bring warmth, comfort, and joy to every sip continues stronger than ever.`,
    },
  ];

  return (
    <div className="w-full py-12">
      <h1
        data-aos="fade-down"
        className="text-center text-4xl md:text-5xl font-extrabold text-[#F4C430] mb-12"
      >
        Our Story
      </h1>
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Vertical timeline line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#562B08] w-[3px] h-full rounded-full"></div>

        <div className="space-y-20">
          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex w-full items-start ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  className="relative bg-[#FFF8E1] w-full md:w-[45%] p-7 shadow-lg rounded-xl border-l-4 border-[#F4C430]"
                >
                  <div className="absolute -top-5 bg-[#562B08] text-[#F4C430] shadow-md px-5 py-1 rounded-full font-semibold text-lg">
                    {item.year}
                  </div>

                  <p className="text-[#3E2723] text-[15px] leading-relaxed mt-6 whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
