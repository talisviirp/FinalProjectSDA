export interface Product {
  id: string;
  brand: string;
  name: string;
  description: string;
  SKU: string
  price: number;
  category: string;
  imageUrl: string;
  quantity: number;
  createdAt: Date;
  modifiedAt: Date;
  createdBy: string;
}
