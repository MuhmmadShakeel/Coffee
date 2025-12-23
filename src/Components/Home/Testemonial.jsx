import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import modules from swiper/modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    role: "Coffee Lover",
    message:
      "The coffee here is simply amazing! Every sip is like heaven in a cup.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Tea Enthusiast",
    message:
      "Absolutely love the variety of teas. The ambiance and service are perfect!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Regular Customer",
    message:
      "High quality coffee and friendly staff. I visit every week without fail.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-[#562B08]">
        What Our Clients Say
      </h2>
      <div className="flex justify-center mb-12">
        <div className="w-20 h-1 bg-[#F4C430] rounded-full"></div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-[#562B08] text-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center
                            overflow-hidden group">
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#562B08] opacity-0 group-hover:opacity-20 transition-all duration-500"></div>

              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 rounded-full mb-4 object-cover shadow-md relative z-10"
              />
              <h3 className="text-xl font-semibold z-10">{item.name}</h3>
              <span className="text-sm text-white z-10">{item.role}</span>
              <p className="text-white mt-4 z-10">{item.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
