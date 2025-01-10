// Define the type for an individual image object
interface Image {
    url: string;  // or any other properties that the image object might have
    alt: string;  // Optional, add more properties if needed
  }
  
  // Update the fullProduct interface to use the Image[] type for images
  export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
  }
  
  export interface fullProduct {
    _id: string;
    images: Image[];  // Specify images as an array of Image objects
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
  }
  