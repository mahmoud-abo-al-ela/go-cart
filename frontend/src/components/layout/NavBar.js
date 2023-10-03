import styles from "../../styles/style.js";
import { navItems } from "../../static/data.js";
import { Link } from "react-router-dom";
const NavBar = ({ activeLink }) => {
  return (
    <div className={`${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex">
            <Link
              to={i.url}
              className={`${
                activeLink === index + 1 ? "text-[#17dd1f]" : "text-[#fff]"
              } mx-6 font-[500] cursor-pointer`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};
export default NavBar;
