export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  // Temporary mock data until the backend is available
  const mockProducts = [
    {
      id: 1,
      name: "Designer Evening Gown",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Luxury Wedding Dress",
      price: "$899.99",
      image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Formal Cocktail Dress",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3"
    }
  ];

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return mockProducts;
};