import React from 'react';

const AdBanner = () => {
  return (
    <div className="w-full flex flex-col items-start pt-4 pb-8">
      <h3 className="text-lg md:text-xl font-bold mb-4 ml-1">Brands In Spotlight</h3>
      <div className="w-full bg-[#111111] rounded-2xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 shadow-lg md:min-h-[280px]">
        {/* Background Texture/Grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0"></div>
        
        {/* Ad Badge */}
        <div className="absolute top-4 right-4 bg-white/20 text-white/90 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm z-20 tracking-wider">
          AD
        </div>

        {/* Content */}
        <div className="flex flex-col items-start z-10 w-full md:w-1/2 mb-8 md:mb-0">
           {/* TRIGGR Logo Text */}
           <h2 className="text-[#ff5500] text-4xl md:text-5xl font-black italic tracking-widest mb-6 drop-shadow-md">
             TRIGGR
           </h2>
           <div className="flex flex-col gap-2">
             <p className="text-white text-xl md:text-[26px] font-normal tracking-wide mb-1 flex items-center">
               Sliding Case <span className="mx-3 text-gray-500 font-light text-3xl">|</span> Rubber Grip
             </p>
             <h3 className="text-white text-3xl md:text-[42px] font-bold tracking-tight">
               Spl. Price ₹699
             </h3>
           </div>
        </div>

        {/* Image / Podium */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center md:justify-end z-10 h-[200px] md:h-[250px]">
           {/* Futuristic Podium */}
           <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#0a0a0a] shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.8)] border border-gray-700/50">
             <div className="w-[85%] h-[85%] rounded-full border border-yellow-500/30 border-dashed flex items-center justify-center">
                <div className="w-[70%] h-[70%] rounded-full border border-gray-600/50"></div>
             </div>
             
             {/* Small decorative circuit dots */}
             <div className="absolute top-1/4 left-4 w-2 h-2 bg-yellow-500/50 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
             <div className="absolute bottom-1/4 right-8 w-1.5 h-1.5 bg-[#ff5500]/50 rounded-full shadow-[0_0_10px_rgba(255,85,0,0.8)]"></div>
             <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-blue-500/50 rounded-full"></div>
           </div>
           
           {/* Placeholder for the actual Trigger Earbuds */}
           {/* Since we don't have the exact image, we use an external stylized image that fits the vibe or a high-quality unspash gadget */}
           <img 
             src="https://raw.githubusercontent.com/avinashdm/gs-images/main/quickcart/e3zjaupyumdkladmytke.webp" 
             alt="Trigger Earbuds"
             className="relative z-20 w-40 md:w-56 object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] -rotate-12 transform hover:scale-105 transition duration-500"
             style={{ filter: "drop-shadow(0px 20px 20px rgba(0,0,0,0.9)) saturate(1.5)" }}
           />
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
