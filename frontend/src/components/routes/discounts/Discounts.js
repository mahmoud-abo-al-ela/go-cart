import { Link } from "react-router-dom";
import styles from "../../../styles/style";
import DiscountCard from "./DiscountCard.js";

const Discounts = () => {
  return (
    <>
      <div>
        <div className={`${styles.section} mt-4`}>
          <div className="flex justify-between items-baseline">
            <div className={`${styles.heading}`}>Popular Discounts</div>
            <Link to="/discounts">
              <h5
                className={`text-[13px] sm:text-base text-blue-400 hover:underline`}
              >
                All discounts &rarr;
              </h5>
            </Link>
          </div>
          <div>
            <DiscountCard />
          </div>
        </div>
      </div>
    </>
  );
};
export default Discounts;
