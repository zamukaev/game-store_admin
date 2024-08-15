import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Product from "../pages/product/Product";
import Hits from "../pages/hits/Hits";
import Promotion from "../pages/promotion/Promotion";
import Categories from "../pages/categories/Categories";
import Category from "../pages/category/Category";

import Layout from "../components/layout/Layout";

export const PrivateRoutes: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/hits" element={<Hits />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
};
