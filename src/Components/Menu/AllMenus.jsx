import React, { useState } from 'react'

// Sample menu data
const menuItems = [
  {
    id: 1,
    title: 'Cappuccino',
    desc: 'Rich espresso with frothed milk and cocoa powder.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjJlXZSXNjE2ZRdcw5D73neOVYFp4AqMk2Q&s'
  },
  {
    id: 2,
    title: 'Latte',
    desc: 'Smooth espresso mixed with steamed milk and foam.',
    img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    title: 'Black Tea',
    desc: 'Classic black tea brewed to perfection.',
    img: 'https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    title: 'Green Tea',
    desc: 'Refreshing green tea with natural antioxidants.',
    img: 'https://ik.imagekit.io/apede/apedeproducts_com/ceylon-tea.jpg'
  },
  {
    id: 5,
    title: 'Mocha',
    desc: 'Chocolate and espresso blended with steamed milk.',
    img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 6,
    title: 'Chai Latte',
    desc: 'Spiced tea blended with steamed milk and honey.',
    img: 'https://www.wollenhaupt.com//fileadmin/user_upload/images/Rezepte/San_Chai_Latte-min.jpg'
  },
  {
    id: 7,
    title: 'Espresso',
    desc: 'Strong and bold coffee served in a small cup.',
    img: 'https://paxandbeneficia.com/cdn/shop/articles/espresso.webp?v=1694780744'
  },
  {
    id: 8,
    title: 'Iced Coffee',
    desc: 'Cold brewed coffee served with ice and milk.',
    img: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/05/Iced-Mocha-db3c51a.jpg?quality=90&resize=708,643'
  }
]

const AllMenus = () => {
  const [search, setSearch] = useState('')

  const filteredMenus = menuItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="bg-[#FDF6EE] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#562B08] mb-2">
            Our Menu
          </h1>
          <p className="text-[#814C28] max-w-2xl mx-auto">
            Explore our premium selection of coffee and tea crafted for your delight.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search Menu..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-3 rounded-l-full border border-[#562B08] focus:outline-none w-72 md:w-96"
          />
          <button className="bg-[#F4C430] text-[#562B08] px-6 py-3 rounded-r-full font-semibold hover:scale-105 transition-all">
            Search
          </button>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredMenus.map(item => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden hover:bg-[#562B08] hover:text-white transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full md:w-1/2 h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-center md:w-1/2">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700 hover:text-white transition-all duration-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllMenus
