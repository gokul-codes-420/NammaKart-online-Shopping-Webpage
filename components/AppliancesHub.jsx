import React from "react";
import Image from "next/image";

const applianceCategories = [
  { name: "Televisions", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=200" },
  { name: "Inverters", img: "https://images.unsplash.com/photo-1591405351990-4726e33df58b?q=80&w=200" },
  { name: "ACs", img: "https://images.unsplash.com/photo-1620986790999-52e185854619?q=80&w=200" },
  { name: "Cooling", img: "https://images.unsplash.com/photo-1588775034448-9642d992e591?q=80&w=200" },
  { name: "Fridges", img: "https://images.unsplash.com/photo-1571175432230-01c288a39994?q=80&w=200" },
  { name: "Kitchen", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" },
  { name: "Laundry", img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=200" },
  { name: "Stabilizers", img: "https://images.unsplash.com/photo-1591405351990-4726e33df58b?q=80&w=200" },
  { name: "Home", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200" },
  { name: "Freezer", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200" },
  { name: "Micro...", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" }
];

const earlyBirdDeals = [
  { name: "acerpure 65\"", price: "Just ₹37,249*", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=300" },
  { name: "Mitsubishi 1.5 Ton", price: "Just ₹44,200*", img: "https://images.unsplash.com/photo-1620986790999-52e185854619?q=80&w=300" },
  { name: "Samsung 236L", price: "Just ₹27,240*", img: "https://images.unsplash.com/photo-1571175432230-01c288a39994?q=80&w=300" },
  { name: "IFB 8 Kg", price: "Just ₹29,499*", img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=300" },
  { name: "Juicer mixer", price: "Just ₹1,775", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=300" },
  { name: "Padesta...", price: "Just ₹3,599*", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=300" }
];

const AppliancesHub = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-4 mb-6">
      
      {/* Top Banners Carousel-like row */}
      <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
         {/* TV & Appliances 80% */}
         <div className="min-w-[300px] md:min-w-[450px] aspect-[2.2/1] rounded-[16px] overflow-hidden snap-start relative shadow-md cursor-pointer group bg-gradient-to-r from-[#0c31a3] to-[#2b59ff]">
            <div className="absolute right-0 top-0 w-[55%] h-full flex items-center justify-end p-4">
                <div className="w-[80%] h-[80%] relative z-10 group-hover:scale-105 transition-transform duration-700">
                    <Image src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400" alt="Appliance" fill className="object-contain drop-shadow-2xl" />
                </div>
            </div>
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-[45%]">
               <div className="bg-[#ffeb3b] text-gray-900 font-black text-[12px] md:text-[14px] px-2 py-0.5 w-max mb-2 rounded shadow-sm">SASA LELE</div>
               <h3 className="text-white text-[18px] md:text-[24px] font-black leading-tight">TVs & Appliances</h3>
               <h2 className="text-[#fff04d] text-[24px] md:text-[32px] font-black leading-none mt-1">UP TO 80% OFF</h2>
               <button className="bg-white text-gray-900 text-[12px] md:text-[14px] font-bold px-4 py-1.5 mt-4 rounded-full shadow-md group-hover:scale-105 transition-transform">Wishlist now</button>
            </div>
         </div>

         {/* Cooling deals */}
         <div className="min-w-[300px] md:min-w-[450px] aspect-[2.2/1] rounded-[16px] overflow-hidden snap-start relative shadow-md cursor-pointer group bg-gradient-to-r from-[#1565c0] to-[#1e88e5]">
            <div className="absolute right-0 top-0 w-[55%] h-full flex items-center justify-end p-4">
                <div className="w-[80%] h-[80%] relative z-10 group-hover:scale-105 transition-transform duration-700">
                    <Image src="https://images.unsplash.com/photo-1620986790999-52e185854619?q=80&w=400" alt="AC" fill className="object-contain drop-shadow-2xl" />
                </div>
            </div>
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-[45%]">
               <h3 className="text-white text-[18px] md:text-[24px] font-black leading-tight">Cooling deals on<br/>Smart wifi ACs</h3>
               <h2 className="text-white text-[20px] md:text-[28px] font-black mt-2">From ₹25,490*</h2>
               <div className="bg-white/20 backdrop-blur-sm text-white text-[10px] md:text-[12px] font-bold px-2 py-0.5 mt-2 w-max rounded">FREE Installation</div>
            </div>
         </div>

         {/* Air Fryers */}
         <div className="min-w-[200px] md:min-w-[300px] aspect-[1.5/1] rounded-[16px] overflow-hidden snap-start relative shadow-md cursor-pointer group bg-[#e0e0e0] flex items-center p-6">
            <div className="flex flex-col flex-1">
               <h4 className="text-gray-900 font-black text-[18px] md:text-[24px]">Shark | NINJA</h4>
               <p className="text-gray-700 text-[14px] md:text-[16px] font-bold mt-4">Air Fryers & more</p>
               <h3 className="text-gray-900 text-[18px] md:text-[22px] font-black">From ₹5,299</h3>
               <p className="text-gray-400 text-[10px] md:text-[12px] mt-4 leading-tight">America's No.1 home and kitchen<br/>brand now in India</p>
            </div>
         </div>
      </div>

      {/* SBI Card Banner */}
      <div className="w-full bg-white rounded-[16px] border border-gray-100 shadow-md p-4 md:p-6 flex items-center justify-between cursor-pointer group">
         <div className="flex items-center gap-6">
            <div className="w-[150px] md:w-[220px] h-[40px] md:h-[60px] relative">
               <Image src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=300" alt="SBI Card" fill className="object-contain" />
            </div>
            <div className="w-[1px] h-12 bg-gray-200"></div>
            <div>
               <h2 className="text-gray-900 text-[18px] md:text-[28px] font-black">10% Instant Discount*</h2>
               <p className="text-gray-500 text-[14px] md:text-[20px] font-medium">with SBI Credit Card (also valid on EMI Trxns.)</p>
            </div>
         </div>
         <div className="text-gray-400 text-[10px] md:text-[12px] rotate-90 whitespace-nowrap">*T&C Apply</div>
      </div>

      {/* Powered by */}
      <div className="w-full text-center py-4">
         <h3 className="text-gray-800 text-[20px] md:text-[28px] font-bold mb-6">Powered by</h3>
         <div className="flex justify-center gap-4 md:gap-8 px-4">
            <div className="w-1/2 max-w-[350px] bg-[#fff04d] rounded-l-[12px] rounded-r-[60px] p-4 md:p-8 flex items-center justify-between shadow-md cursor-pointer hover:scale-105 transition-transform group">
               <div>
                  <h4 className="text-gray-900 font-black text-[20px] md:text-[32px] leading-tight">SAMSUNG<br/>Galaxy</h4>
               </div>
               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d="m9 18 6-6-6-6"/></svg>
               </div>
            </div>
            <div className="w-1/2 max-w-[350px] bg-[#fff04d] rounded-r-[12px] rounded-l-[60px] p-4 md:p-8 flex items-center justify-between shadow-md cursor-pointer hover:scale-105 transition-transform group">
               <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="rotate-180"><path d="m9 18 6-6-6-6"/></svg>
               </div>
               <div className="text-right">
                  <h4 className="text-gray-900 font-black text-[20px] md:text-[32px] leading-tight">intel CORE</h4>
                  <div className="bg-gray-900 text-white text-[8px] md:text-[12px] px-2 py-0.5 ml-auto w-max font-bold mt-1">ULTRA</div>
               </div>
            </div>
         </div>
      </div>

      {/* Category Icons */}
      <div className="w-full flex flex-col gap-6 py-4">
         <div className="flex overflow-x-auto no-scrollbar gap-4 md:gap-8 px-2">
            {applianceCategories.map((cat, i) => (
               <div key={`cat-${i}`} className="flex flex-col items-center cursor-pointer group min-w-[70px] md:min-w-[100px]">
                  <div className="w-[60px] h-[60px] md:w-[85px] md:h-[85px] bg-[#e3f2fd] rounded-[16px] md:rounded-[24px] p-3 flex items-center justify-center relative overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform border border-blue-50">
                     <Image src={cat.img} alt={cat.name} fill className="object-contain p-2 mix-blend-multiply" />
                  </div>
                  <span className="text-[11px] md:text-[14px] font-bold text-gray-800 tracking-tight text-center leading-tight mt-2">
                     {cat.name}
                  </span>
               </div>
            ))}
         </div>
      </div>

      {/* Early Bird deals Banner */}
      <div className="w-full bg-[#f44336] rounded-[24px] p-4 md:p-6 shadow-lg relative overflow-hidden group">
         <div className="absolute top-4 right-8 w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-[#ffcc00] rounded-full flex items-center justify-center opacity-90 rotate-12 z-0 scale-150 translate-x-1/2 translate-y-[-50%]">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="opacity-20"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
         </div>
         
         <div className="flex items-center gap-4 mb-6 relative z-10 px-2">
            <h2 className="text-white text-[24px] md:text-[32px] font-black italic tracking-tighter drop-shadow-md">Early Bird deals</h2>
         </div>

         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x relative z-10 px-2 pb-2">
            {earlyBirdDeals.map((deal, i) => (
               <div key={`early-${i}`} className="min-w-[140px] md:min-w-[180px] bg-white rounded-[20px] flex flex-col items-center snap-start cursor-pointer group hover:-translate-y-1 transition-transform overflow-hidden shadow-md">
                  <div className="w-full aspect-[4/5] bg-white p-4 flex items-center justify-center relative overflow-hidden">
                     <Image src={deal.img} alt={deal.name} fill className="object-contain p-2 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="w-full bg-[#eb3223] text-white text-[14px] md:text-[18px] font-black text-center py-2.5 shadow-inner px-2 truncate">
                     {deal.price}
                  </div>
                  <div className="w-full h-10 flex items-center justify-center bg-white px-2">
                     <span className="text-[11px] md:text-[14px] font-bold text-gray-800 tracking-tight text-center truncate">{deal.name}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
};

export default AppliancesHub;
