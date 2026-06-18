import React from "react";
import Image from "next/image";

const iconCategories = [
  { name: "New launches", img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=200" },
  { name: "Headsets", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200" },
  { name: "Wearables", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=200" },
  { name: "Grooming", img: "https://images.unsplash.com/photo-1585241936939-f47dfbb4b8eb?q=80&w=200" },
  { name: "Mobile Cover", img: "https://images.unsplash.com/photo-1601784551446-20c9e07cd56e?q=80&w=200" },
  { name: "Accessories", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=200" },
  { name: "Power Banks", img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=200" },
  { name: "Gaming", img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=200" },
  { name: "Health care", img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=200" },
  { name: "Gaming Hub", img: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?q=80&w=200" },
  { name: "Laptops", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=200" },
  { name: "Tablets", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=200" },
  { name: "ITPeripherals", img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=200" },
  { name: "2 Wheelers", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=200" },
  { name: "Camera", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=200" },
  { name: "Mobile Acc", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=200" },
  { name: "Data Storage", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=200" },
  { name: "Smart device", img: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=200" },
  { name: "Networking", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=200" }
];

const intelPCs = [
  { name: "Asus Vivobook s14 Flip", price: "Starts ₹56,990*", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300" },
  { name: "Asus Vivobook 15", price: "Just ₹56,990*", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=300" },
  { name: "Asus Vivobook s14", price: "Just ₹63,990*", img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=300" },
  { name: "Asus Tuf F16 Core 5", price: "Just ₹67,990*", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=300" },
  { name: "Asus Tuf V", price: "Just ₹80,990*", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=300" }
];

const syncStyle = [
  { name: "Samsung Book 4 i7", price: "Just ₹58,990*", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300" },
  { name: "Noise earphones", price: "From ₹899", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300" },
  { name: "OPPO Pad SE", price: "From ₹12,699*", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=300" },
  { name: "Apple Watch SE 3", price: "From ₹21,999*", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=300" },
  { name: "Bajaj Pulsar", price: "From ₹1,20,000*", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=300" }
];

const shopBefore = [
  { name: "Mivi Duopods", price: "From ₹599", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300" },
  { name: "moto watch", price: "From ₹3,999*", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=300" },
  { name: "realme Pad 2 Lite", price: "From ₹13,661*", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=300" },
  { name: "Nova styling", price: "From ₹558", img: "https://images.unsplash.com/photo-1585241936939-f47dfbb4b8eb?q=80&w=300" },
  { name: "Zeb 27\" monitor", price: "Just ₹6,569*", img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=300" }
];

const laptopDeals = [
  { name: "HP All in One i3 PCs", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=300" },
  { name: "Dell 15 Ryzen 5", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300" },
  { name: "HP i3/ Core 3 PCs", img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=300" },
  { name: "Lenovo Ideapad Slim", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=300" },
  { name: "Lenovo LOQ", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=300" }
];

const earphoneDeals = [
  { name: "boAt earphones", price: "Wishlist now", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300" },
  { name: "CMF buds", price: "Wishlist now", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300" },
  { name: "GOBOULT buds", price: "From ₹6XX", img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=300" },
  { name: "JBL earphones", price: "From ₹X,9XX", img: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=300" },
  { name: "SONY ear...", price: "Wishlist now", img: "https://images.unsplash.com/photo-1599666505317-7bb08994828e?q=80&w=300" }
];

const twoWheelerDeals = [
  { name: "Hero Splendor+", price: "From ₹70,943*", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=300" },
  { name: "Pulsar N160", price: "From ₹1,08,142*", img: "https://images.unsplash.com/photo-1558981408-db0ecd8a1ee1?q=80&w=300" },
  { name: "Chetak 3503", price: "From ₹XX,XXX*", img: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=300" },
  { name: "TVS iQube EVs", price: "From ₹99,922*", img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=300" },
  { name: "Ampere Ma...", price: "From ₹78,999*", img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=300" }
];

const tabletDeals = [
  { name: "Realme Pad 3", price: "From ₹XX,XX9*", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=300" },
  { name: "OnePlus Pad Go 2", price: "From ₹XX,XX9*", img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=300" },
  { name: "Lenovo Tab", price: "From ₹XX,XX9*", img: "https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=300" },
  { name: "OnePlus Pad Go", price: "From ₹1X,XX9*", img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=300" },
  { name: "Realme...", price: "From ₹X,XXX*", img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=300" }
];

const wearableDeals = [
  { name: "Fire-Boltt", price: "From ₹X,X99", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=300" },
  { name: "Noise", price: "From ₹X,X99", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=300" },
  { name: "boAt", price: "From ₹X,X99", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300" },
  { name: "Fastrack", price: "From ₹X,X99", img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=300" },
  { name: "Huawei", price: "From ₹X,X99", img: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=300" }
];

const healthCareDeals = [
  { name: "Havells Styling", price: "Wishlist now", img: "https://images.unsplash.com/photo-1585241936939-f47dfbb4b8eb?q=80&w=300" },
  { name: "Braun Trimmers", price: "Wishlist now", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=300" },
  { name: "Urban Styling", price: "Wishlist now", img: "https://images.unsplash.com/photo-1599351431247-f579338af7b3?q=80&w=300" },
  { name: "Beardo Styling", price: "Wishlist now", img: "https://images.unsplash.com/photo-1621605815841-2dd4497b795e?q=80&w=300" },
  { name: "Philips...", price: "Wishlist now", img: "https://images.unsplash.com/photo-1554907106-aa9a580bb7a8?q=80&w=300" }
];

const peripheralDeals = [
  { name: "Gaming monitor", price: "Wishlist now", img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=300" },
  { name: "Latest projector", price: "Wishlist now", img: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=300" },
  { name: "Wi-Fi printer", price: "Wishlist now", img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=300" },
  { name: "Ink tank printer", price: "Wishlist now", img: "https://images.unsplash.com/photo-1589330694653-99933220556e?q=80&w=300" },
  { name: "Smart m...", price: "Wishlist now", img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=300" }
];

const electronicTopDeals = [
  { title: "TGK Flip Cover for OnePlus Pad Go 2 12.1...", mrp: "1,499", price: "988", bankPrice: "938", img: "https://images.unsplash.com/photo-1601784551446-20c9e07cd56e?q=80&w=400" },
  { title: "DUJE BT-110 in The Ear Upto 38 Hours Pl...", mrp: "2,999", price: "486", bankPrice: "436", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400" },
  { title: "Fire-Boltt Aero Drift TWS Earbuds, Custo...", mrp: "8,999", price: "899", bankPrice: "854", img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=400" },
  { title: "Fire-Boltt Aero Fit TWS Earbuds, Custom ...", mrp: "9,999", price: "849", bankPrice: "806", img: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=400", rating: "4 * (13,578)" },
  { title: "boAt Premium EarBud with 60 Hours Play...", mrp: "1,999", price: "601", bankPrice: "551", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
  { title: "Fire-Boltt Aero Drift TWS Earbuds, Custo...", mrp: "8,999", price: "899", bankPrice: "854", img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=400" },
  { title: "boAt EarBuds New Launch with 60 Hours...", mrp: "1,999", price: "595", bankPrice: "545", img: "https://images.unsplash.com/photo-1599666505317-7bb08994828e?q=80&w=400" },
  { title: "Fire-Boltt Aero Pro TWS Earbuds, Custo...", mrp: "8,999", price: "799", bankPrice: "759", img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=400" }
];

const ElectronicsHub = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-4 mb-6">
      
      {/* Top Banners */}
      <div className="flex flex-col md:flex-row gap-4">
         {/* Left Banner */}
         <div className="w-full md:w-[60%] bg-[#e8ecec] rounded-[16px] p-6 relative overflow-hidden shadow-sm flex items-center group cursor-pointer border border-gray-200 min-h-[200px]">
            <div className="absolute top-0 right-0 bg-[#e8ef1e] text-black text-[10px] font-black px-2 py-1 leading-tight rounded-bl-lg z-10 shadow-md">
               SASA<br/>LELE
            </div>
            <div className="flex flex-col z-10 w-[50%]">
               <span className="text-gray-500 font-bold text-[12px] tracking-widest leading-tight">cmf<br/><span className="text-[8px] font-medium">by NOTHING</span></span>
               <h2 className="text-[20px] md:text-[28px] font-black text-gray-800 mt-2 md:mt-4 tracking-tight" style={{ fontFamily: 'monospace' }}>WATCH 3 PRO</h2>
               <p className="text-[16px] md:text-[20px] font-bold text-gray-900 mt-1">Starting @ ₹6,999</p>
               <p className="text-gray-600 text-[12px] md:text-[14px] mt-2 font-medium">Sale is LIVE!</p>
            </div>
            <div className="absolute right-[-10%] md:right-[5%] top-[10%] w-[65%] md:w-[45%] h-[120%] group-hover:scale-105 transition-transform duration-500">
               <Image src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400" alt="Watch" fill className="object-contain drop-shadow-2xl" />
            </div>
         </div>

         {/* Right Carousel Banners */}
         <div className="w-full md:w-[40%] flex gap-4 overflow-x-auto no-scrollbar snap-x pb-2 md:pb-0">
            <div className="min-w-full bg-[#1a56ff] rounded-[16px] p-6 relative overflow-hidden shadow-sm snap-start cursor-pointer group min-h-[200px]">
               <div className="absolute top-6 right-6 flex items-center gap-1 z-10">
                  <div className="text-[#fff04d]">✨</div>
                  <div className="bg-transparent border border-[#fff04d] text-[#fff04d] text-[10px] font-bold px-2 py-0.5 rounded-full">CURTAIN RAISER</div>
               </div>
               <div className="flex flex-col z-10 w-[60%]">
                  <div className="bg-[#e8ef1e] text-black font-black leading-none p-1.5 text-[14px] w-max rounded-sm shadow-sm tracking-tighter mb-2">
                     SASA<br/>LELE
                  </div>
                  <div className="bg-white text-black text-[8px] font-bold px-2 py-0.5 w-max rounded-sm shadow-sm mb-4">
                     Starts on <span className="text-red-600">9TH MAY</span><br/>Early Access: 9TH MAY
                  </div>
                  <h3 className="text-white text-[18px] md:text-[20px] font-bold leading-tight">Top styling essentials</h3>
                  <p className="text-white/80 text-[12px] font-medium mt-1">Grab yours now!</p>
                  <p className="text-[#fff04d] text-[18px] md:text-[20px] font-black mt-2">From ₹251</p>
               </div>
               
               <div className="absolute right-[-5%] bottom-4 w-[45%] aspect-square group-hover:scale-105 transition-transform duration-500">
                 <Image src="https://images.unsplash.com/photo-1585241936939-f47dfbb4b8eb?q=80&w=400" alt="Styling" fill className="object-contain drop-shadow-xl" />
               </div>

               <div className="absolute bottom-4 left-6 bg-white rounded-lg px-2 py-1 flex items-center gap-2 z-10 shadow-sm">
                 <div className="flex items-center gap-1 font-bold text-[#006cb8] text-[10px]">
                    <div className="w-3 h-3 bg-[#006cb8] rounded-full flex items-center justify-center">
                       <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    SBI Card
                 </div>
                 <div className="text-[8px] text-gray-800 leading-tight">
                    <span className="font-bold">10% Instant Discount*</span><br/>
                    with SBI Credit Card
                 </div>
               </div>
            </div>

            <div className="min-w-full bg-[#1a56ff] rounded-[16px] p-6 relative overflow-hidden shadow-sm snap-start cursor-pointer group min-h-[200px]">
               <div className="flex flex-col z-10 w-[60%]">
                  <div className="bg-[#e8ef1e] text-black font-black leading-none p-1.5 text-[14px] w-max rounded-sm shadow-sm tracking-tighter mb-2">
                     SASA<br/>LELE
                  </div>
                  <div className="bg-white text-black text-[8px] font-bold px-2 py-0.5 w-max rounded-sm shadow-sm mb-4">
                     Starts on <span className="text-red-600">9TH MAY</span>
                  </div>
                  <h3 className="text-white text-[18px] md:text-[20px] font-bold leading-tight">Canon printers</h3>
                  <p className="text-[#fff04d] text-[18px] md:text-[20px] font-black mt-2">From ₹2,499*</p>
               </div>
            </div>
         </div>
      </div>

      {/* Powered by */}
      <div className="w-full flex flex-col items-center mt-6 mb-4">
         <h2 className="text-[20px] md:text-[28px] font-bold text-gray-800 mb-4">Powered by</h2>
         <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-[800px] mx-auto">
            {/* Samsung */}
            <div className="w-full md:w-1/2 h-[70px] bg-gradient-to-r from-[#fff9c4] to-[#fff176] rounded-[12px] relative flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow">
               <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
               <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
               <span className="text-[24px] font-black tracking-tighter">SAMSUNG <br/><span className="font-semibold text-[20px]">Galaxy</span></span>
               <div className="absolute right-6 text-2xl font-black text-gray-800">{'>'}</div>
            </div>
            {/* Intel */}
            <div className="w-full md:w-1/2 h-[70px] bg-gradient-to-r from-[#fff9c4] to-[#fff176] rounded-[12px] relative flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow">
               <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
               <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
               <div className="flex flex-col items-center">
                  <span className="text-[24px] font-black text-gray-900 tracking-tight">intel <span className="font-light">CORE</span></span>
                  <span className="border border-gray-900 text-[8px] font-bold px-1 py-0.5 tracking-widest mt-[-2px]">ULTRA</span>
               </div>
               <div className="absolute right-6 text-2xl font-black text-gray-800">{'>'}</div>
            </div>
         </div>
      </div>

      {/* SBI Full Banner */}
      <div className="w-full bg-white border border-gray-300 rounded-[12px] p-4 flex items-center justify-center relative shadow-sm cursor-pointer mb-6">
         <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-1.5 font-bold text-[#00a1e0] text-[24px] md:text-[36px] tracking-tight">
               <div className="w-8 h-8 md:w-10 md:h-10 bg-[#00a1e0] rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-white rounded-full"></div>
               </div>
               SBI card
            </div>
            <div className="w-[1px] h-12 bg-gray-300"></div>
            <div className="flex flex-col">
               <h3 className="text-[18px] md:text-[24px] font-bold text-gray-900 leading-tight">10% Instant Discount*</h3>
               <p className="text-[14px] md:text-[18px] text-gray-600 font-medium">with SBI Credit Card (also valid on EMI Trxns.)</p>
            </div>
         </div>
         <div className="absolute right-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-gray-400 font-medium origin-center hidden md:block">
           *T&C Apply
         </div>
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-5 md:grid-cols-10 gap-x-2 gap-y-6 mb-8 px-2">
         {iconCategories.map((cat, i) => (
            <div key={`icon-${i}`} className="flex flex-col items-center cursor-pointer group">
               <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-[#ebdcf9] rounded-[16px] p-2 flex items-center justify-center overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform border border-[#d8c2ef]">
                  <div className="w-[90%] h-[90%] relative">
                     <Image src={cat.img} alt={cat.name} fill className="object-contain mix-blend-multiply" />
                  </div>
               </div>
               <span className="text-[9px] md:text-[11px] font-bold text-gray-800 tracking-tight text-center leading-tight mt-2 px-1">
                  {cat.name}
               </span>
            </div>
         ))}
      </div>

      {/* Savings and EMI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
         <div className="w-full bg-[#e6f7f4] rounded-[16px] p-4 flex items-center gap-4 cursor-pointer hover:bg-[#d6f0ec] transition-colors border border-[#d0ece8]">
            <div className="w-[60px] h-[40px] bg-black rounded-md relative overflow-hidden shadow-sm flex items-center justify-center shrink-0">
               <div className="absolute right-[-10px] top-[-10px] w-8 h-8 bg-blue-500 rounded-full blur-md opacity-50"></div>
               <div className="absolute left-[-10px] bottom-[-10px] w-8 h-8 bg-red-500 rounded-full blur-md opacity-50"></div>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
            </div>
            <div className="flex flex-col flex-1">
               <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900 leading-tight">Get 10% <br/> Savings</h3>
               <p className="text-[12px] md:text-[14px] font-medium text-gray-700 mt-1 flex items-center justify-between w-full">
                 Namma Kart Axis Bank Credit Card 
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
               </p>
            </div>
         </div>

         <div className="w-full bg-[#eaf8ed] rounded-[16px] p-4 flex items-center gap-4 cursor-pointer hover:bg-[#d8f0dd] transition-colors border border-[#d5ead9]">
            <div className="w-[60px] h-[60px] bg-white rounded-lg shadow-sm flex flex-col items-center justify-center shrink-0 border border-gray-100 p-1">
               <div className="bg-[#ffc107] w-full flex-1 rounded flex items-center justify-center">
                 <span className="font-serif font-black text-blue-600 text-[20px] italic">f</span>
               </div>
               <span className="text-[10px] font-black text-[#006cb8] mt-0.5">EMI</span>
            </div>
            <div className="flex flex-col flex-1">
               <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900 leading-tight">Get Credit <br/> Up to ₹1 Lakh</h3>
               <p className="text-[12px] md:text-[14px] font-medium text-gray-700 mt-1 flex items-center justify-between w-full">
                 With Namma Kart EMI 
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
               </p>
            </div>
         </div>
      </div>

      {/* Wishlist Intel PCs */}
      <div className="pt-8 mb-6">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6 px-1">Wishlist Intel PCs</h2>
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x px-1">
            {intelPCs.map((pc, i) => (
               <div key={`pc-${i}`} className="min-w-[160px] md:min-w-[200px] flex flex-col items-center snap-start cursor-pointer group">
                  <div className="w-full aspect-[4/3] bg-[#ff5f3f] rounded-[24px] flex items-end justify-center relative shadow-sm mb-4 mt-8">
                     <div className="w-[110%] h-[120%] absolute bottom-2 group-hover:scale-105 transition-transform duration-500 origin-bottom">
                        <Image src={pc.img} alt={pc.name} fill className="object-contain drop-shadow-2xl mix-blend-luminosity brightness-110" />
                     </div>
                  </div>
                  <h3 className="text-gray-900 text-[14px] md:text-[16px] font-semibold text-center leading-tight truncate px-1 w-full mt-2">{pc.name}</h3>
                  <p className="text-gray-900 text-[16px] md:text-[20px] font-black mt-1 text-center">{pc.price}</p>
               </div>
            ))}
         </div>
      </div>

      {/* Sync your style! */}
      <div className="w-full bg-[#1a56ff] rounded-[20px] p-4 md:p-6 shadow-md relative overflow-hidden mb-6 group">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_3px)] bg-[size:24px_24px]"></div>
         <h2 className="text-[18px] md:text-[24px] font-bold text-white mb-4 relative z-10">Sync your style!</h2>
         
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x relative z-10 pb-2">
            {/* Promo Card */}
            <div className="min-w-[150px] md:min-w-[200px] bg-[#0c31a3] rounded-[16px] p-4 flex flex-col items-start justify-between snap-start relative overflow-hidden cursor-pointer">
               <h3 className="text-white text-[16px] md:text-[20px] font-medium leading-tight z-10">Explore the<br/>trends</h3>
               <h2 className="text-[#fff04d] text-[20px] md:text-[28px] font-black z-10 mt-1 drop-shadow-md">LIVE NOW</h2>
               <div className="absolute bottom-[-10%] right-[-10%] w-[80%] aspect-square z-0">
                  <Image src="https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=200" alt="Mascot" fill className="object-contain brightness-150 drop-shadow-xl saturate-200 hue-rotate-15" />
               </div>
               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mt-auto z-10 shadow-md group-hover:translate-x-1 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
               </div>
            </div>

            {/* Product Cards */}
            {syncStyle.map((item, i) => (
               <div key={`sync-${i}`} className="min-w-[130px] md:min-w-[160px] flex flex-col snap-start cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="w-full aspect-[4/5] bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] rounded-t-[16px] p-3 flex items-center justify-center relative overflow-hidden">
                     <Image src={item.img} alt={item.name} fill className="object-contain mix-blend-multiply drop-shadow-md" />
                  </div>
                  <div className="w-full bg-[#ffcc00] text-gray-900 text-[14px] md:text-[16px] font-black text-center py-2 shadow-sm relative z-10">
                     {item.price}
                  </div>
                  <div className="w-full text-white text-[12px] md:text-[14px] font-medium text-center py-2">
                     {item.name}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Shop before everyone! */}
      <div className="w-full bg-[#e83e23] rounded-[20px] p-4 md:p-6 shadow-md relative overflow-hidden mb-6 group border border-[#c22e16]">
         <div className="absolute top-0 right-4 text-white/20 font-black text-[60px] italic leading-none pointer-events-none">EARLY</div>
         <h2 className="text-[18px] md:text-[24px] font-bold text-white mb-4 relative z-10">Shop before everyone!</h2>
         
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x relative z-10 pb-2">
            {shopBefore.map((item, i) => (
               <div key={`shop-${i}`} className="min-w-[130px] md:min-w-[160px] flex flex-col snap-start cursor-pointer hover:-translate-y-1 transition-transform">
                  <div className="w-full aspect-[4/5] bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] rounded-t-[16px] p-3 flex items-center justify-center relative overflow-hidden">
                     <Image src={item.img} alt={item.name} fill className="object-contain mix-blend-multiply drop-shadow-md" />
                  </div>
                  <div className="w-full bg-[#ffcc00] text-gray-900 text-[14px] md:text-[16px] font-black text-center py-2 shadow-sm relative z-10">
                     {item.price}
                  </div>
                  <div className="w-full text-white text-[12px] md:text-[14px] font-medium text-center py-2">
                     {item.name}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* How to get the WOW deal? */}
      <div className="w-full mt-8 mb-10">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6">How to get the WOW deal?</h2>
         <div className="w-full bg-[#1a56ff] rounded-[24px] p-6 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_100%]"></div>
            
            <div className="w-full md:w-[60%] z-10">
               <div className="bg-[#fff9e6] rounded-[20px] p-6 md:p-8 shadow-lg">
                  <div className="flex flex-col gap-4">
                     <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700 font-bold text-[18px] md:text-[22px]">MRP</span>
                        <span className="text-gray-900 font-black text-[18px] md:text-[22px]">₹69,999</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700 font-bold text-[18px] md:text-[22px]">Sale price</span>
                        <span className="text-gray-900 font-black text-[18px] md:text-[22px]">₹59,999</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700 font-bold text-[18px] md:text-[22px]">Extra off on exchange</span>
                        <span className="text-gray-900 font-black text-[18px] md:text-[22px]">₹4,000</span>
                     </div>
                     <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-bold text-[18px] md:text-[22px]">Bank discount</span>
                        <span className="text-gray-900 font-black text-[18px] md:text-[22px]">₹2,000</span>
                     </div>
                  </div>
               </div>
               
               <div className="flex flex-col mt-4 relative">
                  <div className="w-full bg-[#eb3223] text-white p-4 md:p-6 rounded-t-[16px] flex justify-between items-center shadow-md">
                     <span className="text-[20px] md:text-[28px] font-black">Final price</span>
                     <span className="text-[24px] md:text-[36px] font-black tracking-tight">₹53,999</span>
                  </div>
                  
                  {/* OR separator */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1a56ff] border-[4px] border-white rounded-full flex items-center justify-center z-20 text-white font-black text-[14px]">
                     or
                  </div>

                  <div className="w-full bg-[#ffcc00] text-gray-900 p-4 md:p-6 rounded-b-[16px] flex justify-between items-center shadow-md">
                     <span className="text-[20px] md:text-[28px] font-black">No cost EMI</span>
                     <span className="text-[24px] md:text-[36px] font-black tracking-tight">₹8,999/M</span>
                  </div>
               </div>
            </div>

            <div className="w-full md:w-[40%] flex justify-center items-end relative z-10 md:h-[400px]">
               <div className="w-[80%] md:w-[120%] h-full relative group">
                  <Image src="https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=400" alt="Character" fill className="object-contain drop-shadow-2xl brightness-125 saturate-150 hue-rotate-[-10deg] group-hover:scale-105 transition-transform duration-500" />
               </div>
            </div>
         </div>
      </div>

      {/* Laptop Section */}
      <div className="mb-12">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6">Laptop</h2>
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
            {laptopDeals.map((laptop, i) => (
               <div key={`laptop-${i}`} className="min-w-[160px] md:min-w-[200px] flex flex-col snap-start cursor-pointer group">
                  <div className="w-full aspect-square bg-[#ffccbb] rounded-t-[20px] p-4 flex items-center justify-center relative overflow-hidden">
                     <Image src={laptop.img} alt={laptop.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="w-full bg-[#eb3223] text-white text-[14px] md:text-[16px] font-bold text-center py-2.5 shadow-md">
                     Wishlist now
                  </div>
                  <div className="w-full text-gray-800 text-[12px] md:text-[14px] font-bold text-center py-3">
                     {laptop.name}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Earphones & headsets Section */}
      <div className="mb-10">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6">Earphones & headsets</h2>
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
            {earphoneDeals.map((item, i) => (
               <div key={`ear-${i}`} className="min-w-[160px] md:min-w-[200px] flex flex-col snap-start cursor-pointer group">
                  <div className="w-full aspect-square bg-[#cce0ff] rounded-t-[20px] p-4 flex items-center justify-center relative overflow-hidden">
                     <Image src={item.img} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="w-full bg-[#1a56ff] text-white text-[14px] md:text-[16px] font-bold text-center py-2.5 shadow-md">
                     {item.price}
                  </div>
                  <div className="w-full text-gray-800 text-[12px] md:text-[14px] font-bold text-center py-3">
                     {item.name}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Two wheelers Section */}
      <div className="mb-10">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6">Two wheelers</h2>
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
            {twoWheelerDeals.map((item, i) => (
               <div key={`bike-${i}`} className="min-w-[160px] md:min-w-[200px] flex flex-col snap-start cursor-pointer group">
                  <div className="w-full aspect-square bg-[#ffccbb] rounded-t-[20px] p-4 flex items-center justify-center relative overflow-hidden">
                     <Image src={item.img} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="w-full bg-[#eb3223] text-white text-[14px] md:text-[16px] font-bold text-center py-2.5 shadow-md">
                     {item.price}
                  </div>
                  <div className="w-full text-gray-800 text-[12px] md:text-[14px] font-bold text-center py-3">
                     {item.name}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Tablets Section */}
      <div className="mb-12">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6">Tablets</h2>
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
            {tabletDeals.map((item, i) => (
               <div key={`tab-${i}`} className="min-w-[160px] md:min-w-[200px] flex flex-col snap-start cursor-pointer group">
                  <div className="w-full aspect-square bg-gradient-to-b from-[#d9e5fc] to-[#e8f0fe] rounded-t-[20px] p-4 flex items-center justify-center relative overflow-hidden">
                     <Image src={item.img} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="w-full bg-[#1a56ff] text-white text-[14px] md:text-[16px] font-bold text-center py-2.5 shadow-md">
                     {item.price}
                  </div>
                  <div className="w-full text-gray-800 text-[12px] md:text-[14px] font-bold text-center py-3">
                     {item.name}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Smart wearables Section */}
      <div className="mb-10">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6">Smart wearables</h2>
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
            {wearableDeals.map((item, i) => (
               <div key={`wear-${i}`} className="min-w-[160px] md:min-w-[200px] flex flex-col snap-start cursor-pointer group">
                  <div className="w-full aspect-square bg-[#ffccbb] rounded-t-[20px] p-4 flex items-center justify-center relative overflow-hidden">
                     <Image src={item.img} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="w-full bg-[#eb3223] text-white text-[14px] md:text-[16px] font-bold text-center py-2.5 shadow-md">
                     {item.price}
                  </div>
                  <div className="w-full text-gray-800 text-[12px] md:text-[14px] font-bold text-center py-3">
                     {item.name}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Personal healthcare Section */}
      <div className="mb-10">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6">Personal healthcare</h2>
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
            {healthCareDeals.map((item, i) => (
               <div key={`health-${i}`} className="min-w-[160px] md:min-w-[200px] flex flex-col snap-start cursor-pointer group">
                  <div className="w-full aspect-square bg-[#cce0ff] rounded-t-[20px] p-4 flex items-center justify-center relative overflow-hidden">
                     <Image src={item.img} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="w-full bg-[#1a56ff] text-white text-[14px] md:text-[16px] font-bold text-center py-2.5 shadow-md">
                     {item.price}
                  </div>
                  <div className="w-full text-gray-800 text-[12px] md:text-[14px] font-bold text-center py-3">
                     {item.name}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Computer peripherals Section */}
      <div className="mb-12">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6">Computer peripherals</h2>
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
            {peripheralDeals.map((item, i) => (
               <div key={`periph-${i}`} className="min-w-[160px] md:min-w-[200px] flex flex-col snap-start cursor-pointer group">
                  <div className="w-full aspect-square bg-[#ffccbb] rounded-t-[20px] p-4 flex items-center justify-center relative overflow-hidden">
                     <Image src={item.img} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="w-full bg-[#eb3223] text-white text-[14px] md:text-[16px] font-bold text-center py-2.5 shadow-md">
                     {item.price}
                  </div>
                  <div className="w-full text-gray-800 text-[12px] md:text-[14px] font-bold text-center py-3">
                     {item.name}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Top Deals Grid */}
      <div className="pt-8 mb-10">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6">Top Deals on Electronics</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {electronicTopDeals.map((deal, i) => (
               <div key={`top-${i}`} className="flex flex-col bg-white rounded-[12px] p-2 md:p-3 border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow group">
                  <div className="w-full aspect-square bg-[#f8f8f8] rounded-[8px] p-2 flex items-center justify-center relative overflow-hidden mb-3">
                     <Image src={deal.img} alt={deal.title} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                     {deal.rating && (
                        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 shadow-sm">
                           {deal.rating}
                        </div>
                     )}
                  </div>
                  <h3 className="text-gray-800 text-[12px] md:text-[13px] font-medium leading-tight line-clamp-2 h-8 mb-2">
                    <span className="font-bold">{deal.title.split(' ')[0]}</span> {deal.title.split(' ').slice(1).join(' ')}
                  </h3>
                  <div className="flex items-center gap-2 mb-1">
                     <span className="text-gray-400 text-[12px] md:text-[14px] line-through">{deal.mrp}</span>
                     <span className="text-gray-900 text-[14px] md:text-[16px] font-bold">₹{deal.price}</span>
                  </div>
                  <p className="text-blue-600 text-[10px] md:text-[12px] font-bold mt-1">₹{deal.bankPrice} with Bank offer</p>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
};

export default ElectronicsHub;
