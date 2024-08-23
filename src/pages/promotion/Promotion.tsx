import styles from "./styles.module.scss";

const Promotion = () => {
    return <section>
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

    </section >;
};

export default Promotion;
