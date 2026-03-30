import React from "react";
import Product from "../components/Product/productShowcaseData";
import Breadcrumb from "../components/Breadcrumb";
import CTABanner from "../components/CTABanner.jsx";
const ProductPage = () => {
  return (
    <>
      <Breadcrumb />
      <Product />
      {/* <CTABanner /> */}
    </>
  );
};

export default ProductPage;
