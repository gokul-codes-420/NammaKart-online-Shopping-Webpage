"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {
  const { products } = useAppContext();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row items-center justify-between w-full pt-12">
          <div className="flex flex-col items-start w-full md:w-auto">
            <p className="text-2xl font-medium">All products</p>
            <div className="w-16 h-0.5 bg-orange-600 rounded-full mt-1"></div>
          </div>
          
          <div className="mt-6 md:mt-0 flex items-center border border-gray-300 rounded-full px-4 py-2 w-full md:w-1/3">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-transparent outline-none w-full text-sm" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-10 w-full">
              No products found for "{search}"
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
