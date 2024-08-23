import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "@/pages/home/Home";
import Layout from "@/components/layout/Layout";
import Products from "@/pages/products/Products";
import Product from "@/pages/product/Product";
import Hits from "@/pages/hits/Hits";
import Promotion from "@/pages/promotion/Promotion";
import Categories from "@/pages/categories/Categories";
import Category from "@/pages/category/Category";

export const PrivateRoutes: FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/hits" element={<Hits />} />
                <Route path="/promotions" element={<Promotion />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:id" element={<Category />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Layout>

    );
};
