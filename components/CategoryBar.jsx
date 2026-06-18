import React from "react";

const SvgIcon = ({ children }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="z-10 relative">
    {children}
  </svg>
);

const categories = [
  { 
    name: "For You", 
    paths: (
      <>
        <rect x="7" y="13" width="10" height="6" fill="#fde047" stroke="none" />
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ) 
  },
  { 
    name: "Fashion", 
    paths: (
      <>
        <rect x="7" y="16" width="10" height="4" fill="#fde047" stroke="none" />
        <path d="M20.38 3.46 16 2a8 8 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      </>
    ) 
  },
  { 
    name: "Mobiles", 
    paths: (
      <>
        <rect x="6" y="17" width="12" height="4" fill="#fde047" stroke="none" />
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </>
    ) 
  },
  { 
    name: "Beauty", 
    paths: (
      <>
        <rect x="9" y="15" width="6" height="5" fill="#fde047" stroke="none" />
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </>
    ) 
  },
  { 
    name: "Electronics", 
    paths: (
      <>
        <rect x="3" y="16" width="18" height="4" fill="#fde047" stroke="none" />
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </>
    ) 
  },
  { 
    name: "Home", 
    paths: (
      <>
        <rect x="7" y="15" width="10" height="5" fill="#fde047" stroke="none" />
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </>
    ) 
  },
  { 
    name: "Appliances", 
    paths: (
      <>
        <rect x="4" y="12" width="16" height="5" fill="#fde047" stroke="none" />
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </>
    ) 
  },
  { 
    name: "Toys, baby", 
    paths: (
      <>
        <circle cx="12" cy="12" r="8" fill="#fde047" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </>
    ) 
  },
  { 
    name: "Food & More", 
    paths: (
      <>
        <rect x="7" y="12" width="10" height="6" fill="#fde047" stroke="none" />
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" x2="6" y1="2" y2="4" />
        <line x1="10" x2="10" y1="2" y2="4" />
        <line x1="14" x2="14" y1="2" y2="4" />
      </>
    ) 
  },
  { 
    name: "Auto Acc.", 
    paths: (
      <>
        <circle cx="7" cy="17" r="4" fill="#fde047" stroke="none" />
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </>
    ) 
  },
  { 
    name: "2 Wheelers", 
    paths: (
      <>
        <circle cx="5.5" cy="17.5" r="4" fill="#fde047" stroke="none" />
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
      </>
    ) 
  },
  { 
    name: "Sports", 
    paths: (
      <>
        <rect x="5" y="12" width="14" height="6" fill="#fde047" stroke="none" />
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </>
    ) 
  },
  { 
    name: "Books", 
    paths: (
      <>
        <rect x="8" y="14" width="10" height="5" fill="#fde047" stroke="none" />
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </>
    ) 
  },
  { 
    name: "Furniture", 
    paths: (
      <>
        <rect x="4" y="12" width="16" height="4" fill="#fde047" stroke="none" />
        <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
        <path d="M2 10v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M2 16h20" />
        <path d="M6 18v2" />
        <path d="M18 18v2" />
      </>
    ) 
  },
];

const CategoryBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="flex items-center justify-start gap-3 sm:gap-6 px-4 overflow-x-auto no-scrollbar pt-3">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.name || (!selectedCategory && category.name === "For You");
          
          return (
            <div
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className="flex flex-col items-center cursor-pointer group min-w-[72px] sm:min-w-[80px] relative pb-2.5"
            >
              <div
                className={`w-14 h-14 rounded-[18px] flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? "bg-[#e5f0ff]"
                    : "bg-transparent group-hover:bg-gray-50"
                }`}
              >
                <SvgIcon>{category.paths}</SvgIcon>
              </div>
              <span
                className={`mt-1.5 text-[13px] tracking-tight whitespace-nowrap transition-colors duration-300 ${
                  isSelected
                    ? "font-bold text-black"
                    : "font-medium text-gray-800"
                }`}
              >
                {category.name}
              </span>
              
              {/* Active Tab Indicator */}
              {isSelected && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2874f0] rounded-t-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryBar;
