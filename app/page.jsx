"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import PromoSection from "@/components/PromoSection";
import AdBanner from "@/components/AdBanner";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryBar from "@/components/CategoryBar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("For You");
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <CategoryBar
          selectedCategory={selectedCategory}
          setSelectedCategory={(cat) => {
            if (cat === "For You") setSelectedCategory(cat);
            else router.push(`/category/${encodeURIComponent(cat)}`);
          }}
        />
        <HeaderSlider />
        <PromoSection />
        <HomeProducts selectedCategory={selectedCategory} />
        <AdBanner />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
