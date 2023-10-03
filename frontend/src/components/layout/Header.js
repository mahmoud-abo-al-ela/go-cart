import { categoriesData, productData } from "../../static/data.js";
import styles from "../../styles/style.js";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowForward, IoMdArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown.js";
import NavBar from "./NavBar.js";
import { useSelector } from "react-redux";
const Header = ({ activeLink }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  console.log(user);

  const searchHandler = (e) => {
    const data = e.target.value.toLowerCase().trim();
    setSearch(data);

    const filteredProducts =
      data === ""
        ? null
        : productData.filter(({ name }) => name.toLowerCase().includes(data));

    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden md:h-[30px] md:my-[10px] md:flex items-center justify-between">
          <div className="w-[10%] ">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={searchHandler}
              className="h-[30px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={20}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div
                className={`overflow-y-auto absolute max-h-[50vh] w-full bg-white shadow-md z-10 p-4`}
              >
                {searchData.map((prod, index) => {
                  const productName = prod.name.replace(/\s+/g, "-");
                  return (
                    <Link to={`/product/${productName}`} key={index}>
                      <div className="w-full flex items-start py-2">
                        <div className="">
                          <img
                            src={prod.image_Url[0].url}
                            alt={productName}
                            className="w-[60px] h-[50px] object-contain"
                          />
                        </div>
                        <h1 className="my-auto ml-4">{prod.name}</h1>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button}`}>
            <Link to={"/seller"}>
              <h className="text-white flex items-center">
                Become Seller <IoIosArrowForward className="ml-2" />
              </h>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden md:flex items-center justify-between bg-[#3321c8] w-full h-[50px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          <div>
            <div
              onClick={() => setDropDown(!dropDown)}
              className="relative h-[40px] mt-1 w-[270px] hidden lg:block cursor-pointer"
            >
              <BiMenuAltLeft size={30} className="absolute top-1 left-2" />
              <button className="h-[100%] w-full flex justify-between items-center pl-10 pb-1 text-lg font-[500] bg-white rounded-t-md select-none">
                All Categories
              </button>
              <IoMdArrowDown size={20} className="absolute right-2 top-3 " />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          <div className={`${styles.noramlFlex}`}>
            <NavBar activeLink={activeLink} />
          </div>
          <div className="flex">
            <div className="relative mr-3 cursor-pointer">
              <AiOutlineHeart size={30} color="#fff" />
              <span className="absolute top-[-10px] right-[-5px] rounded-full text-center bg-[#17dd1f]  w-5 h-5 leading-tight top right text-white p-0 m-0 font-[500]">
                0
              </span>
            </div>
            <div className="relative mr-3 cursor-pointer">
              <AiOutlineShoppingCart size={30} color="#fff" />
              <span className="absolute top-[-10px] right-[-5px] rounded-full text-center bg-[#17dd1f]  w-5 h-5 leading-tight top right text-white p-0 m-0 font-[500]">
                0
              </span>
            </div>
            <div className="relative mr-3 cursor-pointer">
              {isAuthenticated ? (
                <Link to="/profile">
                  <img
                    src={`http://localhost:5000/${user.avatar}`}
                    className="w-[30px] h[30px] rounded-full"
                    alt={user.name}
                  />
                </Link>
              ) : (
                <Link to={"/login"}>
                  <CgProfile size={30} color="#fff" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
