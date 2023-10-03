import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/style";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import React, { useState } from "react";
const ProductDetails = React.memo(({ open, setOpen, data }) => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(false);
  const sendMessageHandler = () => {};
  const decrement = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {data ? (
        <div className="bg-[#00000027] fixed w-full h-full top-0 left-0 z-40 flex items-center justify-center">
          <div className="w-[90%] z-50 sm:w-[60%] h-[85vh] sm:h-[75vh] overflow-y-auto bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={25}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            />

            {data.discount_price && data.discount_price !== null && (
              <div className="absolute sm:w-[10rem] font-medium top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-r-lg rounded-l-sm text-center">
                {(
                  ((data.price - data.discount_price) / data.price) *
                  100
                ).toFixed(2)}
                % off
              </div>
            )}

            <div className="w-full flex flex-col items-center sm:mt-0 mt-5">
              <div className="relative w-[70%] sm:w-[50%]">
                <img
                  src={data.image_Url[0].url}
                  alt={data.name}
                  className="w-[90%] max-w-fit sm:w-full m-auto max-h-[20vh] sm:max-h-[30vh]"
                />
                <div className="absolute top-0 sm:top-2 left-[-2rem]">
                  {click ? (
                    <AiFillHeart
                      className="cursor-pointer hover:w-[95%]"
                      size={30}
                      color="red"
                      onClick={() => setClick(!click)}
                      title="Remove from wishlist"
                    />
                  ) : (
                    <AiOutlineHeart
                      className="cursor-pointer hover:w-[95%]"
                      color="#333"
                      size={30}
                      onClick={() => setClick(!click)}
                      title="Add to wishlist"
                    />
                  )}
                </div>
              </div>
              <div className="w-full flex justify-between sm:flex-row flex-col mb-2">
                <div className="w-full sm:w-[80%] pt-5 px-1 sm:px-4 mt-5">
                  <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                  <p>{data.description}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt={data.shop.name}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="ml-4">
                      <h3
                        className={`${styles.shop_name}`}
                        style={{ paddingBottom: "3px" }}
                      >
                        {data.shop.name}
                      </h3>
                      <h5>Rate: ({data.shop.ratings})</h5>
                    </div>
                    <div
                      className={`${styles.button} mt-4`}
                      onClick={sendMessageHandler}
                    >
                      <span className="text-white flex items-center">
                        Contact seller{" "}
                        <AiOutlineMessage className="ml-2" size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col sm:flex-row mt-4">
                {data.discount_price && data.discount_price !== null ? (
                  <>
                    <h4 className={`${styles.productDiscountPrice}`}>
                      {data.discount_price}$
                    </h4>
                    <h5 className={`${styles.price}`}>{data.price}$</h5>
                  </>
                ) : (
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.price}$
                  </h4>
                )}
                {count === 0 ? (
                  <div
                    className={`${styles.button} mt-4 sm:mt-0 sm:ml-7 h-11 flex items-center`}
                    onClick={() => setCount(1)}
                  >
                    <span className="text-white flex items-center">
                      Add <AiOutlineShoppingCart className="ml-2" />
                    </span>
                  </div>
                ) : (
                  <div className="ml-5">
                    <button
                      className="bg-gradiant-to-r from-teal-400 to bg-teal-500 text-white font-bold rounded-l sm:px-4 sm:py-2 px-2 py-1 shadow-lg hover:opacity-75 transition duration-150 ease-in-out"
                      onClick={decrement}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium sm:px-4 px-3 pt-[6px] pb-[7px] sm:pt-[8px] sm:pb-[10px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r sm:px-4 sm:py-2 px-2 py-1 shadow-lg hover:opacity-75 transition duration-150 ease-in-out"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
});
export default ProductDetails;
