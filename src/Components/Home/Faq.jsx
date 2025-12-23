import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqItems = [
  {
    question: "What types of coffee do you offer?",
    answer:
      "We offer a variety of coffees including espresso, cappuccino, latte, and specialty brews crafted from premium beans.",
  },
  {
    question: "Do you serve tea as well?",
    answer:
      "Yes! We have a wide selection of teas including green, black, herbal, and chai tea, all freshly brewed.",
  },
  {
    question: "Can I order online for delivery?",
    answer:
      "Absolutely! You can place your order through our website or app and enjoy our beverages at home.",
  },
];

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* FAQ Items */}
        <div className="space-y-8" data-aos="fade-right">
          <h2 className="text-4xl font-extrabold text-[#562B08]">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#F4C430] rounded-full mb-6"></div>

          {faqItems.map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-[#562B08]">
                {item.question}
              </h3>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end" data-aos="fade-left">
          <img
            src="https://baristacourseadelaide.com.au/wp-content/uploads/2023/01/What-are-solar-panels-made-of.jpg.webp"
            alt="FAQ"
            className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Faq;
