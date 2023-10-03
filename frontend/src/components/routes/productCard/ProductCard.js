import { Link } from "react-router-dom";
import styles from "../../../styles/style";

import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import React, { useState } from "react";
const ProductCard = React.memo(({ data, index, onEyeClick, num }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const name = data.name;
  const productName = name.replace(/\s+/g, "-");
  return (
    <div
      className="m-auto w-full sm:h-96 h-72 sm:mb-0 mb-2 bg-white rounded-lg p-5 shadow-sm relative "
      key={index}
    >
      {/* <div className="flex justify-end"></div> */}
      <Link to={`/product/${productName}`}>
        <img
          src={data.image_Url[0].url}
          alt={name}
          className="sm:w-full h-32 object-contain mt-3 pr-2 w-[80%]"
        />
      </Link>
      <Link to="/" className="w-fit block mt-4">
        <h5 className={`${styles.shop_name} hidden sm:block `}>
          {data.shop.name}
        </h5>
      </Link>
      <Link to={`/product/${productName}`}>
        <h3 className="pb-4 font-medium text-base sm:mt-1 mt-6">
          <span className="inline sm:hidden">
            {data.name.length > num || 20
              ? data.name.slice(0, num || 20) + ".."
              : data.name}
          </span>
          <span className="hidden sm:inline">
            {data.name.length > 22 ? data.name.slice(0, 22) + ".." : data.name}
          </span>
        </h3>
      </Link>
      <div className=" hidden sm:flex">
        <AiFillStar className="mr-2 cursor-pointer" color="#f68A00" size={20} />
        <AiFillStar className="mr-2 cursor-pointer" color="#f68A00" size={20} />
        <AiFillStar className="mr-2 cursor-pointer" color="#f68A00" size={20} />
        <AiFillStar className="mr-2 cursor-pointer" color="#f68A00" size={20} />
        <AiFillStar className="mr-2 cursor-pointer" size={20} />
      </div>
      <div className="pt-0 sm:pt-4 sm:flex items-center justify-between">
        {data.discount_price && data.discount_price !== null && (
          <div className="absolute font-medium top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg rounded-tr-lg">
            {(((data.price - data.discount_price) / data.price) * 100).toFixed(
              2
            )}
            % off
          </div>
        )}
        <div className="flex float-right sm:float-left">
          {data.discount_price && data.discount_price !== null ? (
            <>
              <h4 className={`${styles.productDiscountPrice}`}>
                {data.discount_price}$
              </h4>
              <h5 className={`${styles.price}`}>{data.price}$</h5>
            </>
          ) : (
            <h4 className={`${styles.productDiscountPrice}`}>{data.price}$</h4>
          )}
        </div>
        <span className="font-medium text-base text-[#68d284] hidden sm:block">
          {data.total_sold} sold
        </span>
      </div>
      <div className="bg-[#5b4bf0] rounded-b-md py-2 px-1 text-center absolute right-0 top-0">
        {click ? (
          <AiFillHeart
            className="cursor-pointer hover:w-[90%]"
            size={27}
            color="red"
            onClick={() => setClick(!click)}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            className="cursor-pointer hover:w-[90%]"
            color="#fff"
            size={27}
            onClick={() => setClick(!click)}
            title="Add to wishlist"
          />
        )}
        <AiOutlineEye
          className="cursor-pointer my-3 hover:w-[90%]"
          color="#fff"
          size={27}
          onClick={onEyeClick}
          title="Quick view"
        />
        <AiOutlineShoppingCart
          className="cursor-pointer hover:w-[90%]"
          color="#fff"
          size={27}
          onClick={() => setOpen(!open)}
          title="Add to cart"
        />
      </div>
    </div>
  );
});
export default ProductCard;
