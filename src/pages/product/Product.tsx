import { useEffect, useState } from 'react';
import { Link, useParams, Params } from 'react-router-dom';

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
  const { id }: Readonly<Params<string>> = useParams(); // id для нашего будущего массива данных которые нужно будет передавать в index products[id];
  const [form] = Form.useForm();

  const [size, setSize] = useState<SizeType>('large');

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [product, setProduct] = useState<IProduct>();

  const [category, setCategory] = useState('Видеокарты');
  const [isHit, setIsHit] = useState('Да');
  const [isSale, setIsSale] = useState('Да');

  const onFinish: FormProps<FieldType>['onFinish'] = (values: any) => {
    console.log({
      title: form.getFieldValue('title'),
      price: form.getFieldValue('price'),
      oldPrice: form.getFieldValue('oldPrice'),
      category: category,
      isHit: isHit,
      isSale: isSale,
    });

    console.log('Success:', values);
  };

  useEffect(() => {
    const fetchGetProducts = async () => {
      try {
        const response = await api.get(`/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        message.error('Ошибка при загрузке продуктов');
      }
    };

    fetchGetProducts();
  }, []);

  console.log(form.getFieldsValue());

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        title: product.title,
        price: product.price,
        oldPrice: product.oldPrice,
      });
    }
  }, [product]);

  const handleUpload = () => {
    setUploading(true);
    // Здесь нужно добавить логику для загрузки файла на сервер
    setTimeout(() => {
      setUploading(false);
    }, 1000);
  };

  const handleFileChange = (info) => {
    setFileList(info.fileList);
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
            <img className={styles.product__image} src={product?.urlImages[0]} />
          </div>

          <div className={styles.block__grid_13}>
            <Form form={form} name="basic" onFinish={onFinish}>
              <div className={styles.block__grid_7}>
                <Form.Item name="title" className={styles.block__grid_7}>
                  <Input placeholder="Наименование товара" className={styles.block__grid_7} />
                </Form.Item>
              </div>

              <div className={styles.block__grid_2}>
                <Form.Item name="price" className={styles.block__grid_2}>
                  <Input
                    placeholder="Цена"
                    value={product?.price}
                    className={styles.block__grid_2}
                  />
                </Form.Item>
              </div>

              <div className={styles.block__grid_2}>
                <Form.Item name="oldPrice" className={styles.block__grid_2}>
                  <Input
                    placeholder="Старая цена"
                    value={product?.oldPrice}
                    className={styles.block__grid_2}
                  />
                </Form.Item>
              </div>
            </Form>
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
            <TextArea rows={4} />
          </div>
          <div className={styles.block__grid_1}>
            <TextArea rows={4} />
          </div>
        </div>
      </div>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Сохранить изменения
        </Button>
      </Form.Item>
    </div>
  );
};

export default Product;
