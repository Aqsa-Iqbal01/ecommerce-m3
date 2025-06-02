"use client"
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image"
import { useState } from "react"

// Define specific type for `image` object, based on your data structure
interface ImageType {
  _type: string;
  asset: {
    _ref: string;
  };
}

interface iAppProps {
  images: ImageType[];  // Use the specific ImageType for images array
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState<ImageType>(images[0]); // Default to first image, with ImageType

  const handleSmallImageClick = (image: ImageType) => {
    setBigImage(image); // Handle small image click with specific type
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image 
              src={urlFor(image).url()} 
              width={200} 
              height={200}
              alt="photo" 
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)} // Specific type used here
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()} // Using bigImage of type ImageType
          alt="Photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</span>
      </div>
    </div>
  );
}
