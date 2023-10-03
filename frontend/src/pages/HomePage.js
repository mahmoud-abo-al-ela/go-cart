import SharedLayout from "./SharedLayout.js";
import Hero from "../components/routes/hero/Hero.js";
import BestSelling from "../components/routes/bestSelling/BestSelling.js";
import Branding from "../components/routes/hero/Branding.js";
import FeaturedProducts from "../components/routes/featuredProducts/FeaturedProducts.js";
import Discounts from "../components/routes/discounts/Discounts.js";
import Sponsored from "../components/routes/sponsored/Sponsored.js";
import React, { useEffect, useState } from "react";
import Logo from "../assets/imgs/logo.png";

const HomePage = React.memo(() => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <SharedLayout activeLink={1}>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <img
              src={Logo}
              alt="logo"
              className="animate-appear fade-in object-contain w-[15%]"
            />
          </div>
        ) : (
          <>
            {" "}
            <Hero />
            <Branding />
            <BestSelling />
            <Discounts />
            <FeaturedProducts />
            <Sponsored />
          </>
        )}
      </SharedLayout>
    </>
  );
});

export default HomePage;
