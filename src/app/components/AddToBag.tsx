"use client"
import { Button } from "@/components/ui/button"
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart"

// Define a more specific type for the image property
export interface ImageData {
  url: string;
  alt: string;
}

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: ImageData;  // Change `any` to `ImageData`
}

export default function AddToBag({ currency, description, image, name, price }: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart()

  const Product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),  // Assuming `urlFor(image)` returns an object with a `url` method
    id: "abcdefgh",  // Static ID for now
  }

  return (
    <Button
      onClick={() => {
        addItem(Product);  // Call addItem
        handleCartClick();  // Call handleCartClick
      }}
    >
      Add To Cart
    </Button>
  )
}
