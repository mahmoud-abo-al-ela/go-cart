import React from "react";
import styles from "../../../styles/style";

const Sponsored = React.memo(() => {
  return (
    <div
      className={`${styles.section} bg-white py-5 sm:py-8 px-2 sm:px-5 my-5 sm:my-10 rounded-xl`}
    >
      <div className="flex justify-between items-center">
        <div>
          <img
            className="contain w-14 sm:w-32"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt="amazon"
          />
        </div>
        <div>
          <img
            className="contain w-14 sm:w-32"
            src="https://i.pinimg.com/originals/1e/f7/1a/1ef71a1999492060c800bb1f3ff9550a.png"
            alt="amazon"
          />
        </div>
        <div>
          <img
            className="contain w-14 sm:w-32"
            src="https://pngimg.com/d/sony_logo_PNG2.png"
            alt="amazon"
          />
        </div>
        <div>
          <img
            className="contain w-14 sm:w-32"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png"
            alt="amazon"
          />
        </div>
      </div>
    </div>
  );
});
export default Sponsored;
