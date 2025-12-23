import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full  min-h-screen">

      {/* Header */}
      <div className="w-full py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-[#F4C430]">
          Contact Us
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
          We're here to help. If you have questions, need support, or want
          to contribute, reach out anytime.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <div className="bg-[#3E1F0D] p-8 shadow-lg rounded-2xl border border-[#F4C430]/20">
          <h2 className="text-2xl font-semibold text-[#F4C430] mb-6">Send Us a Message</h2>

          <form className="space-y-5">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border border-[#F4C430]/40 rounded-xl focus:ring-2 focus:ring-[#F4C430] outline-none bg-[#562B08] text-[#EADFD6]"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border border-[#F4C430]/40 rounded-xl focus:ring-2 focus:ring-[#F4C430] outline-none bg-[#562B08] text-[#EADFD6]"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-3 border border-[#F4C430]/40 rounded-xl focus:ring-2 focus:ring-[#F4C430] outline-none bg-[#562B08] text-[#EADFD6]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 cursor-pointer bg-[#F4C430] text-[#562B08] font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Emergency Support */}
          <div className="bg-[#F4C430] text-[#562B08] p-8 shadow-lg rounded-2xl border border-[#562B08]/40">
            <h2 className="text-2xl font-semibold mb-4">Emergency Support</h2>
            <p className="mb-4">
              For urgent blood requirements or medical emergencies, contact us immediately.
            </p>

            <div className="space-y-3">
              <p className="text-lg"><span className="font-semibold">Emergency Hotline:</span> +92 300 1234567</p>
              <p className="text-lg"><span className="font-semibold">Ambulance:</span> 115</p>
              <p className="text-lg"><span className="font-semibold">Blood Bank Support:</span> +92 311 9988776</p>
            </div>
          </div>

          {/* Office Info */}
          <div className="bg-[#3E1F0D] text-[#EADFD6] p-8 shadow-lg rounded-2xl border border-[#F4C430]/20">
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <p>
              320-B Model Town, Bahawalpur, Pakistan <br />
              Monday – Saturday: 9:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full px-6 pb-16">
        <h2 className="text-2xl font-bold text-center text-[#F4C430] mb-6">
          Find Us on the Map
        </h2>

        <div className="w-full max-w-5xl mx-auto">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.5893465787665!2d71.6752!3d29.3956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393d3dc348db0a4f%3A0x1721a8cf85bd0f76!2sBahawalpur%20City!5e0!3m2!1sen!2s!4v1705500000000"
            className="w-full h-72 rounded-2xl shadow-lg border border-[#F4C430]/40"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
