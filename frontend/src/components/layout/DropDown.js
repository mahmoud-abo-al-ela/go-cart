import { useNavigate } from "react-router-dom";
import styles from "../../styles/style";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandler = (item) => {
    navigate(`/products?category=${item.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-4 w-[270px] absolute bg-slate-100 z-30 shadow-sm rounded-b-md">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex}`}
            onClick={() => submitHandler(i)}
          >
            <img
              src={i.image_Url}
              alt={i.title}
              className="w-[25px] h-[25px] object-contain ml-2 select-none"
            />
            <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
          </div>
        ))}
    </div>
  );
};
export default DropDown;
