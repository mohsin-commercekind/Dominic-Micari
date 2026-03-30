import React from "react";
import SearchPageComp from "../components/SearchResults";
import Breadcrumb from "../components/Breadcrumb";
import CTABanner from "../components/CTABanner.jsx";
const SearchPage = () => {
  return (
    <>
      <Breadcrumb />
      <SearchPageComp />
      {/* <CTABanner /> */}
    </>
  );
};

export default SearchPage;
