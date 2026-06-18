import React from "react";
import Image from "next/image";

const mobileBrands = [
  { name: "iPhone", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=200" },
  { name: "motorola", img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=200" },
  { name: "Samsung", img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=200" },
  { name: "vivo", img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=200" },
  { name: "realme", img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?q=80&w=200" },
  { name: "POCO", img: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=200" },
  { name: "OPPO", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=200" },
  { name: "Ai+", img: "https://images.unsplash.com/photo-1601784551446-20c9e07cd56e?q=80&w=200" },
  { name: "Google", img: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=200" },
  { name: "Nothing", img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=200" }
];

const topDeals = [
  { img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=400", title: "vivo T5x 5G", price: "₹20,999*", action: "Wishlist Now", badge: "Best All-Rounder Smartphone" },
  { img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400", title: "Galaxy S25", price: "₹53,999", action: "Buy Now", badge: "Capture the Night Right Award" },
  { img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400", title: "OPPO K14x 5G", price: "₹14,499", action: "Buy Now", badge: "Fastest Charging Award" }
];

const flagshipReveals = [
  { img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400", name: "Galaxy S25 5G", price: "From ₹53,999" },
  { img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=400", name: "vivo X200T 5G", price: "From ₹49,999*" },
  { img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=400", name: "Nothing Phone (4a)", price: "From ₹31,999*" },
  { img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?q=80&w=400", name: "realme GT 7T", price: "From ₹26,499*" },
  { img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=400", name: "edge 70 ultra", price: "From ₹36,999*" },
];

const justLaunched = [
  { img: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=600", title: "vivo T5 Pro 5G", price: "From ₹4,667/m*", subtitle: "Slimmest 9020 mAh Smartphone*", bg: "bg-[#0c1332]" },
  { img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600", title: "edge 70 pro", price: "From ₹36,999*", subtitle: "Sale is On", bg: "bg-[#0f2c29]" },
  { img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?q=80&w=600", title: "Nova 2 5G", price: "From ₹9,999*", subtitle: "Sale is Live", bg: "bg-[#1d1238]" },
  { img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=600", title: "vivo X300 FE", price: "Pre-Book Now", subtitle: "50MP ZEISS Telephoto Camera", bg: "bg-[#2a3c24]" },
  { img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600", title: "vivo X300 Ultra", price: "Pre-Book Now", subtitle: "200MP ZEISS Gimbal-Like Stabilization", bg: "bg-[#2e1d0f]", highlight: "200 MP" },
];

const premiumDeals = [
  { img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400", name: "Galaxy S25 FE", tagline: "Camera and Creativity", price: "From ₹43,999", award: false },
  { img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=400", name: "vivo X200T", tagline: "50MP Zeiss Telephoto Camera", price: "From ₹49,999*", award: false },
  { img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400", name: "Galaxy S25", tagline: "Capture the Night Right Award", price: "From ₹53,999", award: true },
  { img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=400", name: "edge 70 fusion", tagline: "Pro Shots. Steal Deal", price: "From ₹24,999*", award: false },
];

const midrangeDeals = [
  { img: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=400", name: "moto g96", tagline: "Undisputed All rounder", price: "Just ₹17,999*", award: false },
  { img: "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?q=80&w=400", name: "realme P4X 5G", tagline: "Best Battery Life Smartphone", price: "From ₹16,999*", award: true },
  { img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400", name: "vivo T5x 5G", tagline: "Best All-Rounder Smartphone", price: "From ₹20,999*", award: true },
  { img: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=400", name: "OPPO K14X 5G", tagline: "6500mAh Large Battery", price: "From ₹14,499*", award: false },
];

const budgetDeals = [
  { img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400", name: "Galaxy F06", tagline: "High Resolution 50 MP Camera", price: "From ₹10,499", award: false },
  { img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=400", name: "vivo T4 Lite 5G", tagline: "Best Value 5G Smartphone", price: "Just ₹12,999", award: true },
  { img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400", name: "Galaxy F07", tagline: "6.7 inch PLS LCD display", price: "From ₹9,499", award: false },
  { img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=400", name: "Nova 2 5G", tagline: "Best Camera in the Segment", price: "From ₹9,999*", award: false },
];

const MobilesHub = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-4 mb-6">
      
      {/* Banner 1: NOW OR NEVER */}
      <div className="w-full bg-gradient-to-r from-[#0125aa] via-[#053bd1] to-[#0125aa] rounded-[24px] border-4 border-[#e8c07d] p-4 md:p-8 flex flex-col relative overflow-hidden shadow-lg">
        {/* Decorative elements */}
        <div className="absolute top-4 left-[25%] w-6 h-6 bg-[#ffe854] rounded-full blur-[2px] opacity-80"></div>
        <div className="absolute bottom-8 right-[15%] w-8 h-8 bg-[#ffe854] rounded-full blur-[3px] opacity-80"></div>
        <svg className="absolute right-0 top-0 w-1/3 h-full opacity-60" viewBox="0 0 200 200" preserveAspectRatio="none">
           <path d="M50 200 L150 50 L180 50 L200 20 L200 200 Z" fill="#e8c07d" opacity="0.4" />
           <path d="M40 200 L140 50 L160 50 L180 20 L180 200 Z" fill="#ffea94" opacity="0.8" />
        </svg>

        <div className="flex justify-between items-start z-10">
          {/* Top Left Sasa Lele */}
          <div className="flex flex-col">
             <div className="bg-[#e8ef1e] text-black font-black leading-none p-2 text-xl w-max rounded-sm tracking-tighter">
               SASA<br/>LELE
             </div>
             <div className="bg-black text-white text-[10px] md:text-xs font-semibold px-2 py-1 mt-1 rounded-sm w-max text-center">
               Powered by<br/><span className="text-[12px] md:text-[14px]">SAMSUNG<br/>Galaxy</span>
             </div>
          </div>

          {/* Center Text */}
          <div className="flex flex-col items-center flex-1 mt-2 md:mt-0">
             <h1 className="text-[36px] md:text-[64px] font-black text-[#fff04d] leading-[0.9] tracking-tight drop-shadow-md text-center">
               NOW <br/> <span className="text-[16px] md:text-[24px] text-white my-1 inline-block">OR</span> <br/> NEVER
             </h1>
             <p className="text-white text-[14px] md:text-[20px] font-bold text-center mt-4 tracking-wide max-w-[80%] drop-shadow">
               Your only chance to beat <br/> the <span className="text-[#ffe854]">global price hike</span>
             </p>
          </div>
          
          {/* Right spacer for layout */}
          <div className="hidden md:block w-[120px]"></div>
        </div>
      </div>

      {/* Banner 2: SALE STARTS ON 9TH MAY */}
      <div className="w-full bg-[#032fb8] rounded-[24px] p-5 flex flex-col items-center relative overflow-hidden shadow-md">
         {/* Vertical light rays pattern */}
         <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,white_20px,white_40px)]"></div>
         
         <h2 className="text-[#fff04d] text-[24px] md:text-[32px] font-black tracking-widest z-10 text-center drop-shadow">
           SALE STARTS ON <span className="text-white">9<sup className="text-[14px] md:text-[18px]">TH</sup> MAY</span>
         </h2>
         <p className="text-white text-[16px] md:text-[22px] font-bold z-10 text-center mt-1">
           24hrs early access for PLUS & BLACK members
         </p>

         <div className="bg-white rounded-lg px-4 py-2 mt-4 flex items-center gap-3 z-10 w-max shadow-sm">
           <div className="flex items-center gap-1 font-bold text-[#006cb8] text-xl">
              <div className="w-5 h-5 bg-[#006cb8] rounded-full flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              SBI Card
           </div>
           <div className="w-[1px] h-8 bg-gray-300"></div>
           <div className="flex flex-col">
              <span className="text-[14px] font-bold text-gray-900 leading-tight">10% Instant Discount*</span>
              <span className="text-[10px] text-gray-500 leading-tight">with SBI Credit Card (also valid on EMI Trxns.)</span>
           </div>
         </div>
      </div>

      {/* Mobile Brands Row */}
      <div className="flex overflow-x-auto no-scrollbar gap-3 snap-x py-2">
        {mobileBrands.map((brand, i) => (
          <div key={i} className="min-w-[70px] w-[70px] md:min-w-[85px] md:w-[85px] snap-start flex flex-col items-center cursor-pointer group">
            <div className="w-full aspect-[4/5] bg-white border border-gray-200 rounded-lg p-1.5 shadow-sm relative overflow-hidden mb-2 group-hover:border-[#e84c3d] transition-colors">
              <div className="w-full h-full relative">
                <Image src={brand.img} alt={brand.name} fill className="object-contain group-hover:scale-105 transition-transform" />
              </div>
              {/* Red bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#e84c3d]"></div>
            </div>
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-800 tracking-tight text-center truncate w-full px-1">
              {brand.name}
            </span>
          </div>
        ))}
      </div>

      {/* Ai + Nova Flip 5G Hero Promo */}
      <div className="w-full mt-4 flex flex-col items-center">
        <h2 className="text-[28px] md:text-[40px] font-black text-[#032fb8] tracking-tight text-center leading-none">
          Ai <span className="text-[#2b2b2b]">+</span> Nova Flip <span className="text-[#032fb8]">5G</span>
        </h2>
        <div className="flex items-center gap-2 mt-2 mb-6">
           <span className="text-[24px] md:text-[32px] font-black text-gray-900">Just ₹29,999*</span>
           <span className="text-[18px] md:text-[24px] font-medium text-gray-500 line-through">₹79,999</span>
           <div className="w-[2px] h-8 bg-gray-900 mx-1"></div>
           <span className="text-[24px] md:text-[32px] font-black text-gray-900">Sale Is Live</span>
        </div>

        {/* Large Image Container */}
        <div className="w-full aspect-[4/5] md:aspect-[16/9] relative rounded-[32px] overflow-hidden shadow-md cursor-pointer group border border-gray-100">
           {/* Main Background Image */}
           <Image 
             src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1200" 
             alt="Nova Flip" 
             fill 
             className="object-cover group-hover:scale-[1.02] transition-transform duration-700" 
           />
           
           {/* LIVE Badge */}
           <div className="absolute top-6 right-6 bg-[#e84c3d] text-white px-3 py-1 rounded-[6px] font-bold text-[14px] md:text-[18px] flex items-center gap-2 shadow-lg">
             <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
             LIVE
           </div>

           {/* Superimposed Fake Phone rendering */}
           <div className="absolute top-[30%] left-[10%] md:left-[20%] w-[60%] md:w-[35%] aspect-[5/4] bg-white rounded-2xl shadow-2xl p-2 rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
             <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400" alt="Screen" fill className="object-cover opacity-80" />
                <div className="absolute top-2 right-2 flex gap-1">
                   <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-700"></div>
                   <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-700"></div>
                </div>
                <div className="absolute bottom-2 right-2 text-white font-mono font-bold text-xl">10:08</div>
             </div>
           </div>

           {/* Cutout Man */}
           <div className="absolute -bottom-2 -right-4 md:right-[5%] w-[45%] md:w-[25%] aspect-[3/4] z-10 pointer-events-none drop-shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400" 
                alt="Presenter" 
                fill 
                className="object-cover object-top mask-image-bottom scale-110 group-hover:scale-[1.15] transition-transform duration-500 rounded-t-full" 
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              />
              {/* Added a custom border frame to simulate cutout */}
              <div className="absolute inset-0 border-[6px] border-white rounded-t-full rounded-b-lg mix-blend-overlay"></div>
           </div>
        </div>
      </div>

      {/* Top Text & Badge Row */}
      <div className="w-full flex items-center justify-between mt-8 mb-4">
        <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 leading-tight">
          Buy via Live Stream with Beebom & <br className="md:hidden" /> Get <span className="text-[#006cb8]">₹10,000 Off</span> Instantly!
        </h2>
        <div className="bg-[#006cb8] rounded-[10px] px-3 py-1.5 flex flex-col items-center justify-center text-white relative">
           <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-[#006cb8]">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006cb8" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
           </div>
           <span className="text-[10px] md:text-[12px] font-semibold leading-tight ml-4">Limited Deal:</span>
           <span className="text-[12px] md:text-[14px] font-bold leading-tight ml-4">12 PM - 1PM Only!</span>
        </div>
      </div>

      {/* Hero Banner 1: BIGGEST DEAL */}
      <div className="w-full bg-gradient-to-r from-[#eecfff] to-[#f4f4f4] rounded-[24px] p-6 md:p-10 flex items-center justify-between relative shadow-sm mb-6 overflow-hidden border border-gray-200 cursor-pointer group">
        <div className="flex flex-col z-10 w-1/2">
           <h1 className="text-[40px] md:text-[64px] font-black text-[#fff04d] leading-[0.85] tracking-tighter drop-shadow-md" style={{WebkitTextStroke: "1px black"}}>
             BIGGEST DEAL OF<br/>THE SEASON
           </h1>
           <h3 className="text-[20px] md:text-[28px] font-bold text-black mt-4">iPhone 17</h3>
           <p className="text-[24px] md:text-[40px] font-black text-black leading-none">From ₹71,900*</p>
           <button className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-2 rounded-full w-max mt-4 font-semibold transition-colors border border-gray-300">
             Wishlist now
           </button>
        </div>
        
        <div className="absolute right-[-10%] md:right-[5%] top-1/2 -translate-y-1/2 w-[60%] md:w-[40%] aspect-[4/3] bg-white rounded-3xl shadow-2xl border-4 border-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
           <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-inner z-20"></div>
           <Image src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600" alt="iPhone 17" fill className="object-cover" />
        </div>
      </div>

      {/* Top Deals Horizontal Cards */}
      <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x pb-4 mb-6">
        {topDeals.map((item, i) => (
          <div key={i} className="min-w-[240px] md:min-w-[320px] bg-gradient-to-br from-[#ffdce0] to-[#ffffff] rounded-[20px] border-2 border-[#e8c07d] p-4 flex flex-col relative snap-start cursor-pointer group overflow-hidden">
             <div className="absolute top-0 left-0 bg-[#e8ef1e] text-black text-[9px] font-black px-2 py-1 leading-tight rounded-br-lg z-10">
               SASA<br/>LELE
             </div>
             <div className="absolute top-0 right-4 bg-[#032fb8] text-[#fff04d] text-[10px] font-black px-2 py-1 leading-tight rounded-b-lg z-10 shadow-md">
               EARLY<br/>BIRD<br/><span className="text-white">DEALS</span>
             </div>

             <div className="text-center mt-6 z-10">
               <h4 className="text-[14px] md:text-[18px] font-black text-[#fff04d] leading-none drop-shadow" style={{WebkitTextStroke: "0.5px black"}}>
                 TOP DEALS OF THE SALE
               </h4>
             </div>
             
             <div className="flex justify-between items-end mt-2 z-10 relative">
                <div className="flex flex-col">
                  <h3 className="text-[16px] font-bold text-gray-900">{item.title}</h3>
                  <p className="text-[18px] font-black text-gray-900 mt-1">{item.price}</p>
                  <button className="bg-[#b91c1c] text-white text-[12px] font-bold px-4 py-1.5 rounded-full w-max mt-2 shadow-sm">
                    {item.action}
                  </button>
                </div>
                <div className="w-[80px] h-[100px] relative">
                  <Image src={item.img} alt={item.title} fill className="object-contain group-hover:scale-110 transition-transform" />
                </div>
             </div>

             {/* Award Trophy Mock */}
             <div className="absolute bottom-6 right-2 w-[50px] h-[80px] opacity-90 z-0 drop-shadow-md">
               <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 150 L70 150 L60 200 L40 200 Z" fill="#d4af37"/>
                  <circle cx="50" cy="50" r="40" fill="#fcd34d" />
               </svg>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6px] font-black text-center leading-none text-red-800">AWARD<br/>WINNER</div>
             </div>

             <div className="absolute bottom-0 left-0 w-full bg-[#e84c3d] text-white text-[10px] md:text-[11px] font-bold text-center py-1 rounded-b-[16px]">
               {item.badge}
             </div>
          </div>
        ))}
      </div>

      {/* Hero Banner 2: CRAZIEST DEAL BY SAMSUNG */}
      <div className="w-full bg-gradient-to-r from-[#ffe4e4] to-[#ffedd5] rounded-[24px] p-6 md:p-10 flex items-center justify-between relative shadow-sm mb-8 overflow-hidden cursor-pointer group">
         <div className="flex flex-col z-10 w-[55%]">
            <h1 className="text-[32px] md:text-[52px] font-black text-[#fff04d] leading-[0.85] tracking-tighter drop-shadow-md" style={{WebkitTextStroke: "1px black"}}>
              CRAZIEST DEAL BY
            </h1>
            <h2 className="text-[28px] md:text-[44px] font-black text-black leading-none tracking-tight">
              SAMSUNG
            </h2>
            <h3 className="text-[20px] md:text-[32px] font-bold text-gray-900 mt-4 leading-none">Galaxy F70e 5G</h3>
            <p className="text-[24px] md:text-[40px] font-black text-black mt-1 leading-none">From ₹12,499</p>
            
            <div className="bg-gradient-to-r from-[#e84c3d] to-[#ff7b7b] text-white px-4 py-2 mt-4 rounded-md w-max font-bold shadow-md text-[14px] md:text-[18px]">
              Best Emerging 5G
            </div>
            
            <button className="bg-[#8b0000] text-white px-6 py-2 rounded-[8px] w-max mt-4 font-bold border-2 border-[#ff7b7b] shadow-md hover:bg-red-900 transition-colors">
              Wishlist Now
            </button>
         </div>

         <div className="absolute right-[-5%] bottom-0 w-[50%] h-[110%] flex items-end justify-center z-10 group-hover:scale-105 transition-transform duration-500 origin-bottom">
            <Image src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600" alt="Galaxy F70e 5G" fill className="object-contain object-bottom drop-shadow-2xl" />
         </div>
         {/* Gold blocks mock */}
         <div className="absolute bottom-0 right-0 w-[40%] h-[30%] bg-gradient-to-t from-[#d4af37] to-[#fcd34d] z-0 skew-x-12 translate-x-4 border-l-4 border-yellow-200"></div>
      </div>

      {/* Flagship Reveals */}
      <div>
        <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 mb-4 px-1">Flagship Reveals</h2>
        <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x pb-4 px-1">
          {flagshipReveals.map((item, i) => (
            <div key={i} className="min-w-[160px] md:min-w-[200px] aspect-square rounded-[16px] bg-black p-2 flex flex-col relative snap-start cursor-pointer group overflow-hidden border border-gray-800 shadow-md">
               {/* Small Red ribbons top left */}
               <div className="absolute top-0 left-0 w-8 h-8 z-10">
                 <svg viewBox="0 0 100 100" fill="none"><path d="M0 0 L100 0 L0 100 Z" fill="#e84c3d" /><circle cx="20" cy="20" r="10" fill="white"/></svg>
               </div>
               
               <div className="w-full h-[70%] relative z-0">
                 <Image src={item.img} alt={item.name} fill className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500" />
               </div>
               
               <div className="h-[30%] flex flex-col items-center justify-end pb-1 z-10 bg-gradient-to-t from-black to-transparent">
                  <span className="text-white text-[11px] font-bold truncate w-full text-center">{item.name}</span>
                  <span className="text-white text-[10px] font-medium">{item.price}</span>
               </div>
               
               {/* Small gold trophy mock */}
               <div className="absolute bottom-2 right-2 w-8 h-10 z-10 drop-shadow-md">
                 <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 150 L70 150 L60 200 L40 200 Z" fill="#d4af37"/>
                    <circle cx="50" cy="50" r="40" fill="#fcd34d" />
                 </svg>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Just Launched */}
      <div className="pt-8">
        <h2 className="text-[28px] md:text-[36px] font-black text-gray-900 mb-6 px-1 tracking-tight">Just Launched</h2>
        
        {/* Top row of just launched */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
           {justLaunched.slice(0, 3).map((item, i) => (
             <div key={`launch1-${i}`} className={`w-full h-[180px] md:h-[220px] ${item.bg} rounded-[20px] p-6 flex items-center justify-between relative overflow-hidden shadow-md cursor-pointer group`}>
                <div className="flex flex-col z-10 w-[60%]">
                   <h3 className="text-white text-[24px] md:text-[32px] font-bold leading-none tracking-tight mb-2">{item.title}</h3>
                   <p className="text-gray-300 text-[12px] md:text-[14px] leading-tight mb-3 font-medium">{item.subtitle}</p>
                   <div className="bg-[#eecfff] text-[#1d1238] px-3 py-1 rounded w-max font-bold text-[14px] shadow-sm">
                     {item.price}
                   </div>
                </div>
                <div className="absolute right-[-10%] top-[10%] w-[55%] h-[120%] group-hover:scale-105 transition-transform duration-500 origin-bottom">
                   <Image src={item.img} alt={item.title} fill className="object-contain object-bottom drop-shadow-2xl" />
                </div>
             </div>
           ))}
        </div>
        
        {/* Bottom row of just launched */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {justLaunched.slice(3).map((item, i) => (
             <div key={`launch2-${i}`} className={`w-full h-[200px] md:h-[240px] ${item.bg} rounded-[20px] p-6 md:p-8 flex items-center justify-between relative overflow-hidden shadow-md cursor-pointer group`}>
                <div className="flex flex-col z-10 w-[60%]">
                   <h3 className="text-white text-[28px] md:text-[40px] font-bold leading-none tracking-tight mb-2">{item.title}</h3>
                   <p className="text-gray-300 text-[14px] md:text-[16px] leading-tight mb-4 font-medium max-w-[80%]">{item.subtitle}</p>
                   <div className="bg-[#a3e635] text-gray-900 px-4 py-1.5 rounded w-max font-bold text-[14px] shadow-sm flex items-center gap-2">
                     {item.price}
                   </div>
                </div>
                {item.highlight && (
                  <div className="absolute top-[20%] right-[30%] z-20 text-[32px] md:text-[48px] font-black text-white/90 drop-shadow-lg">
                    {item.highlight}
                  </div>
                )}
                <div className="absolute right-[-5%] top-[15%] w-[60%] h-[100%] group-hover:scale-105 transition-transform duration-500 origin-bottom">
                   <Image src={item.img} alt={item.title} fill className="object-contain object-bottom drop-shadow-2xl" />
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Helper function to render a deals row */}
      {(() => {
        const renderDealsRow = (title, items, bgGradient) => (
          <div className="pt-8">
            <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-4 px-1">{title}</h2>
            <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x pb-4 px-1">
              {items.map((item, i) => (
                <div key={`${title}-${i}`} className={`min-w-[160px] md:min-w-[200px] aspect-[3/4] ${bgGradient} rounded-[20px] p-4 flex flex-col items-center relative snap-start cursor-pointer group overflow-hidden shadow-sm`}>
                   
                   <div className="text-center z-10 w-full mb-2">
                      <p className="text-[12px] font-bold text-gray-800 truncate">{item.name}</p>
                      <p className="text-[10px] text-gray-700 font-medium truncate my-0.5">{item.tagline}</p>
                      <p className="text-[16px] md:text-[18px] font-black text-[#b91c1c] leading-tight">{item.price}</p>
                   </div>
                   
                   <div className="w-full h-[60%] relative z-0 mt-auto group-hover:scale-110 transition-transform duration-500 origin-bottom">
                     <Image src={item.img} alt={item.name} fill className="object-contain object-bottom drop-shadow-lg" />
                   </div>

                   {item.award && (
                     <>
                       <div className="absolute bottom-6 right-2 w-[50px] h-[80px] opacity-100 z-10 drop-shadow-xl">
                         <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 150 L70 150 L60 200 L40 200 Z" fill="#d4af37"/>
                            <circle cx="50" cy="50" r="40" fill="#fcd34d" />
                         </svg>
                       </div>
                       <div className="absolute bottom-2 right-1 bg-[#b91c1c] text-white px-2 py-0.5 text-[8px] font-bold rounded shadow z-20">
                         AWARD WINNER
                       </div>
                     </>
                   )}
                </div>
              ))}
            </div>
          </div>
        );

        return (
          <>
            {renderDealsRow("Premium Smartphones Deals", premiumDeals, "bg-gradient-to-b from-[#fad5d5] to-[#f4b6b6]")}
            {renderDealsRow("Midrange Smartphone Deals", midrangeDeals, "bg-gradient-to-b from-[#fcf9e3] to-[#f6e89e]")}
            {renderDealsRow("Budget Smartphone Deals", budgetDeals, "bg-gradient-to-b from-[#d9e5fc] to-[#a3c2f5]")}
          </>
        );
      })()}

      {/* Motorola Coming Soon Banner */}
      <div className="w-full bg-[#0a0a0a] rounded-[16px] md:rounded-[24px] p-6 md:p-10 flex items-center justify-between relative shadow-lg mt-6 mb-4 overflow-hidden border border-gray-800 cursor-pointer group">
         {/* Red glow background */}
         <div className="absolute top-0 right-[10%] w-[50%] h-[150%] bg-[#ff0055] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
         <div className="flex flex-col z-10">
            <div className="flex items-center gap-2 mb-6">
              {/* Motorola logo mock */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M4 18L12 6l8 12"/></svg>
              </div>
              <span className="text-white text-[20px] font-bold tracking-tight">motorola</span>
            </div>
            <h2 className="text-white text-[28px] md:text-[40px] font-semibold leading-tight tracking-tight">something new <br/> is unfolding</h2>
            <p className="text-white text-[16px] md:text-[20px] mt-4 font-medium">coming soon</p>
         </div>
         <div className="absolute right-[5%] md:right-[15%] w-[40%] md:w-[25%] aspect-[1/2] z-10 rotate-12 group-hover:rotate-[15deg] group-hover:scale-105 transition-all duration-700">
            <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400" alt="Motorola Phone" fill className="object-contain drop-shadow-2xl brightness-150 contrast-125 hue-rotate-[-30deg]" />
         </div>
      </div>

      {/* OPPO Coming Soon Banner */}
      <div className="w-full aspect-[2/1] md:aspect-[2.5/1] bg-gradient-to-br from-[#c4a9a0] to-[#455c7a] rounded-[16px] md:rounded-[24px] p-6 md:p-10 flex flex-col justify-start relative shadow-lg mb-6 overflow-hidden border border-gray-300 cursor-pointer group">
         {/* Background ring reflection mock */}
         <div className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[80%] border-[2px] border-white/20 rounded-[100%] shadow-[inset_0_0_50px_rgba(255,255,255,0.3)] backdrop-blur-sm group-hover:scale-105 transition-transform duration-1000"></div>
         <div className="absolute bottom-0 right-[-10%] w-[120%] h-[40%] bg-gradient-to-t from-black/40 to-transparent"></div>
         
         <div className="z-10">
           <h2 className="text-white text-[32px] md:text-[56px] font-medium leading-[1.1] tracking-tight drop-shadow-md">
             OPPO Find X9 Ultra <br/> OPPO Find X9s
           </h2>
           <div className="bg-white text-black text-[16px] md:text-[20px] font-semibold px-6 py-2 rounded-full w-max mt-6 shadow-md hover:bg-gray-100 transition-colors">
             Coming Soon
           </div>
         </div>
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

      {/* Marriott Bonvoy Ad */}
      <div className="w-full bg-gradient-to-r from-[#5a76e1] via-[#758de9] to-[#c7b4e0] rounded-[16px] md:rounded-[24px] p-6 md:p-8 flex items-center justify-between relative shadow-sm overflow-hidden cursor-pointer group mb-10">
         <div className="flex flex-col z-10 w-[60%] md:w-[40%]">
            <h2 className="text-white text-[20px] md:text-[32px] font-bold leading-tight drop-shadow-sm">
              Enroll and get <br/> exclusive benefits
            </h2>
            <div className="flex items-center gap-2 mt-4 text-white font-bold text-[14px] md:text-[18px]">
              Become a member 
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a76e1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
         </div>
         <div className="absolute right-0 bottom-0 w-[50%] md:w-[60%] h-full z-0 overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" alt="Hotel" fill className="object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#758de9] to-transparent"></div>
            <div className="absolute top-[20%] right-[10%] text-black text-center z-20">
               <span className="text-[10px] md:text-[12px] font-medium tracking-widest leading-none">MARRIOTT</span><br/>
               <span className="text-[16px] md:text-[24px] font-serif font-black tracking-widest leading-none">BONVOY<span className="text-[10px] align-top">®</span></span>
            </div>
         </div>
      </div>

    </div>
  );
};

export default MobilesHub;
