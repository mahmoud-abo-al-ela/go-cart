import React, { useEffect, useState } from "react";
import { productData } from "../../../static/data";
import styles from "../../../styles/style";
import { Link } from "react-router-dom";
import CountDown from "./CountDown.js";

const DiscountCard = React.memo(() => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const discountedProducts = productData.map((product) => ({
      ...product,
      discount:
        product.discount_price !== null
          ? product.price - product.discount_price
          : 0,
    }));
    const sortedProducts = discountedProducts.sort(
      (a, b) => b.discount - a.discount
    );
    const firstThree = sortedProducts.slice(0, 3);
    console.log(firstThree);
    setData(firstThree);
    const intereval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % firstThree.length);
      }
    }, 3000);

    return () => {
      clearInterval(intereval);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full relative flex flex-col sm:flex-row bg-white rounded-lg h-[60vh] sm:p-0 p-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {data.length > 0 && (
        <>
          <div className="absolute font-medium top-0 left-0 bg-red-500 text-center text-white px-4 py-2 rounded-l-md rounded-r-sm">
            {(
              ((data[currentIndex].price - data[currentIndex].discount_price) /
                data[currentIndex].price) *
              100
            ).toFixed(2)}
            % off
          </div>

          <div
            className="sm:w-[50%] w-full m-auto mb-4 sm:mb-auto"
            key={data[1].id}
          >
            <img
              src={data[currentIndex].image_Url[0].url}
              alt={data[currentIndex].name}
              className="m-auto sm:w-[50%] w-[70%]"
            />
          </div>
          <div className="sm:w-[50%] w-full m-auto">
            <h2 className={`${styles.productTitle}`}>
              {data[currentIndex].name}
            </h2>
            <p className="text-[12px] sm:text-base sm:pr-4 pr-0">
              <span className="inline sm:hidden">
                {data[currentIndex].description.length > 130
                  ? data[currentIndex].description.slice(0, 130) + "..."
                  : data[currentIndex].description}
              </span>
              <span className="hidden sm:inline">
                {data[currentIndex].description}
              </span>
            </p>
            <div className="flex justify-between items-center mt-4 mr-4">
              <CountDown />
              <Link
                to={`/discountProducts/${data[currentIndex].name.replace(
                  /\s+/g,
                  "-"
                )}`}
                className="hover:cursor-pointer underline  text-blue-400 "
              >
                View Details
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default DiscountCard;
