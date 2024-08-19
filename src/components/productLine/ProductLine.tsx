import React from 'react';
import { Link } from 'react-router-dom';

import { mockProduct } from '../../pages/products/mockData';

import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import { IProduct } from '../../pages/products/mockData';

import styles from './styles.module.scss';
const ProductLine = ({ index }) => {
  return (
    <div className={styles.block__border_styles}>
      <div className={styles.block__grid_14}>
        <div className={styles.block__grid_4}>
          <div className={styles.block__flex}>
            <img className={styles.product__image} src={mockProduct.urlImages[0]} />
            <div>{mockProduct.title}</div>
          </div>
        </div>
        <div className={styles.block__grid_2}>{mockProduct.price} ₽</div>
        <div className={styles.block__grid_3}>{mockProduct.category}</div>
        <div className={styles.block__grid_3}>{mockProduct.category}</div>
        <div className={styles.block__grid_2}>
          <Link to={`/admin/product/${index}`}>
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
