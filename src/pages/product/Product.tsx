import { Button } from 'antd';
import styles from './styles.module.scss';
import { LeftOutlined } from '@ant-design/icons';

const Product = () => {
  return (
    <div className={styles.block__main_change}>
      <div className={styles.block__header_product}>
        <Button icon={<LeftOutlined />}></Button>
      </div>
    </div>
  );
};

export default Product;
