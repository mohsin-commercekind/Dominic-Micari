import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import FAQPage from "../pages/Faq";
import HomePage from "../pages/Home";
import ProductPage from "../pages/Product";
import ContactPage from "../pages/Contact";
import ProDetailPage from "../components/ProductDetail";
import CategoryProdPage from "../pages/CategoryProd";
import SearchResults from "../pages/SearchResults";
import AboutPage from "../pages/AboutPage";
import BrandsPage from "../pages/Brands";
import CategoriesPage from "../pages/Categories";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "brands",
        element: <BrandsPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      { path: "category/:slug", element: <CategoryProdPage /> },
      { path: "product/:id", element: <ProDetailPage /> },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
      {
        path: "About",
        element: <AboutPage />,
      },
    ],
  },
]);
