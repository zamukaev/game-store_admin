import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';
import type { ConfigProviderProps } from 'antd';
import { PlusOutlined, RightOutlined } from '@ant-design/icons';

import ProductLine from '../../components/productLine/ProductLine';

import styles from './styles.module.scss';

type SizeType = ConfigProviderProps['componentSize'];

const Products = () => {
  const [size, setSize] = useState<SizeType>('large');

  return (
    <div className={styles.block__main}>
      <div className={styles.header}>
        <h1 className={styles.block__products_all}>Все продукты</h1>
        <Link to="/admin/adding">
          <Button icon={<PlusOutlined />} size={size}>
            Добавить продукт
          </Button>
        </Link>
      </div>
      <div className={styles.block__information_goods}>
        <div className={`${styles.block__grid_14} styles.gray__color`}>
          <div className={styles.block__grid_4}>
            <div className={styles.gray__color}>Информация о товаре</div>
          </div>
          <div className={styles.block__grid_2}>
            <div className={styles.gray__color}>Цена</div>
          </div>
          <div className={styles.block__grid_3}>
            <div className={styles.gray__color}>Подкатегория</div>
          </div>
          <div className={styles.block__grid_3}>
            <div className={styles.gray__color}>Категория</div>
          </div>
        </div>
        <div className={styles.block__goods}>
          {Array(7)
            .fill(null)
            .map((_, index) => (
              <ProductLine key={index} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
