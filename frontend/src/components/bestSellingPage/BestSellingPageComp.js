import React, { useEffect, useState } from "react";
import ProductDetails from "../routes/productCard/ProductDetails";
import { productData } from "../../static/data";
import styles from "../../styles/style";
import ProductCard from "../routes/productCard/ProductCard";

const BestSellingPageComp = React.memo(({ type }) => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = window.innerWidth < 640 ? 14 : 15;

  useEffect(() => {
    const filteredData = productData
      .filter((product) =>
        type === "discount"
          ? product.discount_price
          : product.total_sold > product.stock
      )
      .sort((a, b) => {
        if (type === "discount") {
          const discountPercentageA =
            ((a.price - a.discount_price) / a.price) * 100;
          const discountPercentageB =
            ((b.price - b.discount_price) / b.price) * 100;
          return discountPercentageB - discountPercentageA;
        } else {
          return b.total_sold - a.total_sold;
        }
      });
    setData(filteredData);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <div className={`${styles.heading}`}>Best Selling</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {currentItems.length > 0 ? (
          currentItems.map((product, index) => (
            <ProductCard
              data={product}
              onEyeClick={() => setSelectedProduct(product)}
              key={index}
              num={15}
            />
          ))
        ) : (
          <h4 className="text-center m-auto">No products found</h4>
        )}
      </div>
      {data.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 px-2 py-1 bg-blue-500 text-white rounded"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`mx-1 px-2 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= data.length}
            className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        </div>
      )}
      {selectedProduct && (
        <ProductDetails
          setOpen={() => setSelectedProduct(null)}
          data={selectedProduct}
        />
      )}
    </div>
  );
});

export default BestSellingPageComp;
