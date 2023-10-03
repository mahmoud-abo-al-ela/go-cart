import Faq from "../components/faq/Faq.js";
import styles from "../styles/style";
import SharedLayout from "./SharedLayout";

const FaqPage = () => {
  return (
    <SharedLayout activeLink={5}>
      <div className={`${styles.section} my-4`}>
        <Faq />
      </div>
    </SharedLayout>
  );
};
export default FaqPage;
