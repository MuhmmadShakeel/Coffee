import React from 'react'
import {
  FaParking,
  FaCamera,
  FaMapMarkedAlt,
  FaUtensils,
  FaShoppingBag,
  FaWifi,
  FaFutbol,
  FaHotel
} from 'react-icons/fa'

const MenuFeature = () => {
  const leftServices = [
    {
      icon: FaParking,
      title: 'Comfortable Seating',
      desc: 'Relax in our cozy seating areas with warm ambiance.',
      position: 'lg:mr-[-140px]',
      aos: 'fade-right'
    },
    {
      icon: FaCamera,
      title: 'Photo Moments',
      desc: 'Capture your coffee and tea experiences with friends.',
      position: 'lg:mr-[-50px]',
      aos: 'fade-right'
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Tea & Coffee Guide',
      desc: 'Our baristas guide you to pick the perfect cup.',
      position: 'lg:mr-[-50px]',
      aos: 'fade-right'
    },
    {
      icon: FaUtensils,
      title: 'Fresh Beverages',
      desc: 'Premium coffee and freshly brewed tea served daily.',
      position: 'lg:mr-[-140px]',
      aos: 'fade-right'
    }
  ]

  const rightServices = [
    {
      icon: FaShoppingBag,
      title: 'Café Treats',
      desc: 'Delicious pastries and snacks to pair with your drink.',
      position: 'lg:ml-[-140px]',
      aos: 'fade-left'
    },
    {
      icon: FaWifi,
      title: 'Free WiFi',
      desc: 'Stay connected while enjoying your favorite beverages.',
      position: 'lg:ml-[-50px]',
      aos: 'fade-left'
    },
    {
      icon: FaFutbol,
      title: 'Cozy Corners',
      desc: 'Perfect spots to relax, read, or work.',
      position: 'lg:ml-[-50px]',
      aos: 'fade-left'
    },
    {
      icon: FaHotel,
      title: 'Takeaway Options',
      desc: 'Grab your favorite coffee or tea to go.',
      position: 'lg:ml-[-140px]',
      aos: 'fade-left'
    }
  ]

  const ServiceCard = ({ service, side }) => (
    <div
      data-aos={service.aos}
      data-aos-duration='1000'
      className={`
    w-full sm:w-full lg:w-[400px] group bg-white relative rounded-lg lg:rounded-xl p-5 shadow-md border border-gray-100
    transition-all duration-500 ease-in-out transform hover:-translate-y-2
    ${service.position} ${side === 'left' ? 'lg:rounded-r-full' : 'lg:rounded-l-full'}
    hover:bg-gradient-to-r hover:from-[#562B08] hover:via-[#814C28] hover:to-[#F4C430] 
    hover:shadow-[inset_0_0_25px_rgba(253,197,0,0.4)]
  `}
    >
      <div className='flex items-center space-x-4 mb-2'>
        <div
          className='
        bg-[#F3E2C3] p-3 rounded-full transition-all duration-500 ease-in-out 
        group-hover:bg-gradient-to-r group-hover:from-[#562B08] group-hover:to-[#F4C430]
        group-hover:shadow-[0_0_20px_rgba(253,197,0,0.6)]
      '
        >
          <service.icon className='text-[#814C28] text-xl transition-all duration-500 ease-in-out group-hover:text-white' />
        </div>

        <h2
          className='
        text-lg font-semibold text-[#562B08] transition-all duration-500 ease-in-out 
        group-hover:text-[#F4C430]
      '
        >
          {service.title}
        </h2>
      </div>

      <p
        className={`text-gray-600 transition-all duration-500 ease-in-out group-hover:text-white
      ${side === 'right' ? 'lg:pl-10 sm:pl-0' : 'lg:pr-10 sm:pr-0'}
    `}
      >
        {service.desc}
      </p>
    </div>
  )

  return (
    <div className='w-full bg-[#FDF6EE] py-7 px-6 md:px-12 lg:px-20 overflow-hidden '>
      {/* Heading */}
      <div className='max-w-7xl mx-auto mb-12 text-center lg:text-left'>
        <span
          className='inline-block text-lg font-semibold tracking-wider 
  text-[#814C28] uppercase bg-[#F3E2C3] px-4 py-2 rounded-full mb-3 shadow-inner'
        >
          Menu Features
        </span>
        <h1 className='text-4xl font-extrabold text-[#562B08] mb-4'>
          Explore Our Coffee & Tea Facilities
        </h1>
        <p className='text-[#814C28] max-w-2xl mx-auto lg:mx-0'>
          Enjoy a premium selection of hand-crafted coffees and teas along with cozy corners, fresh pastries, and a warm ambiance designed to make your café experience unforgettable.
        </p>
      </div>

      {/* Main Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-7xl mx-auto '>
        {/* Left column */}
        <div className='lg:col-span-4 md:grid-cols-2 flex flex-col gap-5 items-center lg:items-end'>
          {leftServices.map((s, i) => (
            <ServiceCard key={i} service={s} side='left' />
          ))}
        </div>

        {/* Center Image */}
        <div
          data-aos='zoom-in'
          data-aos-duration='1200'
          className='lg:col-span-4 flex justify-center'
        >
          <div className='relative w-72 h-72 sm:w-72 sm:h-72 md:w-72 md:h-72 lg:w-80 lg:h-80 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_35px_rgba(88,43,8,0.5)] rounded-full'>
            <img
              src="https://domf5oio6qrcr.cloudfront.net/medialibrary/8468/Tea.jpg"
              alt='service'
              className='w-full h-full rounded-full object-cover shadow-xl border-8 border-white'
            />
          </div>
        </div>

        {/* Right column */}
        <div className='lg:col-span-4 flex flex-col gap-5 items-center lg:items-start'>
          {rightServices.map((s, i) => (
            <ServiceCard key={i} service={s} side='right' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuFeature
