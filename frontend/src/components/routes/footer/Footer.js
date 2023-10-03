import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import logo from "../../../assets/imgs/logo.png";
import {
  footerCompanyLinks,
  footerShopLinks,
  footerSupportLinks,
} from "../../../static/data";
import { Link } from "react-router-dom";
import React from "react";
const Footer = React.memo(() => {
  return (
    <div className="bg-[#000] text-gray-100">
      <div className="bg-[#342ac8] flex sm:justify-between items-center flex-col sm:flex-row sm:px-12 px-4 sm:py-5 py-3">
        <h1 className="md:text-3xl text-xl md:leading-normal font-semibold sm:w-2/5 mb-2 sm:mb-0">
          <span className="text-[#56d879]">Subscribe </span>
          for new news.
        </h1>
        <div className="w-3/5 flex justify-center sm:justify-end">
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-auto sm:mr-5 mr-2 sm:py-3 py-1.5 rounded sm:px-2 px-1 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-700 duration-300 sm:px-3 sm:py-3 py-1.5 px-1.5 rounded-md text-white sm:w-auto w-auto">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src={logo}
            alt="logo"
            className="sm:w-[200px] w-[130px]"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p className="text-sm sm:text-base">
            The place that you can find popular products.
          </p>
          <div className="flex items-center mt-3">
            <AiOutlineTwitter
              size={25}
              className="cursor-pointer mr-3 hover:text-slate-300"
            />
            <AiFillFacebook
              size={25}
              className="cursor-pointer mr-3 hover:text-slate-300"
            />
            <AiFillInstagram
              size={25}
              className="cursor-pointer mr-3 hover:text-slate-300"
            />
            <AiFillYoutube
              size={25}
              className="cursor-pointer mr-3 hover:text-slate-300"
            />
          </div>
        </ul>
        <ul className="text-center sm:text-start sm:m-auto">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerCompanyLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 duration-200 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start sm:m-auto">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footerShopLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 duration-200 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start sm:m-auto">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 duration-200 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-sm text-center pb-5">
        <span>&copy; 2023 GoCart. All rights reserved</span>
      </div>
    </div>
  );
});
export default Footer;
