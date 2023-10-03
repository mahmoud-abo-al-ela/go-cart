import SharedLayout from "./SharedLayout.js";
import ProductsPageComp from "../components/productsPage/ProductsPageComp.js";
import React from "react";

const ProductsPage = React.memo(() => {
  return (
    <SharedLayout activeLink={3}>
      <ProductsPageComp />
    </SharedLayout>
  );
});
export default ProductsPage;
