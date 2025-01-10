"use client"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

// Define the type for each image object
interface ImageData {
  url: string; // Assuming each image has a `url` property
  alt: string; // Assuming each image has an `alt` property for accessibility
  // You can add any other properties the image object may have, if necessary
}

interface iAppProps {
  images: ImageData[]; // images is an array of ImageData
}

export default function ImageGallery({ images }: iAppProps) {
  // Initialize state with the first image in the array
  const [bigImage, setBigImage] = useState(images[0]);

  // Function to handle small image click
  const handleSmallImageClick = (image: ImageData) => {
    setBigImage(image); // Set clicked image as the big image
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image 
              src={urlFor(image).url()} 
              width={200} 
              height={200}
              alt={image.alt} // Use the `alt` property for the image alt text
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)} // Handle click event
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt={bigImage.alt} // Use the `alt` property for the big image alt text
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  )
}
