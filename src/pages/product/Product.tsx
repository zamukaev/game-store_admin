import { useEffect, useState } from 'react';
import { Link, useParams, Params, useNavigate } from 'react-router-dom';

import api from '../../shared/api/api';

import TextArea from 'antd/es/input/TextArea';
import { Button, Form, FormProps, Input, Select } from 'antd';
import { Upload } from 'antd';
import { LeftOutlined, UploadOutlined } from '@ant-design/icons';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { message } from 'antd';

import { IProduct, mockProduct } from '../products/mockData';

import styles from './styles.module.scss';

type FieldType = {
  title?: string;
  price?: number;
  oldPrice?: number;
};

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [oldPrice, setOldPrice] = useState<number | undefined>(undefined);
  const [category, setCategory] = useState('videocarts');
  const [isHit, setIsHit] = useState<string>('yes');
  const [isSale, setIsSale] = useState<string>('yes');
  const [desc, setDesc] = useState('');
  const [characteristic, setCharacteristic] = useState('');
  const [fileList, setFileList] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/product/${id}`);
        const productData = response.data;
        setProduct(productData);
        setTitle(productData.title);
        setPrice(productData.price);
        setOldPrice(productData.oldPrice);
        setCategory(productData.category);
        setIsHit(productData.hit ? 'yes' : 'no');
        setIsSale(productData.inStock ? 'yes' : 'no');
        setDesc(productData.desc);
        setCharacteristic(productData.characteristic);
        setFileList(
          productData.urlImages.map((url, index) => ({
            uid: index,
            name: `image-${index}`,
            status: 'done',
            url,
          })),
        );
      } catch (error) {
        console.error('Failed to fetch product:', error);
        message.error('Ошибка при загрузке продукта');
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleSaveChanges = async () => {
    try {
      const updatedProduct = {
        title,
        price,
        oldPrice,
        category,
        isHit: isHit === 'Да',
        isSale: isSale === 'Да',
        desc,
        characteristic,
        urlImages: fileList.map((file) => file.url || file.thumbUrl),
      };

      await api.put(`/editProduct/${id}`, updatedProduct);
      message.success('Изменения успешно сохранены!');
    } catch (error) {
      console.error('Failed to save changes:', error);
      message.error('Ошибка при сохранении изменений.');
    }
  };

  const handleDeleteProduct = async () => {
    try {
      await api.delete(`/deleteProduct/${id}`);
      message.success('Товар успешно удален!');
      navigate('/admin/products');
    } catch (error) {
      console.error('Failed to delete product:', error);
      message.error('Ошибка при удалении товара.');
    }
  };

  const handleFileChange = ({ fileList }: any) => {
    setFileList(fileList);
  };

  if (!product) {
    return <div>Загрузка...</div>;
  }

  const handleUpload = () => {
    setUploading(true);
    // Здесь нужно добавить логику для загрузки файла на сервер
    setTimeout(() => {
      setUploading(false);
    }, 1000);
  };

  return (
    <div className={styles.block__main_change}>
      <div className={styles.block__header_product}>
        <Link to="/admin/products">
          <Button icon={<LeftOutlined />}></Button>
        </Link>
        <h1 className={styles.title_product}>{product?.title}</h1>
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
      <div className={styles.block__product_information}>
        <div className={styles.block__grid_20}>
          <div className={styles.block__grid_7}>
            <img
              className={styles.product__image}
              src={product?.urlImages[0]}
              alt={product?.title}
            />
          </div>
          <div className={styles.block__grid_7}>
            <Input
              placeholder="Наименование товара"
              className={styles.block__grid_7}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.block__grid_2}>
            <Input
              placeholder="Цена"
              className={styles.block__grid_1}
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </div>
          <div className={styles.block__grid_2}>
            <Input
              placeholder="Старая цена"
              className={styles.block__grid_1}
              value={oldPrice}
              onChange={(e) => setOldPrice(parseFloat(e.target.value))}
            />
          </div>
        </div>

        <div className={styles.block__upload}>
          <Upload
            listType="picture-card"
            className={styles.upload}
            fileList={fileList}
            onChange={handleFileChange}
            onUpload={handleUpload}>
            {uploading ? (
              <div>Загрузка...</div>
            ) : (
              <div className={styles.upload}>Выберите файл</div>
            )}
          </Upload>
        </div>
      </div>
      <div className={styles.block__margin_top}></div>
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
                value={isHit}
                onChange={(value) => setIsHit(value)}
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
                value={isSale}
                onChange={(value) => setIsSale(value)}
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
              placeholder="Описание"
            />
          </div>
          <div className={styles.block__grid_1}>
            <TextArea
              rows={4}
              value={characteristic}
              onChange={(e) => setCharacteristic(e.target.value)}
              placeholder="Характеристики"
            />
          </div>
        </div>
      </div>

      <Form style={{ display: 'flex' }}>
        <Form.Item>
          <Button
            onClick={handleSaveChanges}
            type="primary"
            htmlType="submit"
            className={styles.button__save_changes}>
            Сохранить изменения
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={handleDeleteProduct}
            type="primary"
            htmlType="submit"
            className={styles.button__delete_good}>
            Удалить товар
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Product;
