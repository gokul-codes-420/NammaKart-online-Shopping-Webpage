import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = ({ selectedCategory }) => {
  const { products, router } = useAppContext();

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "For You") return true;

    // Mapping user categories to data categories
    const categoryMap = {
      Fashion: ["Fashion", "Apparel", "Clothing"],
      Mobiles: ["Smartphone", "Mobile"],
      Beauty: ["Beauty", "Personal Care"],
      Electronics: [
        "Earphone",
        "Headphone",
        "Smartphone",
        "Laptop",
        "Camera",
        "Accessories",
      ],
      Appliances: ["Appliances", "Home Appliances"],
      Toys: ["Toys", "Kids"],
    };

    return categoryMap[selectedCategory]?.includes(product.category);
  });

  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">
        {selectedCategory === "For You" ? "Popular products" : `${selectedCategory} products`}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <button
        onClick={() => {
          router.push("/all-products");
        }}
        className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition"
      >
        See more
      </button>
    </div>
  );
};

export default HomeProducts;
