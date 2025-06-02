// Assuming each image has a URL and other properties (you can modify this according to your structure)
interface ImageType {
    _type: string;
    asset: {
      _ref: string;
    };
  }
  
  export interface simplifiedProduct {
    _id: string;
    imageUrl: string; // Assuming this is a string representing image URL
    price: number;
    slug: string;
    categoryName: string;
    name: string;
  }
  
  export interface fullProduct {
    _id: string;
    images: ImageType[];  // Replace 'any' with a specific type (ImageType[] is an array of Image objects)
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
  }
  