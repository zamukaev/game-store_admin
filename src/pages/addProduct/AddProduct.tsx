import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Form, Input, message, Select } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

import styles from './styles.module.scss';
import api from '../../shared/api/api';

const AddProduct = () => {
  const navigate = useNavigate();

  const [urlImages, setUrlImages] = useState('');
  const [fileList, setFileList] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState<number>();
  const [oldPrice, setOldPrice] = useState<number | undefined>();
  const [discount, setDiscount] = useState(false);

  const [category, setCategory] = useState('Видеокарты');
  const [hit, setHit] = useState('Да');
  const [inStock, setIsStock] = useState('Да');

  const [desc, setDesc] = useState('');
  const [characteristic, setCharacteristic] = useState('');

  const handleAddingProduct = async () => {
    if (!urlImages) {
      message.error('Ссылка на изображение обязательна');
      return;
    }
    if (!title) {
      message.error('Наименование товара обязательно');
      return;
    }
    if (!price) {
      message.error('Цена товара обязательна');
      return;
    }
    if (!oldPrice) {
      message.error('Старая цена товара обязательна');
      return;
    }
    if (!desc) {
      message.error('Описание товара обязательна');
      return;
    }
    if (!characteristic) {
      message.error('Характеристика товара обязательна');
      return;
    }
    try {
      const newProduct = {
        urlImages: [urlImages],
        title,
        price,
        oldPrice,
        category,
        hit: hit === 'Да' ? true : false,
        inStock: inStock === 'Да' ? true : false,
        desc,
        characteristic,
        discount,
      };
      await api.post(`/addProduct`, newProduct);
      message.success('Товар успешно добавлен');
      navigate('/admin/products');
    } catch (error) {
      console.error('Ошибка при добавлении товара:', error.response || error.message || error);
      message.error(`Ошибка: ${error.message || 'Неизвестная ошибка'}`);
    }
  };

  return (
    <div className={styles.block__main_change}>
      <div className={styles.block__header_product}>
        <Link to="/admin/products">
          <Button icon={<LeftOutlined />}></Button>
        </Link>
        <h1 className={styles.title_product}>Добавление нового продукта</h1>
      </div>
      <div className={styles.block__product_sections}>
        <div className={`${styles.block__grid_20} styles.gray__color`}>
          <div className={styles.block__grid_7}>
            <div className={styles.gray__color}>Изображение товара</div>
          </div>
          <div className={styles.block__grid_7}>
            <div className={styles.gray__color}>Наименование товара</div>
          </div>
          <div className={styles.block__grid_2}>
            <div className={styles.gray__color}>Цена</div>
          </div>
          <div className={styles.block__grid_2}>
            <div className={styles.gray__color}>Старая цена</div>
          </div>
        </div>
      </div>
      <div className={styles.block__grid_20}>
        <div className={styles.block__grid_7}>
          <div>
            <div className={styles.container__for_input}>
              <Input
                value={urlImages}
                onChange={(e) => setUrlImages(e.target.value)}
                placeholder="Ссылка на изображение 1 (главное)"
                className={styles.block__grid_7}
              />
            </div>
            <div className={styles.container__for_input}>
              <Input placeholder="Ссылка на изображение 2 " className={styles.block__grid_7} />
            </div>
            <div className={styles.container__for_input}>
              <Input placeholder="Ссылка на изображение 3 " className={styles.block__grid_7} />
            </div>
            <div className={styles.container__for_input}>
              <Input placeholder="Ссылка на изображение 4 " className={styles.block__grid_7} />
            </div>
          </div>
        </div>
        <div className={styles.block__grid_7}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Наименование товара"
            className={styles.block__grid_7}
          />
        </div>
        <div className={styles.block__grid_2}>
          <Input
            placeholder="0 ₽"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className={styles.block__grid_1}
          />
        </div>
        <div className={styles.block__grid_2}>
          <Input
            placeholder="0 ₽"
            onChange={(e) => setOldPrice(+e.target.value)}
            className={styles.block__grid_1}
          />
        </div>
      </div>
      <div className={`${styles.block__grid_10} styles.gray__color`}>
        <div className={styles.block__grid_2}>
          <div className={styles.gray__color}>Подкатегория</div>
        </div>
        <div className={styles.block__grid_1}>
          <div className={styles.gray__color}>Хит</div>
        </div>
        <div className={styles.block__grid_1}>
          <div className={styles.gray__color}>Акция</div>
        </div>
      </div>
      <div className={styles.block__section_choice}>
        <div id={styles.border__top} className={`${styles.block__grid_10} styles.gray__color`}>
          <div className={styles.block__grid_2}>
            <div className={styles.gray__color}>
              <Select
                value={category}
                onChange={(value) => setCategory(value)}
                defaultValue="Видеокарты"
                style={{ width: 200 }}
                options={[
                  { value: 'videocarts', label: 'Видеокарты' },
                  { value: 'mouses', label: 'Мыши' },
                  { value: 'keyboards', label: 'Клавиатуры' },
                ]}
              />
            </div>
          </div>
          <div className={styles.block__grid_1}>
            <div className={styles.gray__color}>
              <Select
                value={hit}
                onChange={(value) => setHit(value)}
                defaultValue="Да"
                style={{ width: 100 }}
                options={[
                  { value: 'yes', label: 'Да' },
                  { value: 'no', label: 'Нет' },
                ]}
              />
            </div>
          </div>
          <div className={styles.block__grid_1}>
            <div className={styles.gray__color}>
              <Select
                value={inStock}
                onChange={(value) => setIsStock(value)}
                defaultValue="Да"
                style={{ width: 100 }}
                options={[
                  { value: 'yes', label: 'Да' },
                  { value: 'no', label: 'Нет' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block__for_description}>
        <div className={styles.parent__grid_3}>
          <div className={styles.block__grid_1}>
            <div className={styles.gray__color}>Описание</div>
          </div>
          <div className={styles.block__grid_1}>
            <div className={styles.gray__color}>Характеристика</div>
          </div>
        </div>
      </div>
      <div className={styles.textareas}>
        <div className={styles.parent__grid_3}>
          <div className={styles.block__grid_1}>
            <TextArea
              rows={4}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Описание продукта"
            />
          </div>
          <div className={styles.block__grid_1}>
            <TextArea
              rows={4}
              value={characteristic}
              onChange={(e) => setCharacteristic(e.target.value)}
              placeholder="Характеристика продукта"
            />
          </div>
        </div>
      </div>
      <Form>
        <Form.Item>
          <Button
            onClick={handleAddingProduct}
            type="primary"
            htmlType="submit"
            className={styles.button__adding_good}>
            Добавить товар
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
