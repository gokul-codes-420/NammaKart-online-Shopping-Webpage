"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryBar from "@/components/CategoryBar";
import { useAppContext } from "@/context/AppContext";
import ProductCard from "@/components/ProductCard";
import FashionHub from "@/components/FashionHub";
import FashionDeals from "@/components/FashionDeals";
import MobilesHub from "@/components/MobilesHub";
import BeautyHub from "@/components/BeautyHub";
import ElectronicsHub from "@/components/ElectronicsHub";
import HomeHub from "@/components/HomeHub";
import AppliancesHub from "@/components/AppliancesHub";
import { use } from "react";

export default function CategoryPage({ params }) {
  // Extract params synchronously if necessary using React.use for Next.js 15
  const unwrappedParams = use(params);
  const decodedCategory = decodeURIComponent(unwrappedParams.category);
  const { products, router } = useAppContext();
  
  const filteredProducts = products.filter(
    (p) => p.category === decodedCategory
  );

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 min-h-screen">
        <CategoryBar 
          selectedCategory={decodedCategory} 
          setSelectedCategory={(cat) => {
            if (cat === "For You") router.push("/");
            else router.push(`/category/${encodeURIComponent(cat)}`);
          }} 
        />
        
        <div className="pt-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">{decodedCategory}</h2>
        </div>

        {decodedCategory === "Fashion" && (
          <>
            <FashionHub />
            <FashionDeals />
          </>
        )}

        {decodedCategory === "Mobiles" && <MobilesHub />}
        
        {decodedCategory === "Beauty" && <BeautyHub />}

        {decodedCategory === "Electronics" && <ElectronicsHub />}

        {decodedCategory === "Home" && <HomeHub />}

        {decodedCategory === "Appliances" && <AppliancesHub />}

        <div className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 pb-14 w-full">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {filteredProducts.length === 0 && (
              <p className="col-span-full text-center text-gray-500 py-10 w-full text-lg">
                No products found for {decodedCategory}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
