import BestSellingPageComp from "../components/bestSellingPage/BestSellingPageComp";
import styles from "../styles/style";
import SharedLayout from "./SharedLayout";

const DiscountsPage = () => {
  return (
    <SharedLayout activeLink={4}>
      <div className={`${styles.section} my-4`}>
        <BestSellingPageComp type={"discount"} />
      </div>
    </SharedLayout>
  );
};
export default DiscountsPage;
