"use client"
import { Button } from "@/components/ui/button"
import { urlFor } from "@/sanity/lib/image";
import { useShoppingCart } from "use-shopping-cart"

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image:any;
}

export default function AddToBag({currency , description, image, name,price} : ProductCart) {
    const {addItem, handleCartClick} =  useShoppingCart()
    const Product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image:urlFor(image).url(),
        id: "abcdefgh"
    }
 
  return <Button onClick={() => {
    addItem(Product)
     handleCartClick();
  }}>Add To Cart</Button>
  
    
  
}
