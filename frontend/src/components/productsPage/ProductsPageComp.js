import ProductCard from "../routes/productCard/ProductCard";
import { productData } from "../../static/data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import styles from "../../styles/style";
import React, { useState } from "react";
import ProductDetails from "../routes/productCard/ProductDetails";
import { useNavigate } from "react-router-dom";

const ProductsPage = React.memo(() => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const categories = [
    ...new Set(productData.map((product) => product.category)),
  ].sort((a, b) => a.localeCompare(b));

  const MAX_PRODUCTS_PER_CATEGORY = 8;

  const categoryProducts = {};
  productData.forEach((product) => {
    if (!categoryProducts[product.category]) {
      categoryProducts[product.category] = [];
    }

    if (categoryProducts[product.category].length < MAX_PRODUCTS_PER_CATEGORY) {
      categoryProducts[product.category].push(product);
    }
  });

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

  const navigate = useNavigate();
  const allHandler = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div>
      <div className={`${styles.section}`}>
        {categories.map((category, index) => (
          <div key={index} className="my-4">
            <div className="flex justify-between items-baseline">
              <div className={`${styles.heading}`}>{category}</div>
              {categoryProducts[category]?.length > 5 && (
                <h5
                  className={`text-[13px] sm:text-base text-blue-400 hover:underline cursor-pointer`}
                  onClick={allHandler(category)}
                >
                  See all &rarr;
                </h5>
              )}
            </div>
            <Slider
              {...settings}
              slidesToShow={Math.min(
                categoryProducts[category]?.length || 0,
                settings.slidesToShow
              )}
            >
              {categoryProducts[category]?.map((product) => (
                <div className="px-1 sm:px-2">
                  <ProductCard
                    data={product}
                    onEyeClick={() => setSelectedProduct(product)}
                    key={product.id}
                  />
                </div>
              ))}
            </Slider>
          </div>
        ))}
        {categories.length === 0 && (
          <h3 className="text-center mt-auto">No products found</h3>
        )}
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

export default ProductsPage;
