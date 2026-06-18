import React from "react";
import Image from "next/image";

const dealsYouCannotMiss = [
  { img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400", brand: "Roadster", offer: "Under ₹399" },
  { img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=400", brand: "Blurry shirts", offer: "From ₹299" },
  { img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400", brand: "Fastrack | SONATA", offer: "Min. 40% Off" },
  { img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=400", brand: "spoyl", offer: "Min. 70% Off" },
  { img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400", brand: "ACTION", offer: "Under ₹499" }
];

const todaysTopDeals = [
  { img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=400", offer: "Min. 45% Off", title: "PUMA, ADIDAS..." },
  { img: "https://imgs.search.brave.com/ZkNxSLybHTJ_PW8Yr4xlTDIRXi6oipxOVVghSbvGADQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFMVmE3Tk44Wkwu/anBn", offer: "Min. 70% Off", title: "Jompers & more" },
  { img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=400", offer: "Min. 40% Off", title: "Fastrack, Sonata..." },
  { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400", offer: "From ₹199", title: "Stylish tops..." },
  { img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400", offer: "From ₹199", title: "Casual shoes" },
  { img: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=400", offer: "Under ₹399", title: "Paragon, Flite..." }
];

const firstTimeDiscount = [
  { img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400", brand: "PUMA | ADIDAS", offer: "Min. 65% Off", title: "Sports shoes & more" },
  { img: "https://imgs.search.brave.com/LQrOSCc_XCaditEnZAF69Z6C78QlsX2dD6XFzbKKYQI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dmlzaGFsbWVnYW1h/cnQuY29tL2R3L2lt/YWdlL3YyL0JHSFRf/UFJEL29uL2RlbWFu/ZHdhcmUuc3RhdGlj/Ly0vU2l0ZXMtdm1t/LWFwcGFyZWwtbWFz/dGVyLWNhdGFsb2cv/ZGVmYXVsdC9kdzMx/N2YzMjI3L2ltYWdl/cy9sYXJnZS8xMTE0/MTI1MjM2MDAyLmpw/Zz9zdz00MDAmc2g9/NDAw", brand: "REDTAPE | MUFTI", offer: "Upto 80% Off", title: "Casual Shirts" },
  { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400", brand: "BIBA | aurelia", offer: "Min. 60% Off", title: "Kurta sets, kurtis" },
  { img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=400", brand: "Janasya", offer: "Min. 65% Off", title: "Dresses, tops" }
];

const styleInMotion = [
  { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400", brand: "BERRYLICIOUS", offer: "Min. 65% Off" },
  { img: "https://imgs.search.brave.com/MbkkuIOC8Z3Afqx-uP15WcebAY8G79_7O4S3Dwr72oo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvZXRobmljLXNl/dC9mL3cvMy94eGwt/aWVzdHIxMjI2Ny1p/bmRvLWVyYS1vcmln/aW5hbC1pbWFoZ2Vw/dW56c3Fmd3ByLmpw/ZWc_cT03MA", brand: "indo era", offer: "Min. 75% Off" },
  { img: "https://imgs.search.brave.com/hNieFLEhMAhXEHqxSRw0NRtQcJ_pan8IZLawwn_585s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubXludGFzc2V0/cy5jb20vZHByXzIs/cV82MCx3XzIxMCxj/X2xpbWl0LGZsX3By/b2dyZXNzaXZlL2Fz/c2V0cy9pbWFnZXMv/Mjg1OTQxMzIvMjAy/NC8zLzMwLzFmNTk2/ZmI0LTdkYjEtNDg3/Yy05ZDE4LThlZWM3/OGM2OGQ3MzE3MTE4/MDU4NzUxNzhISUdI/TEFOREVSTWVuU2xp/bUZpdFRhcnRhbkNo/ZWNrc09wYXF1ZUNo/ZWNrZWRDYXN1YWxT/aGlydDEuanBn", brand: "HIGHLANDER", offer: "Min. 70% Off" },
  { img: "https://imgs.search.brave.com/RTs76MwzwaV8hJVwMLA0ILIlhbaeKqcRNAo8qFjIazo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bGl0dGxlYmxhY2tk/cmVzcy5jby51ay9j/ZG4vc2hvcC9maWxl/cy9KYW51cy1EcmVz/cy0tLUFxdWEtXzIu/anBnP3Y9MTc0Mjkx/NDMwOSZ3aWR0aD0x/MTAw", brand: "ATOM", offer: "Min. 50% Off" },
  { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400", brand: "VIRGIO", offer: "Min. 60% Off" }
];

const celebrityBrands = [
  { img: "https://images.unsplash.com/photo-1583391733958-d1507001bb05?q=80&w=400", title: "Kriti Sanon", subtitle: "Multi colour handbag", offer: "Min. 70% Off" },
  { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400", title: "Kareena Kapoor", subtitle: "Sequin sarees", offer: "Min. 70% Off" },
  { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400", title: "Pooja Hegde", subtitle: "Statement jewellery", offer: "From ₹149" },
  { img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=400", title: "Vikrant Massey", subtitle: "Textured polos", offer: "From ₹249" },
];

const momApprovedTrends = [
  { img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400", tag: "Work look", title: "Solid co-ords & more", offer: "From ₹249" },
  { img: "https://images.unsplash.com/photo-1583391265517-35bbd070b431?q=80&w=400", tag: "Day out", title: "Jaipuri chikankari...", offer: "Min. 50% Off" },
  { img: "https://images.unsplash.com/photo-1634643836960-c345b3c3e998?q=80&w=400", tag: "Travel-ready", title: "Pastel printed sets...", offer: "Min. 50% Off" },
  { img: "https://images.unsplash.com/photo-1610189013039-163013b8600d?q=80&w=400", tag: "Classic vibes", title: "Banarasi, brocade...", offer: "Min. 60% Off" },
  { img: "https://images.unsplash.com/photo-1515347619362-67fd8fc542f5?q=80&w=400", tag: "Fitness freak", title: "Activity sets", offer: "Up to 70% Off" },
];

const specialGifts = [
  { img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400", title: "Enamel bangles", offer: "Min. 50% Off" },
  { img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400", title: "Rajwadi kadas", offer: "From ₹199" },
  { img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400", title: "Sleek chain watches", offer: "From ₹149" },
  { img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?q=80&w=400", title: "Diamond stud watches", offer: "From ₹149" },
  { img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=400", title: "Leather bags", offer: "Up to 70% Off" },
];

const FashionDeals = () => {
  return (
    <div className="w-full flex flex-col gap-12 py-4 mb-10 overflow-hidden">

      {/* SECTION 1: Deals you cannot miss! */}
      <div>
        <h2 className="text-[20px] font-bold text-gray-900 mb-4 tracking-tight px-1">Deals you cannot miss!</h2>
        <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x pb-4 px-1">
          {dealsYouCannotMiss.map((item, i) => (
            <div key={i} className="min-w-[160px] sm:min-w-[190px] w-[190px] snap-start flex flex-col rounded-[12px] overflow-hidden bg-gray-100 relative group cursor-pointer shadow-sm border border-gray-100">
              <div className="w-full h-[220px] relative overflow-hidden">
                <Image src={item.img} alt={item.brand} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute bottom-[36px] left-1/2 -translate-x-1/2 bg-white/95 px-3 py-1 rounded shadow-sm text-xs font-bold text-gray-800 whitespace-nowrap z-10">
                {item.brand}
              </div>
              <div className="w-full bg-[#e84c3d] text-white text-center py-2.5 font-bold text-[15px] z-0">
                {item.offer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Today's top deals */}
      <div className="bg-[#e4ebce] rounded-[16px] p-4 relative">
        <h2 className="text-[18px] font-bold text-gray-900 mb-4 tracking-tight">Today's top deals</h2>
        <div className="flex overflow-x-auto no-scrollbar gap-3 snap-x pb-2">
          {todaysTopDeals.map((item, i) => (
            <div key={i} className="min-w-[140px] sm:min-w-[160px] snap-start flex flex-col cursor-pointer group">
              <div className="w-full aspect-[4/5] rounded-[12px] overflow-hidden relative mb-2 shadow-sm border border-black/5 bg-white">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-2.5 py-1 rounded-full shadow-md text-xs font-bold text-gray-900 whitespace-nowrap z-10 w-11/12 text-center">
                  {item.offer}
                </div>
              </div>
              <div className="text-center text-[13px] font-semibold text-gray-800 tracking-tight px-1 truncate">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: First Time on Discount */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x pb-4 px-1">
        {/* Big Promotional Tile */}
        <div className="min-w-[200px] w-[200px] bg-[#dff3ff] rounded-[16px] p-5 flex flex-col justify-center items-center text-center snap-start shrink-0 relative overflow-hidden">
          <div className="text-[12px] font-bold tracking-widest text-[#d97d41] mb-2 uppercase z-10 bg-white px-2 py-1 rounded">First time on</div>
          <div className="text-[24px] font-black leading-none text-gray-900 mb-1 z-10">DISCOUNT</div>
          <div className="text-[32px] font-black leading-none text-gray-900 mb-6 z-10">50-80%<br />OFF</div>
          <button className="bg-gray-800 text-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-black z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>
          {/* Decorative flower */}
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400 rounded-full blur-xl opacity-30"></div>
        </div>

        {/* Product Cards */}
        {firstTimeDiscount.map((item, i) => (
          <div key={i} className="min-w-[180px] w-[180px] snap-start flex flex-col cursor-pointer group relative shrink-0">
            {/* Small floral border decoration */}
            <div className="absolute -top-2 -left-2 w-10 h-10 z-20 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" fill="#a5d6a7" opacity="0.8" />
              </svg>
            </div>

            <div className="w-full aspect-[3/4] rounded-[16px] overflow-hidden relative mb-2 shadow-sm bg-gray-50 border border-gray-100">
              <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 px-2 py-1 rounded shadow-sm text-[11px] font-bold text-gray-800 whitespace-nowrap z-10">
                {item.brand}
              </div>
            </div>
            <div className="text-center font-bold text-[15px] text-gray-900 leading-tight">
              {item.offer}
            </div>
            <div className="text-center text-[12px] font-medium text-gray-500 truncate">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 4: Style in Motion */}
      <div>
        <h2 className="text-[20px] font-bold text-gray-900 mb-4 tracking-tight px-1">Style in Motion</h2>
        <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x pb-4 px-1">
          {styleInMotion.map((item, i) => (
            <div key={i} className="min-w-[160px] sm:min-w-[200px] w-[200px] snap-start flex flex-col cursor-pointer group">
              <div className="w-full aspect-[4/5] rounded-[12px] overflow-hidden relative shadow-sm border border-gray-100 mb-3 bg-gray-100">
                <Image src={item.img} alt={item.brand} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="font-extrabold text-[12px] text-gray-800 uppercase tracking-tight truncate max-w-[60%]">{item.brand}</span>
                <span className="font-bold text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-sm">{item.offer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: Summer Specials Banner */}
      <div className="w-full h-[140px] md:h-[180px] bg-[#fbf9f3] rounded-[12px] border border-[#e8e4d9] relative overflow-hidden flex items-center justify-center cursor-pointer shadow-sm group">
        <div className="absolute top-4 left-6 opacity-80 w-12 md:w-20">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 20 Q 50 0 70 20 T 50 80 Q 30 60 30 20" stroke="#a3b899" strokeWidth="4" fill="transparent" />
            <circle cx="35" cy="75" r="12" fill="#e88585" />
          </svg>
        </div>
        <div className="text-center group-hover:scale-105 transition-transform duration-500">
          <h1 className="text-[36px] md:text-[52px] font-serif font-medium tracking-widest text-black leading-none mb-1">SUMMER</h1>
          <h3 className="text-[18px] md:text-[24px] tracking-[0.2em] font-medium text-black">SPECIALS</h3>
        </div>
        <div className="absolute -bottom-10 -right-6 opacity-60 w-32 md:w-48">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 180 Q 100 120 180 80 Q 220 150 150 180" fill="#a3b899" />
            <path d="M120 190 Q 70 140 140 100 Q 180 160 120 190" fill="#c3d4b8" />
          </svg>
        </div>
      </div>

      {/* SECTION 6: CELEBRITY FEATURED BRANDS */}
      <div className="flex flex-col items-center pt-8">
        <div className="flex items-center gap-1 mb-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2"><path d="M12 2L15 9l7 1-5 5 1.5 7.5L12 18l-6.5 4.5L7 15l-5-5 7-1z" /></svg>
          <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-black tracking-wide">CELEBRITY</h2>
        </div>
        <h3 className="text-[16px] md:text-[20px] font-semibold text-gray-900 tracking-widest mb-6">FEATURED BRANDS</h3>

        <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x pb-4 px-1 w-full">
          {celebrityBrands.map((item, i) => (
            <div key={i} className="min-w-[160px] sm:min-w-[200px] w-[200px] snap-start flex flex-col cursor-pointer group relative">
              <div className="w-full aspect-[3/4] rounded-[16px] overflow-hidden relative mb-2 shadow-sm">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-0 right-0 w-2/3 p-3 text-right bg-gradient-to-l from-white/80 to-transparent">
                  <p className="text-[14px] font-serif font-bold text-[#b91c1c] leading-tight">{item.title}</p>
                  <p className="text-[11px] font-medium text-gray-700 leading-tight my-1">{item.subtitle}</p>
                  <p className="text-[12px] font-bold text-gray-900">{item.offer}</p>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-0.5 rounded shadow-sm">
                  <span className="text-[10px] font-bold text-[#dc2626] tracking-widest">FILMFARE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 7: MOM-APPROVED TRENDS */}
      <div className="pt-6">
        <div className="w-full h-[100px] md:h-[120px] bg-gradient-to-r from-[#ffd1d1] via-[#ffe8c3] to-[#fcebb6] rounded-[20px] flex flex-col items-center justify-center mb-6 shadow-sm overflow-hidden relative">
          <h3 className="text-[18px] md:text-[24px] font-semibold text-gray-900 tracking-widest z-10">MOM-APPROVED</h3>
          <h1 className="text-[40px] md:text-[56px] font-serif text-[#d6336c] leading-none tracking-wide z-10 flex items-center">
            TR<span className="relative inline-flex justify-center items-center text-[#d6336c] mx-1 font-sans">E<svg className="absolute w-6 h-6 text-[#d6336c] opacity-30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9l7 1-5 5 1.5 7.5L12 18l-6.5 4.5L7 15l-5-5 7-1z" /></svg></span>NDS
          </h1>
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x pb-4 px-1">
          {momApprovedTrends.map((item, i) => (
            <div key={i} className="min-w-[160px] sm:min-w-[180px] w-[180px] snap-start flex flex-col rounded-[16px] overflow-hidden bg-white shadow-sm border border-gray-100 cursor-pointer group">
              <div className="w-full aspect-square relative overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-2 left-2 bg-white/95 px-2 py-1 text-[11px] font-bold text-gray-800 rounded shadow-sm">
                  {item.tag}
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#ffe4e4] to-[#ffedd5] p-3 text-center relative overflow-hidden">
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-300 rounded-full blur-xl opacity-40"></div>
                <h4 className="text-[13px] font-serif font-bold text-[#b91c1c] truncate">{item.title}</h4>
                <p className="text-[12px] font-bold text-gray-900 mt-0.5">{item.offer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 8: SPECIAL GIFTS FOR MOM */}
      <div className="pt-6">
        <div className="w-full h-[100px] md:h-[120px] bg-gradient-to-r from-[#ffd1d1] via-[#ffe8c3] to-[#fcebb6] rounded-[20px] flex flex-col items-center justify-center mb-6 shadow-sm">
          <h3 className="text-[18px] md:text-[24px] font-semibold text-gray-900 tracking-widest uppercase">Special Gifts For</h3>
          <h1 className="text-[40px] md:text-[56px] font-serif text-[#d6336c] leading-none tracking-wide flex items-center">
            M<svg className="w-10 h-10 mx-1 text-[#d6336c]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>M
          </h1>
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x pb-4 px-1">
          {specialGifts.map((item, i) => (
            <div key={i} className="min-w-[160px] sm:min-w-[180px] w-[180px] snap-start flex flex-col rounded-[16px] overflow-hidden bg-white shadow-sm border border-gray-100 cursor-pointer group">
              <div className="w-full aspect-square relative overflow-hidden bg-gray-50">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="bg-gradient-to-r from-[#ffe4e4] to-[#ffedd5] p-3 text-center relative overflow-hidden">
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-300 rounded-full blur-xl opacity-40"></div>
                <h4 className="text-[12px] font-medium text-gray-800 truncate">{item.title}</h4>
                <p className="text-[13px] font-bold text-[#b91c1c] mt-0.5">{item.offer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FashionDeals;
