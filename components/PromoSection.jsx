import React from 'react';

const PromoSection = () => {
  const nearbyProducts = [
    {
      id: 1,
      name: "Grab Big Discounts!",
      offer: "Min.40% Off",
      image: "https://imgs.search.brave.com/ENDXZB1xNGh97nta02i1PN51AaeunKjjq9XEAW1_ftU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdWx0/c3RvcmUuY29tL2Nk/bi9zaG9wL2ZpbGVz/L0R6VkFpeDh3eTFK/VWtMbU0yaEtNSzRj/US5qcGc_Y3JvcD1y/ZWdpb24mY3JvcF9o/ZWlnaHQ9MzAwMCZj/cm9wX2xlZnQ9NSZj/cm9wX3RvcD0wJmNy/b3Bfd2lkdGg9MjI0/MCZ2PTE3MjYyMDg0/Njgmd2lkdGg9MjI1/MA",
    },
    {
      id: 2,
      name: "Best Deal Ever",
      offer: "From ₹299",
      image: "https://imgs.search.brave.com/wcT5cOYTCDqx8idMOKEkllQ67y4S--54RzcUtIQd0Iw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5sYW5kbWFya3No/b3BzLmluL2Nkbi1j/Z2kvaW1hZ2UvaD03/Mzksdz00OTkscT04/NSxmaXQ9Y292ZXIv/bWF4LW5ldy8xMDAw/MDEzOTYzODUzLUJs/YWNrLUJMQUNLLTEw/MDAwMTM5NjM4NTNf/MDEtMjEwMC5qcGc",
    },
    {
      id: 3,
      name: "Comraded Tee, Round Neck...",
      offer: "Under ₹399",
      image: "https://imgs.search.brave.com/_Je9OJNBnJPgtRbUGcBi3xgsRI25_9nkEYn8x6e_xvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGF2aWV3b3JsZC5j/b20vY2RuL3Nob3Av/ZmlsZXMvQlBHRTE1/NzQyODVNM18yXzQ2/YzE3OWI0LWE2ZDkt/NGVkMy04OWFlLTQ1/OWI5NjFjMDZkYi5q/cGc_dj0xNzU2NTA3/MzIzJndpZHRoPTE1/MDA",
    },
    {
      id: 4,
      name: "Milton, Cello & more",
      offer: "From ₹129",
      image: "https://imgs.search.brave.com/bffup6OR5XM9IjqNyr0-ztBWFAmje8ZO7DfHNVkOP6c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubXludGFzc2V0/cy5jb20vZHByXzIs/cV82MCx3XzIxMCxj/X2xpbWl0LGZsX3By/b2dyZXNzaXZlL2Fz/c2V0cy9pbWFnZXMv/MjAyNi9NQVJDSC8x/Ni9RQWYwazZVbV9h/OTgxMDY2ZTlhNWQ0/YTRkOTFiZWE0ZTE1/YzRlNzJhMy5qcGc",
    }
  ];

  return (
    <div className="w-full flex flex-col gap-6 py-4">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 rounded-xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between p-6 md:px-12 shadow-md">
        {/* Background decorative elements */}
        <div className="absolute top-4 left-10 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-60"></div>
        <div className="absolute bottom-4 right-1/4 text-pink-300 text-3xl">✨</div>
        <div className="absolute top-6 left-1/4 text-pink-300 text-2xl">✨</div>

        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start z-10 space-y-3 relative">
          <div className="bg-yellow-400 p-2 border-2 border-black font-black text-black text-3xl md:text-5xl leading-none text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
            <div className="tracking-tighter">SASA</div>
            <div className="tracking-tighter">LELE</div>
          </div>
          <div className="flex flex-col items-center md:items-start mt-2">
            <div className="bg-white text-black font-bold px-4 py-1 rounded-t-md text-sm shadow-md border border-gray-200">
              Starts on 9<sup className="text-[10px]">TH</sup> MAY
            </div>
            <div className="bg-black text-white font-bold px-4 py-1.5 rounded-b-md text-sm shadow-md border border-black">
              Early Access: 8<sup className="text-[10px]">TH</sup> May
            </div>
          </div>
        </div>

        {/* Middle Content */}
        <div className="flex flex-col items-center justify-center z-10 my-6 md:my-0">
          <h2 className="text-white font-black text-3xl md:text-5xl italic tracking-wide text-center">
            CHEATSHEET
          </h2>
          <h2 className="text-yellow-400 font-black text-4xl md:text-6xl italic tracking-wider text-center drop-shadow-md">
            REVEALED
          </h2>
          <button className="mt-4 bg-white text-blue-700 p-3 rounded-full hover:bg-gray-100 transition shadow-lg flex items-center justify-center w-14 h-14">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Content - 3D Character Placeholder */}
        <div className="hidden md:flex flex-col items-center justify-end h-full z-10 relative">
          <img
            src="https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/boy_with_laptop_image.png"
            alt="Character"
            className="h-48 md:h-56 object-contain"
          />
        </div>
      </div>

      {/* Bottom Section - Popular nearby */}
      <div className="w-full bg-[#1e61f0] rounded-xl p-4 md:p-6 shadow-md relative">
        {/* Peeking character */}
        <div className="absolute -top-6 right-8 md:right-16 w-20 h-20 overflow-hidden hidden md:block">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center border-4 border-yellow-400 transform translate-y-8 shadow-inner">
            <div className="w-12 h-4 bg-black rounded-full flex items-center justify-between px-1 mb-4">
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <h3 className="text-white text-xl md:text-2xl font-bold mb-4 ml-2">Popular nearby</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {nearbyProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow flex flex-col hover:shadow-lg transition cursor-pointer">
              {/* Image Container */}
              <div className="w-full aspect-[4/3] bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              {/* Product Info */}
              <div className="p-3 md:p-4 bg-white flex flex-col justify-between flex-grow">
                <p className="text-sm text-gray-800 line-clamp-1 mb-1">{product.name}</p>
                <p className="font-bold text-black text-sm md:text-base">{product.offer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
