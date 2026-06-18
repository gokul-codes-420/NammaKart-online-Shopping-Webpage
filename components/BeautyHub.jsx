import React from "react";
import Image from "next/image";

const topBanners = [
  { img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800", title: "Sun-care Paglu Sale", subtitle: "Up to 75% Off", bg: "bg-gradient-to-r from-[#ffd35b] to-[#fdb641]", textColor: "text-white" },
  { img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800", title: "AQUA-GEL SUNSCREEN", subtitle: "Lightweight for oily skin", bg: "bg-gradient-to-r from-[#00b4db] to-[#0083b0]", textColor: "text-white" },
  { img: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=800", title: "Fit Me Glow BB Cream", subtitle: "Upto 24H Hydrated Glow", bg: "bg-gradient-to-r from-[#4e342e] to-[#3e2723]", textColor: "text-gray-200" }
];

const beautyCategories = [
  { name: "Skin Care", img: "https://images.unsplash.com/photo-1556228720-192a6af4e86e?q=80&w=200" },
  { name: "Top 25 deals", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=200", isText: true },
  { name: "Hair Care", img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=200" },
  { name: "Makeup", img: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=200" },
  { name: "Mens grooming", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=200" },
  { name: "Fragrances", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=200" },
  { name: "Premium", img: "https://images.unsplash.com/photo-1571781926291-c477eb31f7c4?q=80&w=200" },
  { name: "Personal care", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=200" },
  { name: "Derma", img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=200" },
  { name: "Hygiene", img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=200" }
];

const rushHourDeals = [
  { img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=300", category: "Sunscreens", offer: "Under ₹349" },
  { img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=300", category: "Perfumes", offer: "Min. 50% Off" },
  { img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=300", category: "Shampoos", offer: "Min. 35% Off" },
  { img: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=300", category: "Deodorants", offer: "Up to 85% Off" },
  { img: "https://images.unsplash.com/photo-1556228720-192a6af4e86e?q=80&w=300", category: "Face washes", offer: "Under ₹199" },
  { img: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=300", category: "Makeup essentials", offer: "Under ₹399" }
];

const mothersDayDeals = [
  { img: "https://images.unsplash.com/photo-1571781926291-c477eb31f7c4?q=80&w=300", category: "Skincare prep", offer: "Up to 75% Off" },
  { img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=300", category: "Glass skin", offer: "Under ₹399" },
  { img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=300", category: "Niacinamide glow", offer: "Up to 65% Off" },
  { img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=300", category: "Fragrance combos", offer: "Up to 80% Off" },
  { img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=300", category: "Fresh notes", offer: "Under ₹399" },
  { img: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=300", category: "Cosmic glow", offer: "Up to 80% Off" }
];

const trendingBrands = [
  { logoText: "Cetaphil", logoColor: "text-[#005a9c] font-bold", img: "https://images.unsplash.com/photo-1556228720-192a6af4e86e?q=80&w=300", offer: "Up to 35% Off" },
  { logoText: "derma co", logoColor: "text-black font-bold", img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=300", offer: "Up to 50% Off" },
  { logoText: "Clean & Clear", logoColor: "text-[#0033a0] font-black", img: "https://images.unsplash.com/photo-1571781926291-c477eb31f7c4?q=80&w=300", offer: "Up to 60% Off" },
  { logoText: "SWISS BEAUTY", logoColor: "text-gray-800 font-serif", img: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=300", offer: "Up to 50% Off" },
  { logoText: "CeraVe", logoColor: "text-[#005a9c] font-black tracking-tight", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=300", offer: "Up to 15% Off" },
  { logoText: "PLIX", logoColor: "text-black font-black text-xl", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300", offer: "Up to 50% Off" },
  { logoText: "FOGG", logoColor: "text-[#d4af37] font-black", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=300", offer: "Up to 60% Off" },
  { logoText: "WishCare", logoColor: "text-[#006e51] font-bold", img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=300", offer: "Flat ₹242" },
];

const discountsForYou = [
  { img: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=300", title: "Electronic Foot Filer", offer: "Min. 20% Off" },
  { img: "https://images.unsplash.com/photo-1512496015851-a1cbf486ba97?q=80&w=300", title: "Eyeshadow", offer: "Min. 50% Off" },
  { img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=300", title: "Oil And Wax Heater", offer: "Min. 50% Off" },
  { img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=300", title: "Makeup Pencil Sharpener", offer: "Min. 50% Off" }
];

const bestQuality = [
  { img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300", title: "Nail Filer", offer: "Don't Miss" },
  { img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=300", title: "Eau De Cologne", offer: "Best Deals" },
  { img: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=300", title: "Face Serums", offer: "New Collection" },
  { img: "https://images.unsplash.com/photo-1556228720-192a6af4e86e?q=80&w=300", title: "Cotton Pad", offer: "Grab Now" }
];

const topRated = [
  { img: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=300", title: "Shaving Foam", offer: "Popular" },
  { img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=300", title: "Hair Care And Accessory", offer: "Explore Now" },
  { img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=300", title: "Women's Personal Hygiene", offer: "Hand-picked" },
  { img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=300", title: "Eye Care", offer: "New Range" }
];

const BeautyHub = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-4 mb-6">
      
      {/* Top Scrollable Banners */}
      <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x">
        {topBanners.map((banner, i) => (
          <div key={`tb-${i}`} className={`min-w-[300px] md:min-w-[450px] aspect-[2.2/1] rounded-[16px] overflow-hidden snap-start relative shadow-md cursor-pointer group ${banner.bg}`}>
            <div className="absolute right-0 top-0 w-[55%] h-full">
              <Image src={banner.img} alt={banner.title} fill className="object-cover object-left opacity-90 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent mix-blend-overlay pointer-events-none"></div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-[50%]">
               <h3 className={`${banner.textColor} text-[22px] md:text-[28px] font-black leading-tight drop-shadow-md`}>{banner.title}</h3>
               <div className="bg-white/20 backdrop-blur-sm px-3 py-1 mt-2 w-max rounded text-white text-[12px] md:text-[14px] font-bold">
                 {banner.subtitle}
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Icons Row */}
      <div className="flex overflow-x-auto no-scrollbar gap-3 snap-x py-2">
        {beautyCategories.map((cat, i) => (
          <div key={`cat-${i}`} className="min-w-[70px] w-[70px] md:min-w-[85px] md:w-[85px] snap-start flex flex-col items-center cursor-pointer group">
            <div className="w-full aspect-square bg-[#fff04d] rounded-[16px] p-2 flex items-center justify-center relative overflow-hidden mb-2 group-hover:-translate-y-1 transition-transform border-[3px] border-[#032fb8] shadow-sm">
              {cat.isText ? (
                <div className="flex flex-col items-center justify-center w-full h-full bg-[#00a2ed] rounded-lg text-white">
                  <span className="text-[10px] font-bold">Top</span>
                  <span className="text-[20px] font-black leading-none">25</span>
                  <span className="text-[8px] font-bold">Deals</span>
                </div>
              ) : (
                <div className="w-full h-full relative bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image src={cat.img} alt={cat.name} fill className="object-cover" />
                </div>
              )}
            </div>
            <span className="text-[10px] md:text-[11px] font-bold text-gray-800 tracking-tight text-center leading-tight truncate w-full px-1">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* Match Mania Banner */}
      <div className="w-full aspect-[2.5/1] md:aspect-[3/1] bg-gradient-to-b from-[#0a48d1] to-[#3a75f8] rounded-[24px] relative overflow-hidden shadow-lg cursor-pointer group my-2">
         {/* Stadium pattern mock */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.8),transparent_70%)]"></div>
         <div className="absolute bottom-0 w-full h-[40%] bg-[#ff7ba3] origin-bottom scale-y-[1.2] -skew-y-3 z-0"></div>
         
         <div className="absolute left-6 md:left-12 top-[15%] md:top-[25%] z-10">
            <h1 className="text-white text-[32px] md:text-[56px] font-black tracking-tight drop-shadow-md">Match mania!</h1>
            <p className="text-white text-[16px] md:text-[24px] font-medium mt-1">Crazy deals during the match</p>
            <div className="bg-white text-black font-bold text-[14px] md:text-[20px] px-6 py-2 rounded-lg w-max mt-6 shadow-lg group-hover:scale-105 transition-transform">
               7:30PM onwards
            </div>
         </div>
         <div className="absolute right-[5%] bottom-[10%] w-[40%] md:w-[30%] aspect-square z-10 group-hover:-translate-y-2 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=400" alt="Products" fill className="object-contain drop-shadow-2xl brightness-110" />
         </div>
      </div>

      {/* Rush Hour Deals */}
      <div className="w-full bg-gradient-to-r from-[#ffe400] to-[#ffcc00] rounded-[20px] p-4 md:p-6 shadow-md relative overflow-hidden mb-2">
         {/* Lightning graphic mock */}
         <div className="absolute right-[-5%] top-[-10%] w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white rounded-full opacity-20 blur-2xl"></div>
         
         <div className="flex items-center gap-4 mb-6 relative z-10">
            <h2 className="text-[20px] md:text-[28px] font-black text-gray-900 tracking-tight">Rush hour deals</h2>
            <div className="bg-[#032fb8] text-white text-[12px] md:text-[14px] font-bold px-3 py-1 rounded">
               00d : 21h : 35m : 30s
            </div>
         </div>

         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x relative z-10">
            {rushHourDeals.map((deal, i) => (
              <div key={`rush-${i}`} className="min-w-[130px] md:min-w-[160px] flex flex-col items-center snap-start cursor-pointer group">
                 <div className="w-full aspect-[4/5] bg-white rounded-t-[16px] p-2 flex items-center justify-center relative overflow-hidden">
                    <Image src={deal.img} alt={deal.category} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="w-full flex flex-col">
                    <div className="w-full bg-gradient-to-r from-[#ff4d4d] to-[#ff6b6b] text-white text-[12px] md:text-[14px] font-bold text-center py-1.5 shadow-[0_-4px_10px_rgba(255,0,0,0.2)] z-10">
                       {deal.category}
                    </div>
                    <div className="w-full bg-[#ffcc00] text-gray-900 text-[14px] md:text-[16px] font-black text-center py-2 rounded-b-[16px] shadow-sm">
                       {deal.offer}
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* SALE STARTS Banner */}
      <div className="w-full bg-[#031d8c] rounded-[20px] p-6 md:p-8 flex items-center justify-between relative shadow-lg overflow-hidden cursor-pointer group my-2 border border-[#1a38b5]">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_2px)] bg-[size:16px_16px]"></div>
         <div className="flex items-center gap-6 z-10 w-full">
            <div className="bg-[#e8ef1e] text-black font-black leading-none p-3 text-[28px] md:text-[40px] rounded shrink-0 shadow-lg tracking-tighter">
               SASA<br/>LELE
            </div>
            <div className="flex flex-col flex-1 items-center justify-center">
               <h2 className="text-white text-[24px] md:text-[48px] font-black tracking-widest text-center leading-none drop-shadow-md">
                 SALE STARTS <br/> <span className="text-[#fff04d]">ON 9<sup className="text-[14px] md:text-[24px]">TH</sup> MAY</span>
               </h2>
               <p className="text-white text-[12px] md:text-[20px] font-bold text-center mt-3 tracking-wide">
                 24 hrs early access for PLUS & BLACK members
               </p>
            </div>
         </div>
      </div>

      {/* Mother's Day Boutique */}
      <div className="w-full bg-gradient-to-r from-[#ff4d6d] to-[#ff758c] rounded-[20px] p-4 md:p-6 shadow-md relative overflow-hidden">
         <h2 className="text-[20px] md:text-[28px] font-black text-white tracking-tight mb-6">The Mother’s day boutique</h2>
         
         <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x relative z-10">
            {mothersDayDeals.map((deal, i) => (
              <div key={`mom-${i}`} className="min-w-[130px] md:min-w-[160px] flex flex-col items-center snap-start cursor-pointer group">
                 {/* Arch shape window */}
                 <div className="w-full aspect-square bg-[#fff5f7] p-2 flex items-center justify-center relative overflow-hidden shadow-inner" style={{ borderTopLeftRadius: '50%', borderTopRightRadius: '50%', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>
                    <div className="absolute inset-1 border-[2px] border-[#ffb3c1] opacity-50" style={{ borderTopLeftRadius: '50%', borderTopRightRadius: '50%', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}></div>
                    <Image src={deal.img} alt={deal.category} fill className="object-cover p-4 group-hover:scale-110 transition-transform duration-500" />
                 </div>
                 
                 <div className="w-full flex flex-col mt-[-10px] z-10">
                    <div className="w-full bg-[#ff4d6d] text-white text-[12px] md:text-[14px] font-bold text-center py-1.5 rounded-[12px] shadow-md border-2 border-[#ff758c]">
                       {deal.offer}
                    </div>
                    <div className="w-full text-white text-[12px] md:text-[14px] font-bold text-center py-2">
                       {deal.category}
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* Trending brands */}
      <div className="pt-8 mb-8">
         <h2 className="text-[20px] md:text-[28px] font-black text-gray-900 tracking-tight mb-8">Trending brands</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-6">
            {trendingBrands.map((brand, i) => (
               <div key={`brand-${i}`} className="flex flex-col items-center cursor-pointer group">
                  <div className="w-full aspect-[4/3] md:aspect-square bg-gradient-to-br from-[#ffa1b9] to-[#ff5c82] rounded-[24px] relative flex justify-center items-end pb-4 shadow-md group-hover:-translate-y-1 transition-transform">
                     {/* Top-left floating badge */}
                     <div className="absolute top-[-10px] left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-[12px] shadow-sm z-20 flex items-center justify-center border border-pink-100">
                        <span className={`text-[12px] md:text-[16px] leading-none ${brand.logoColor}`}>{brand.logoText}</span>
                     </div>
                     <div className="absolute inset-0 w-full h-[90%] bottom-0 mt-auto flex justify-center overflow-hidden">
                        <div className="w-[80%] h-[120%] relative group-hover:scale-105 transition-transform origin-bottom duration-500">
                           <Image src={brand.img} alt={brand.logoText} fill className="object-contain object-bottom drop-shadow-xl" />
                        </div>
                     </div>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[16px] md:text-[20px] mt-4 tracking-tight">{brand.offer}</h3>
               </div>
            ))}
         </div>
      </div>

      {/* Reusable purple section helper */}
      {(() => {
        const renderPurpleSection = (title, items) => (
          <div className="w-full bg-[#d6cbf5] rounded-[16px] md:rounded-[24px] p-2 md:p-4 mb-6 shadow-sm">
             <div className="flex items-center justify-between px-2 md:px-4 mb-4 mt-2">
                <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 tracking-tight">{title}</h2>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
             </div>
             <div className="bg-white rounded-[12px] md:rounded-[20px] p-2 md:p-4 flex overflow-x-auto no-scrollbar gap-4 snap-x">
                {items.map((item, i) => (
                  <div key={`${title}-${i}`} className="min-w-[140px] md:min-w-[200px] flex-1 flex flex-col snap-start cursor-pointer group">
                     <div className="w-full aspect-[4/3] md:aspect-[3/2] bg-[#f5f5f5] rounded-[12px] p-2 flex items-center justify-center relative overflow-hidden mb-3">
                        <Image src={item.img} alt={item.title} fill className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <h3 className="text-gray-800 text-[12px] md:text-[14px] font-medium leading-tight truncate px-1">{item.title}</h3>
                     <p className="text-gray-900 text-[14px] md:text-[16px] font-bold mt-1 px-1">{item.offer}</p>
                  </div>
                ))}
             </div>
          </div>
        );

        return (
          <div className="flex flex-col gap-2">
            {renderPurpleSection("Discounts for you", discountsForYou)}
            {renderPurpleSection("Best quality", bestQuality)}
            {renderPurpleSection("Top Rated", topRated)}
          </div>
        );
      })()}

    </div>
  );
};

export default BeautyHub;
