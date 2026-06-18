import React from "react";
import Image from "next/image";

const homeCategories = [
  { name: "Containers", img: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=200" },
  { name: "Decor", img: "https://images.unsplash.com/photo-1513519247388-193ad51c50bb?q=80&w=200" },
  { name: "Drinkware", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=200" },
  { name: "Bathroom", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200" },
  { name: "Cookware", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" },
  { name: "Covers", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=200" },
  { name: "Dining", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=200" },
  { name: "Sofas", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200" },
  { name: "Bath linen", img: "https://images.unsplash.com/photo-1616627188280-a1046280955d?q=80&w=200" },
  { name: "Insect killer", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=200" },
  { name: "Lighting", img: "https://images.unsplash.com/photo-1513506496268-4d2221f7869d?q=80&w=200" },
  { name: "Furnishing", img: "https://images.unsplash.com/photo-1536920333534-192a6af4e86e?q=80&w=200" },
  { name: "Bedsheets", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=200" },
  { name: "Wallpaper", img: "https://images.unsplash.com/photo-1513519247388-193ad51c50bb?q=80&w=200" },
  { name: "Utilities", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200" },
  { name: "Hardware", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" },
  { name: "Cleaning", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200" },
  { name: "Furniture", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200" },
  { name: "Gardening", img: "https://images.unsplash.com/photo-1616627188280-a1046280955d?q=80&w=200" },
  { name: "Pooja needs", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=200" },
  { name: "Mats & rugs", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=200" },
  { name: "Mosquito nets", img: "https://images.unsplash.com/photo-1513519247388-193ad51c50bb?q=80&w=200" }
];

const fastestFingerDeals = [
  { brand: "MILTON", price: "From ₹129", img: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=300" },
  { brand: "Raymond Home", price: "From ₹299", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=300" },
  { brand: "Prestige", price: "Up to 40% Off", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=300" },
  { brand: "ugaoo", price: "From ₹99", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=300" },
  { brand: "Ajanta", price: "From ₹149", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=300" },
  { brand: "Godrej", price: "From ₹229", img: "https://images.unsplash.com/photo-1616627188280-a1046280955d?q=80&w=300" },
  { brand: "murphy", price: "From ₹499", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300" }
];

const homeBrandDeals = [
  { brand: "PHILIPS", price: "From ₹89", img: "https://images.unsplash.com/photo-1513506496268-4d2221f7869d?q=80&w=300", color: "bg-[#ffcc00]", textColor: "text-gray-900" },
  { brand: "MILTON", price: "From ₹129", img: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=300", color: "bg-[#ffcc00]", textColor: "text-gray-900" },
  { brand: "BOSCH", price: "Up to 60% Off", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=300", color: "bg-[#ffcc00]", textColor: "text-gray-900" },
  { brand: "BOROSIL", price: "From ₹299", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=300", color: "bg-[#1a56ff]", textColor: "text-white" },
  { brand: "Godrej interio", price: "From ₹4,999", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=300", color: "bg-[#1a56ff]", textColor: "text-white" },
  { brand: "Story@home", price: "From ₹369", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=300", color: "bg-[#1a56ff]", textColor: "text-white" },
  { brand: "TITAN", price: "From ₹899", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=300", color: "bg-[#ffcc00]", textColor: "text-gray-900" },
  { brand: "HAVELLS", price: "From ₹1,499", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=300", color: "bg-[#ffcc00]", textColor: "text-gray-900" },
  { brand: "BERGNER", price: "Up to 60% Off", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=300", color: "bg-[#ffcc00]", textColor: "text-gray-900" }
];

const homeAndLiving = [
  { name: "Floor coverings", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=200" },
  { name: "Curtains", img: "https://images.unsplash.com/photo-1536920333534-192a6af4e86e?q=80&w=200" },
  { name: "Table linens", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=200" },
  { name: "Slip covers", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=200" },
  { name: "Cushions", img: "https://images.unsplash.com/photo-1616627188280-a1046280955d?q=80&w=200" }
];

const tableAndDinnerware = [
  { name: "Cups & saucers", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=200" },
  { name: "Dining tools", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=200" },
  { name: "Plates & bowls", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=200" },
  { name: "Table bowls", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=200" },
  { name: "Dinner sets", img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=200" }
];

const kitchenEssentials = [
  { name: "Condiment sets", img: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=200" },
  { name: "Storage", img: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=200" },
  { name: "Cookware sets", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" },
  { name: "Kitchen racks", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" },
  { name: "Woks & kadhais", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" },
  { name: "Pans & tawas", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" }
];

const hardwareElectricals = [
  { name: "Electrical wires", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200" },
  { name: "Extension boards", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200" },
  { name: "Hand tools", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" },
  { name: "Batteries", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=200" },
  { name: "Drilling tools", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" },
  { name: "Power tools", img: "https://images.unsplash.com/photo-1584990333910-ef13fc0197d0?q=80&w=200" }
];

const HomeHub = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-4 mb-6">
      
      {/* Top Banners */}
      <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
         {/* Be the best host */}
         <div className="min-w-[300px] md:min-w-[450px] aspect-[2.2/1] rounded-[16px] overflow-hidden snap-start relative shadow-md cursor-pointer group bg-gradient-to-r from-[#6b73b5] to-[#8c94d6]">
            <div className="absolute right-0 top-0 w-[55%] h-full">
               <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[90%] aspect-square bg-white rounded-full overflow-hidden border-[4px] border-white/30 z-10">
                  <Image src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=400" alt="Dining" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
            </div>
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-[45%]">
               <h3 className="text-white text-[24px] md:text-[32px] font-black leading-tight drop-shadow-md">Be the best host!</h3>
               <p className="text-white/90 text-[14px] md:text-[16px] mt-2 font-medium">Make every meal a delight!</p>
               <div className="bg-white/20 backdrop-blur-sm px-3 py-1 mt-4 w-max rounded text-white text-[14px] md:text-[18px] font-bold">
                 Min. 20% Off
               </div>
            </div>
         </div>

         {/* Furnish it your way */}
         <div className="min-w-[300px] md:min-w-[450px] aspect-[2.2/1] rounded-[16px] overflow-hidden snap-start relative shadow-md cursor-pointer group bg-gradient-to-r from-[#6b73b5] to-[#8c94d6]">
            <div className="absolute right-0 top-0 w-[55%] h-full">
               <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[90%] aspect-square bg-white rounded-full overflow-hidden border-[4px] border-white/30 z-10">
                  <Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400" alt="Furniture" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
            </div>
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-[45%]">
               <h3 className="text-white text-[24px] md:text-[32px] font-black leading-tight drop-shadow-md">Furnish it your way!</h3>
               <p className="text-white/90 text-[14px] md:text-[16px] mt-2 font-medium">Cushions, curtains, get it all</p>
               <div className="bg-white/20 backdrop-blur-sm px-3 py-1 mt-4 w-max rounded text-white text-[14px] md:text-[18px] font-bold">
                 Up to 60% Off
               </div>
            </div>
         </div>

         {/* Maximise savings */}
         <div className="min-w-[300px] md:min-w-[400px] aspect-[2.2/1] rounded-[16px] overflow-hidden snap-start relative shadow-md cursor-pointer group bg-[#0a48d1] p-6 flex flex-col justify-between">
            <div className="z-10">
               <h3 className="text-white text-[20px] md:text-[24px] font-bold leading-tight">Maximise your savings</h3>
               <h2 className="text-white text-[28px] md:text-[36px] font-black mt-2 leading-none">Avail GST benefits</h2>
               <p className="text-[#fff04d] text-[16px] md:text-[18px] font-medium mt-4">on home & furniture</p>
            </div>
            <div className="bg-[#fff04d] h-4 w-[80%] rounded-full opacity-30 mt-4"></div>
         </div>
      </div>

      {/* Category Icons Grid */}
      <div className="w-full flex flex-col gap-6 py-4">
         <div className="grid grid-cols-6 md:grid-cols-11 gap-x-2 gap-y-6">
            {homeCategories.map((cat, i) => (
               <div key={`cat-${i}`} className="flex flex-col items-center cursor-pointer group">
                  <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] bg-[#f5f5f5] rounded-[12px] md:rounded-[16px] p-2 flex items-center justify-center relative overflow-hidden shadow-sm group-hover:-translate-y-1 transition-transform border border-gray-100">
                     <Image src={cat.img} alt={cat.name} fill className="object-cover" />
                  </div>
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-800 tracking-tight text-center leading-tight mt-2 px-1">
                     {cat.name}
                  </span>
               </div>
            ))}
         </div>
      </div>

      {/* Fastest finger first! Banner */}
      <div className="w-full bg-[#f44336] rounded-[24px] p-4 md:p-6 shadow-lg relative overflow-hidden group">
         <div className="absolute top-4 right-8 w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-[#ffcc00] rounded-full flex items-center justify-center opacity-90 rotate-12 z-0 scale-150 translate-x-1/2 translate-y-[-50%]">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" className="opacity-20"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
         </div>
         
         <div className="flex items-center gap-4 mb-6 relative z-10 px-2">
            <h2 className="text-white text-[24px] md:text-[32px] font-black italic tracking-tighter drop-shadow-md">Fastest finger first!</h2>
         </div>

         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x relative z-10 px-2 pb-2">
            {fastestFingerDeals.map((deal, i) => (
               <div key={`fast-${i}`} className="min-w-[130px] md:min-w-[160px] bg-white rounded-[20px] flex flex-col items-center snap-start cursor-pointer group hover:-translate-y-1 transition-transform overflow-hidden shadow-md">
                  <div className="w-full aspect-square bg-[#f5f5f5] p-3 flex items-center justify-center relative overflow-hidden">
                     <Image src={deal.img} alt={deal.brand} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="w-full h-10 flex items-center justify-center bg-white px-2">
                     <span className="text-[12px] md:text-[14px] font-black text-gray-800 tracking-tighter text-center uppercase">{deal.brand}</span>
                  </div>
                  <div className="w-full bg-[#eb3223] text-white text-[14px] md:text-[16px] font-bold text-center py-2 shadow-inner">
                     {deal.price}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Brand deals live Section */}
      <div className="pt-8 mb-6">
         <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-6">Brand deals live</h2>
         <div className="grid grid-cols-3 gap-3 md:gap-6">
            {homeBrandDeals.map((deal, i) => (
               <div key={`brand-${i}`} className="flex flex-col bg-white rounded-[12px] md:rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group border border-gray-100">
                  <div className="w-full aspect-square relative">
                     <Image src={deal.img} alt={deal.brand} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                     {/* Logo pill */}
                     <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1.5 shadow-md flex items-center justify-center min-w-[80%] border border-gray-100">
                        <span className="text-[10px] md:text-[14px] font-black text-gray-800 tracking-tighter uppercase text-center truncate">{deal.brand}</span>
                     </div>
                  </div>
                  <div className={`w-full ${deal.color} ${deal.textColor} text-[12px] md:text-[18px] font-black text-center py-2 md:py-3 shadow-inner`}>
                     {deal.price}
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* SASA LELE Banner */}
      <div className="w-full mt-6 mb-10 cursor-pointer group">
         <div className="w-full aspect-[4/1] md:aspect-[6/1] bg-[#0c31a3] rounded-[16px] md:rounded-[24px] overflow-hidden relative shadow-xl flex items-center justify-center p-4">
            {/* Background stripes */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.1)_50%)] bg-[size:20px_100%]"></div>
            
            <div className="flex items-center gap-4 md:gap-12 relative z-10 w-full px-4 md:px-10">
               {/* SASA LELE Cube */}
               <div className="hidden md:flex flex-col">
                  <div className="bg-[#ffeb3b] text-gray-900 font-black text-[30px] md:text-[40px] leading-none p-1 md:p-2 rotate-[-5deg] shadow-lg">SASA</div>
                  <div className="bg-[#ffeb3b] text-gray-900 font-black text-[30px] md:text-[40px] leading-none p-1 md:p-2 rotate-[5deg] shadow-lg mt-[-5px]">LELE</div>
               </div>

               <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-4">
                    <h2 className="text-white text-[24px] md:text-[60px] font-black tracking-tighter drop-shadow-lg uppercase leading-none">SALE STARTS</h2>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <h2 className="text-[#ffeb3b] text-[24px] md:text-[60px] font-black tracking-tighter drop-shadow-lg uppercase leading-none">ON 9TH MAY</h2>
                  </div>
                  <p className="text-white text-[12px] md:text-[24px] font-medium mt-4 tracking-tight">24 hrs early access for PLUS & BLACK members</p>
               </div>

               {/* Floating coins */}
               <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
                  <div className="w-8 h-8 bg-[#ffcc00] rounded-full shadow-lg animate-bounce"></div>
                  <div className="w-10 h-10 bg-[#ffcc00] rounded-full shadow-lg ml-6 animate-pulse"></div>
               </div>
            </div>
            
            {/* Sparkles */}
            <div className="absolute top-4 left-10 text-white/40 font-black text-[40px] animate-pulse">✦</div>
            <div className="absolute bottom-4 right-10 text-white/40 font-black text-[40px] animate-pulse delay-75">✦</div>
         </div>
      </div>

      {/* Category Horizontal Sections */}
      <div className="flex flex-col gap-8 mb-10">
         
         {/* Home & Living */}
         <div className="w-full bg-[#e3f2fd] rounded-[16px] overflow-hidden shadow-sm border border-blue-100 relative">
            <div className="w-full bg-[#1e88e5] px-4 py-2 flex justify-between items-center">
               <h3 className="text-white font-bold text-[16px] md:text-[20px]">Home & Living</h3>
               <div className="text-white/40 text-[20px] animate-pulse">✦</div>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-3 p-4">
               {homeAndLiving.map((item, i) => (
                  <div key={`hl-${i}`} className="min-w-[120px] md:min-w-[180px] flex flex-col rounded-[12px] overflow-hidden shadow-sm bg-white cursor-pointer group">
                     <div className="w-full aspect-square relative">
                        <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                     </div>
                     <div className="w-full bg-[#1e88e5] text-white text-[11px] md:text-[14px] font-bold text-center py-2">
                        {item.name}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Table & dinnerware */}
         <div className="w-full bg-[#f3e5f5] rounded-[16px] overflow-hidden shadow-sm border border-purple-100 relative">
            <div className="w-full bg-[#8e24aa] px-4 py-2 flex justify-between items-center">
               <h3 className="text-white font-bold text-[16px] md:text-[20px]">Table & dinnerware</h3>
               <div className="text-white/40 text-[20px] animate-pulse">✦</div>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-3 p-4">
               {tableAndDinnerware.map((item, i) => (
                  <div key={`td-${i}`} className="min-w-[120px] md:min-w-[180px] flex flex-col rounded-[12px] overflow-hidden shadow-sm bg-white cursor-pointer group">
                     <div className="w-full aspect-square relative">
                        <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                     </div>
                     <div className="w-full bg-[#8e24aa] text-white text-[11px] md:text-[14px] font-bold text-center py-2">
                        {item.name}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Kitchen essentials */}
         <div className="w-full bg-[#e3f2fd] rounded-[16px] overflow-hidden shadow-sm border border-blue-100 relative">
            <div className="w-full bg-[#1e88e5] px-4 py-2 flex justify-between items-center">
               <h3 className="text-white font-bold text-[16px] md:text-[20px]">Kitchen essentials</h3>
               <div className="text-white/40 text-[20px] animate-pulse">✦</div>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-3 p-4">
               {kitchenEssentials.map((item, i) => (
                  <div key={`ke-${i}`} className="min-w-[120px] md:min-w-[180px] flex flex-col rounded-[12px] overflow-hidden shadow-sm bg-white cursor-pointer group">
                     <div className="w-full aspect-square relative">
                        <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                     </div>
                     <div className="w-full bg-[#1e88e5] text-white text-[11px] md:text-[14px] font-bold text-center py-2">
                        {item.name}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Hardware & electricals */}
         <div className="w-full bg-[#f3e5f5] rounded-[16px] overflow-hidden shadow-sm border border-purple-100 relative">
            <div className="w-full bg-[#8e24aa] px-4 py-2 flex justify-between items-center">
               <h3 className="text-white font-bold text-[16px] md:text-[20px]">Hardware & electricals</h3>
               <div className="text-white/40 text-[20px] animate-pulse">✦</div>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-3 p-4">
               {hardwareElectricals.map((item, i) => (
                  <div key={`he-${i}`} className="min-w-[120px] md:min-w-[180px] flex flex-col rounded-[12px] overflow-hidden shadow-sm bg-white cursor-pointer group">
                     <div className="w-full aspect-square relative">
                        <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                     </div>
                     <div className="w-full bg-[#8e24aa] text-white text-[11px] md:text-[14px] font-bold text-center py-2">
                        {item.name}
                     </div>
                  </div>
               ))}
            </div>
         </div>

      </div>

    </div>
  );
};

export default HomeHub;
