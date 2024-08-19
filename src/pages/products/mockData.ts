export interface IProduct {
  _id: string;
  title: string;
  desc: string;
  characteristic: string;
  category: string;
  price: number;
  oldPrice: number;
  hit: boolean;
  inStock: boolean;
  discount: boolean;
  urlImages: string[];
  reviews: string[];
}

export const mockProduct: IProduct = {
  _id: 'serfs',
  title: 'Apple MacBook Pro 14 (M3 10C CPU, 8C GPU, 2023) 8 ГБ, 512 ГБ SSD, «серый космос»',
  desc: 'This is a fake product description',
  characteristic: 'Fake characteristic',
  category: 'Fake Category',
  price: 120000,
  oldPrice: 130000,
  hit: true,
  inStock: false,
  discount: true,
  urlImages: [
    'https://c.dns-shop.ru/thumb/st1/fit/500/500/b0d0d7cf9ef6a88765bbffa11e8a2a65/bc1311aa320af2e639161b8f6b03f01d7f1d915c9186421f8472626fcad1195a.jpg',
  ],
  reviews: ['Good product!', 'Not worth the price.'],
};
