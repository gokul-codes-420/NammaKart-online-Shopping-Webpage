"use client";
import React, { useState } from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user, getCartCount } = useAppContext();
  const { openSignIn } = useClerk();
  
  const [deliveryLocation, setDeliveryLocation] = useState("Location not set");

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      setDeliveryLocation("Fetching location...");
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await res.json();
            
            if (data && data.address) {
              const city = data.address.city || data.address.town || data.address.village || data.address.county || "";
              const state = data.address.state || "";
              const shortLocation = city ? `${city}, ${state}` : state || "Location found";
              setDeliveryLocation(shortLocation);
            } else {
              setDeliveryLocation("Location not found");
            }
          } catch (error) {
            console.warn("Error fetching location:", error);
            setDeliveryLocation("Error finding location");
          }
        },
        (error) => {
          console.warn("Geolocation error:", error.message || error);
          setDeliveryLocation("Location access denied");
        }
      );
    } else {
      setDeliveryLocation("Geolocation not supported");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar added above the main nav */}
      <div className="w-full bg-white border-b border-gray-100 px-4 md:px-10 lg:px-20 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 bg-[#FFD700] hover:bg-yellow-400 transition px-3 py-1.5 rounded font-bold text-gray-800 italic">
             {/* Custom simple N icon using SVG */}
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2874f0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-10deg]">
               <path d="M6 18V6l12 12V6" />
             </svg>
             <span className="text-gray-900 tracking-tight">Namma Kart</span>
          </button>
          <button className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 transition px-3 py-1.5 rounded font-bold text-gray-800 italic">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6l-1 1.5c-.2.4 0 1 .4 1.3l5.5 3.4-3.6 3.6-2.5-.8c-.4-.1-.9.1-1.1.5l-1 1c-.3.4-.1 1 .3 1.3l3.5 1.5 1.5 3.5c.3.4.9.6 1.3.3l1-1c.4-.2.6-.7.5-1.1l-.8-2.5 3.6-3.6 3.4 5.5c.3.4.9.6 1.3.4l1.5-1c.4-.2.7-.6.6-1.1z" />
             </svg>
             Travel
          </button>
        </div>

        <div className="hidden md:flex items-center gap-1.5 text-[13px] font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#374151" stroke="#374151" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" fill="white" stroke="white" />
          </svg>
          <span className="ml-0.5 max-w-[200px] truncate" title={deliveryLocation}>{deliveryLocation}</span>
          <span 
            onClick={handleGetLocation} 
            className="text-[#2874f0] cursor-pointer hover:underline font-semibold ml-0.5 tracking-tight"
          >
            Select delivery location {'>'}
          </span>
        </div>
      </div>

      {/* Main Navbar section */}
      <nav className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-3 text-gray-800">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer mr-4 lg:mr-8" onClick={() => router.push("/")}>
          <Image
            className="w-24 md:w-28"
            src={assets.logo}
            alt="logo"
          />
        </div>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden md:flex flex-grow max-w-3xl items-center bg-[#f0f5ff] rounded-lg px-4 py-2 border border-[#b2ccff] focus-within:border-[#2874f0] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 opacity-60">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input 
            type="text" 
            placeholder="Search for Products, Brands and More" 
            className="bg-transparent outline-none w-full text-[15px] text-gray-800 placeholder-gray-500" 
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 ml-8">
          {/* Login/User Button */}
          {user ? (
            <div className="flex items-center gap-2">
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Cart"
                    labelIcon={<CartIcon />}
                    onClick={() => router.push("/cart")}
                  />
                </UserButton.MenuItems>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Orders"
                    labelIcon={<BagIcon />}
                    onClick={() => router.push("/my-orders")}
                  />
                </UserButton.MenuItems>
              </UserButton>
              {isSeller && (
                <button
                  onClick={() => router.push("/seller")}
                  className="text-xs font-semibold text-[#2874f0] border border-[#2874f0] px-3 py-1 rounded"
                >
                  Seller Dashboard
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 hover:text-[#2874f0] transition group cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="font-medium text-[15px]">Login</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 transition-transform group-hover:rotate-180">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          )}

          {/* More Dropdown */}
          <div className="flex items-center gap-1 hover:text-[#2874f0] transition group cursor-pointer">
            <span className="font-medium text-[15px]">More</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 transition-transform group-hover:rotate-180">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          {/* Cart Button */}
          <button 
            onClick={() => router.push('/cart')} 
            className="flex items-center gap-2 hover:text-[#2874f0] transition cursor-pointer relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="font-medium text-[15px]">Cart</span>
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Layout Actions */}
        <div className="flex items-center md:hidden gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          
          {user ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={() => router.push("/")} />
                <UserButton.Action label="Products" labelIcon={<BoxIcon />} onClick={() => router.push("/all-products")} />
                <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={() => router.push("/cart")} />
                <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push("/my-orders")} />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <button onClick={openSignIn} className="flex items-center text-[#2874f0] font-medium text-sm">
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
