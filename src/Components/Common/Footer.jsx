import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#562B08] text-gray-200 pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-6 mb-6">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-white">CoffeeHouse</h1>
            <p className="mt-2 text-white max-w-sm">
              Premium coffee and tea selections, delivered with care and passion for every sip.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Menu</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-yellow-500 transition">Espresso</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Cappuccino</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Green Tea</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Latte</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-yellow-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Press</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-yellow-500 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-white">
              <li>📍 123 Coffee Street, New York, NY</li>
              <li>📞 +1 234 567 890</li>
              <li>✉️ support@coffeehouse.com</li>
              <li>🌐 www.coffeehouse.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-white text-sm">
          &copy; {new Date().getFullYear()} CoffeeHouse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
