import React from "react";
import styles from "../../../styles/style";
import { Link } from "react-router-dom";
const Hero = React.memo(() => {
  return (
    <div
      className={`relative bg-no-repeat text-center sm:text-start min-h-[70vh] sm:min-h-[85vh] w-full ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] md:w-[60%]`}>
        <h1 className="text-[30px] leading-[1.5] md:text-[60px] text-gray-900 font-[600] capitalize">
          best collection for <br /> home decoration
        </h1>
        <p className="pt-5 text-[14px] md:text-[16px] font-Poppins font-[450] text-gray-900">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
          mollitia? <br /> Officiis natus optio voluptates est, voluptas
          architecto adipisci dolor amet, <br /> enim pariatur repellendus
          repellat eos laboriosam! Officia mollitia suscipit ex?
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5 w-[100px] sm:w-[150px]`}>
            <span className="text-white font-Poppins text-[15px] sm:text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
});
export default Hero;
