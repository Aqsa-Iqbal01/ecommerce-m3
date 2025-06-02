"use client"
import { Button } from "@/components/ui/button"
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart"

// Define a more specific type for `image`
// Assuming image is an object that can be processed by `urlFor()` to return a URL
interface Image {
  _type: string;
  asset: {
    _ref: string;
  };
}

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: Image;  // Use the more specific type for image
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const Product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(), // Assuming image is an object that urlFor can process
    id: "abcdefgh"
  };

  return (
    <Button onClick={() => {
      addItem(Product);
      handleCartClick();
    }}>
      Add To Cart
    </Button>
  );
}
