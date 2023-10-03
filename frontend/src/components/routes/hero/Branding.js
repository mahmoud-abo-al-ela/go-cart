import React from "react";
import { brandingData } from "../../../static/data";
import styles from "../../../styles/style";

const Categories = React.memo(() => {
  return (
    <div className={`${styles.section} my-4`}>
      <div className="bg-white  rounded-md p-4 flex flex-wrap justify-strat  sm:justify-between  w-full shadow-sm">
        {brandingData &&
          brandingData.map((i, index) => (
            <div
              key={index}
              className="flex items-center mx-auto lg:mx-0 w-auto lg:mb-0 mb-4"
            >
              {i.icon}
              <div className="px-3">
                <h3 className="font-bold text-sm sm:text-base">{i.title}</h3>
                <p className="text-xs sm:text-sm">{i.Description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
});
export default Categories;
