import styles from "../../../styles/style";
import { productData } from "../../../static/data";
import ProductCard from "../productCard/ProductCard.js";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import ProductDetails from "../productCard/ProductDetails";
import { Link } from "react-router-dom";
const BestSelling = React.memo(() => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sold - a.total_sold);
    const first = d.slice(0, 8);
    setData(first);
  }, []);

  const SamplePrevArrow = (props) => (
    <button
      {...props}
      className="absolute top-1/2 transform -translate-y-1/2 left-[-3rem] p-0 flex items-center justify-center cursor-pointer border-none outline-none"
    >
      <FaAngleLeft size={50} color="#fff" />
    </button>
  );

  const SampleNextArrow = (props) => (
    <button
      {...props}
      className="absolute top-1/2 transform -translate-y-1/2 right-0 sm:right-[-3rem] p-0  flex items-center justify-center cursor-pointer border-none outline-none"
    >
      <FaAngleRight size={50} color="#fff" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1280, // lg breakpoint
        settings: {
          slidesToShow: 4, // Show 4 products on large screens (lg:grid-cols-4)
        },
      },
      {
        breakpoint: 1024, // md breakpoint
        settings: {
          slidesToShow: 2, // Show 2 products on medium screens (md:grid-cols-2)
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 1.5, // Show 1 product on small screens (grid-cols-1)
        },
      },
    ],
  };

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className="flex justify-between items-baseline">
          <div className={`${styles.heading}`}>Best Selling</div>
          <Link to="/best-selling">
            <h5
              className={`text-[13px] sm:text-base text-blue-400 hover:underline`}
            >
              All best selling &rarr;
            </h5>
          </Link>
        </div>

        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="px-1 sm:px-2">
              <ProductCard
                data={item}
                onEyeClick={() => setSelectedProduct(item)}
                key={index}
              />
            </div>
          ))}
        </Slider>
      </div>
      {selectedProduct && (
        <ProductDetails
          setOpen={() => setSelectedProduct(null)}
          data={selectedProduct}
        />
      )}
    </div>
  );
});

export default BestSelling;
