export interface Product {
    id: number;
    title: string;
    longDescription: string;
    price: number;
    image: string;
    slug: string;
    category: string;
    flavors?: string[];
    supplementFacts?: {
      nutrient: string;
      amount: string;
      dailyValue: string;
    }[];
  }