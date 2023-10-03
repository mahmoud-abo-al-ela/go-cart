import BestSellingPageComp from "../components/bestSellingPage/BestSellingPageComp";
import styles from "../styles/style";
import SharedLayout from "./SharedLayout";
const BestSellingPage = () => {
  return (
    <SharedLayout activeLink={2}>
      <div className={`${styles.section} my-4`}>
        <BestSellingPageComp />
      </div>
    </SharedLayout>
  );
};
export default BestSellingPage;
