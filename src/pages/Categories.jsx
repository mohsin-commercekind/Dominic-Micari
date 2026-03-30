import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ViewAllCategories from "../components/viewAllCategoriesData";

const CategoriesPage = () => {
    return (
        <div className="bg-white">
            <Breadcrumb />
            <ViewAllCategories />
        </div>
    );
};

export default CategoriesPage;
