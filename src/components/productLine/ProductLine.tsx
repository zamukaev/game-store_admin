import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import { IProduct } from '../../pages/products/mockData';

import styles from './styles.module.scss';

interface IProductLine {
  product: IProduct;
  index: number;
}

const ProductLine = ({ product, index }: IProductLine) => {
  return (
    <div className={styles.block__border_styles}>
      <div className={styles.block__grid_14}>
        <div className={styles.block__grid_4}>
          <div className={styles.block__flex}>
            <img className={styles.product__image} src={product.urlImages[0]} />
            <div>{product.title}</div>
          </div>
        </div>
        <div className={styles.block__grid_2}>{product.price} ₽</div>
        <div className={styles.block__grid_3}>{product.category}</div>
        <div className={styles.block__grid_3}>{product.category}</div>
        <div className={styles.block__grid_2}>
          <Link to={`/admin/product/${product._id}`}>
            <Button
              className={styles.transition__product}
              type="text"
              iconPosition="end"
              icon={<RightOutlined />}>
              <div>
                <div>Перейти на</div>
                <div>страницу товара</div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductLine;
