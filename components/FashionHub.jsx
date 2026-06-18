import React from 'react';
import Image from 'next/image';

const banners = [
  {
    id: 1,
    title: "Sports shoes, slippers...",
    discount: "Min. 60% Off",
    brands: "PUMA | Reebok",
    image: "https://imgs.search.brave.com/9kLdOYKt5tbFk02B-VM2Hr6URaZwQgNxnh-Mb6IpxAQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1lYS5sYW5kbWFy/a3Nob3BzLmluL2Nk/bi1jZ2kvaW1hZ2Uv/aD03Mzksdz00OTks/cT04NSxmaXQ9Y292/ZXIvbWF4LW5ldy8x/MDAwMDE2MTA2MzEy/LUdyZXktR1JFWS0x/MDAwMDE2MTA2MzEy/XzAxLTIxMDAuanBn",
    bgColor: "bg-[#fff7cc]"
  },
  {
    id: 2,
    title: "Slay-worthy picks",
    subtitle: "Trendy anarkalis",
    discount: "Min. 70% Off",
    image: "https://imgs.search.brave.com/pPma53MpTNPfS2GGMSA00MSGhBRpFg9D3SPoEsIu16M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNjYy/NDA4OC5qcGc",
    bgColor: "bg-[#fff7cc]"
  },
  {
    id: 3,
    title: "Trolley bags",
    brands: "Safari | VIP",
    discount: "Min. 70% Off",
    image: "https://imgs.search.brave.com/fWfISCxeRei5Gc5oF_wKIM4YlATk44dQtw4vZa9v_WU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYWZh/cmliYWdzLmNvbS9j/ZG4vc2hvcC9maWxl/cy9Qb2xhcmlzLXBy/bzFfMTAyNHguanBn/P3Y9MTcxNzU3NzUy/NQ",
    bgColor: "bg-[#fff7cc]"
  }
];

const subcategories = [
  { name: "Wedding Store", image: "https://imgs.search.brave.com/xyvTkXZf_TY5p1SvDKWVghLsBStfTaPzLZifIFdVy7U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ib21i/YXlzZWxlY3Rpb25z/LmluL2Nkbi9zaG9w/L2ZpbGVzLzA2M0Ew/NjEyLmpwZz92PTE3/NzMxMzYyODMmd2lk/dGg9MTAwMA" },
  { name: "Shirts, Tshirts", image: "https://imgs.search.brave.com/TwoHUaNbxcs2cP4vyH--lgqPrvz9ZjPwovMb7MdnQEE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhiLzNk/LzUxLzhiM2Q1MTkw/MzRmZTJkNDNhNjVk/YmMwYzllMTJjMGM3/LmpwZw" },
  { name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200" },
  { name: "Sports Shoes", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=200" },
  { name: "Watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=200" },
  { name: "Kids' clothing", image: "https://imgs.search.brave.com/0OrtCKwleHVHCJwBNpwVX563LKB428mcyOG_Esi4vMQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGFu/d2VsbHNraWRzLmlu/L2Nkbi9zaG9wL2Zp/bGVzLzFfZGEzMjk1/ZmEtMjEyMy00Nzdm/LWI4MTItOGViNzRm/MmNmNGQ2LmpwZz92/PTE3NjUwMTk1NTkm/d2lkdGg9MTA4MA" },
  { name: "Luggage", image: "https://imgs.search.brave.com/mTRKm-3ZwboM60boifxYeLABJizf8h2hMU_6BzOLy6g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9sdWdnYWdl/LXN1aXRjYXNlLW9u/LWNvbnZleW9yLXdh/aXQtMjYwbnctMjMx/NjE4NzM1MS5qcGc" },
  { name: "Kurtas", image: "https://imgs.search.brave.com/UOIBZEQVKuoxhIEXYu05OSc5IWvOs11gY3udfoY2Lj0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jaGlk/aXlhYS5jb20vY2Ru/L3Nob3AvZmlsZXMv/ODBfYjYxMTE4NTMt/OTY0Ny00YTFmLTg1/MTgtOGI2ZjliNjdm/MWEwLmpwZz92PTE3/NzI2MTk5MDcmd2lk/dGg9OTYw" },
  { name: "Trunks, Vests", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=200" },
  { name: "Trends", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=200" },
  { name: "Kurta sets", image: "https://imgs.search.brave.com/u5iMxvELZnVE0Ut8PdPyaxgt31E8SrRJGMxkNfyDnMI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA3/OTcvMjI4NC8wMzU4/L2ZpbGVzL1Byb2pl/Y3RfMjAyNDA0MTNf/MDA3MV81MDB4NTAw/LmpwZz92PTE3MTQw/NDg5MjA" },
  { name: "Dresses", image: "https://imgs.search.brave.com/i6xB66gHhRkUih7iNM07w8Z8VF3UEa4yqAfP95Re8pE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jaGlk/aXlhYS5jb20vY2Ru/L3Nob3AvZmlsZXMv/SU1HXzIwNjQuanBn/P3Y9MTc0NjAxNDM3/MyZ3aWR0aD05NjA" },
  { name: "Casual shoes", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=200" },
  { name: "Backpacks", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=200" },
  { name: "Jewellery", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=200" },
  { name: "Sarees", image: "https://imgs.search.brave.com/oEw2KdN9m49gn3mRjvPQEklFgy1ToyznWvwYN4LQhlQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c29jaC5jb20vbWVk/aWEvY2F0YWxvZy9w/cm9kdWN0L3QvdS90/dXJxdW9pc2VfYmx1/ZV9vcmdhbnphX2dl/b21ldHJpY19zYXJl/ZXNfd2l0aF9zdG9u/ZV93b3JrX2RldGFp/bHNfd29tZW5zX3Nv/Y2gtc3JldnN3cjEz/ODI0M2RfMDEuanBn/P3dpZHRoPTQ1NCZv/cHRpbWl6ZT1tZWRp/dW0" },
  { name: "Trousers", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=200" }
];

const FashionHub = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-6 border-b border-gray-200 mb-8">

      {/* Banners Carousel */}
      <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x pb-4">
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-[85vw] sm:min-w-[400px] md:min-w-[450px] snap-center rounded-2xl overflow-hidden flex h-[220px] shadow-sm shrink-0">
            {/* Left Info Side */}
            <div className={`w-1/2 ${banner.bgColor} p-6 flex flex-col justify-center relative overflow-hidden`}>
              {/* Decorative Flowers (Mock) */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-red-500 rounded-full blur-2xl opacity-20"></div>

              {banner.brands && (
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-md inline-block w-max mb-3 text-xs font-bold text-gray-800">
                  {banner.brands}
                </div>
              )}
              {banner.subtitle && (
                <p className="text-gray-700 text-sm font-medium mb-1">{banner.subtitle}</p>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-2">
                {banner.title}
              </h3>
              <p className="text-xl font-extrabold text-black mt-1">
                {banner.discount}
              </p>
            </div>

            {/* Right Image Side */}
            <div className="w-1/2 relative">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Subcategories Grid */}
      <div className="flex overflow-x-auto no-scrollbar pb-2">
        <div className="flex flex-col gap-4 min-w-max px-1">
          {/* Row 1 */}
          <div className="flex gap-4">
            {subcategories.slice(0, Math.ceil(subcategories.length / 2)).map((cat, idx) => (
              <div key={`row1-${idx}`} className="flex flex-col items-center gap-2 cursor-pointer group w-[80px]">
                <div className="w-[80px] h-[80px] rounded-2xl overflow-hidden bg-[#fdf3db] group-hover:shadow-md transition-shadow">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-[11px] font-semibold text-gray-800 text-center leading-tight max-w-full">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            {subcategories.slice(Math.ceil(subcategories.length / 2)).map((cat, idx) => (
              <div key={`row2-${idx}`} className="flex flex-col items-center gap-2 cursor-pointer group w-[80px]">
                <div className="w-[80px] h-[80px] rounded-2xl overflow-hidden bg-[#fbe7e7] group-hover:shadow-md transition-shadow">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-[11px] font-semibold text-gray-800 text-center leading-tight max-w-full">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FashionHub;
