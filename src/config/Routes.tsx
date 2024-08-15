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
                <Route path="/admin/home" element={<Home />} />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/product/:id" element={<Product />} />
                <Route path="/admin/hits" element={<Hits />} />
                <Route path="/admin/promotion" element={<Promotion />} />
                <Route path="/admin/categories" element={<Categories />} />
                <Route path="/admin/categories/:id" element={<Category />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Layout>

    );
};
