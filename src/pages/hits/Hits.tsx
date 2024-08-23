import { FC, useEffect, useState } from "react";

// import { useProducts } from "../../../hooks/useProducts";

// import PaginationControl from "../../components/ui/pagination/Pagination";
// import Wrapper from "../../components/ui/wrapper/Wrapper";
// import Product from "../Products/product/Product";

import styles from "./styles.module.scss";

const AdminHits: FC = () => {
    // const { getHits, hits, hitsIsLoading } = useProducts();

    const [page, setPage] = useState<number>(1);

    // const init = Math.ceil(hits.count / 8);

    // useEffect(() => {
    //     getHits(page);
    // }, [page]);

    return (
        <section>
            <ul className={styles.header__list}>
                <li className={styles.header__item}>Информация о товаре</li>
                <li className={styles.header__item}>Цена</li>
                <li className={styles.header__item}>Категория</li>
                <li className={styles.header__item}>Подкатегория</li>
            </ul>
            {/* {hits.products.map((product) => (
            <Product product={product} key={product._id} />
          ))} */}
            <div className={styles.pagination}>
                {/* <PaginationControl count={init} page={page} setPage={setPage} /> */}
            </div>

        </section >
    );
};

export default AdminHits;