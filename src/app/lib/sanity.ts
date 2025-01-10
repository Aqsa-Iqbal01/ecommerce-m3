import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

// Define the structure of the image source
interface SanityImageSource {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export const client = createClient({
  projectId: 'y200lqo3',
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

// Update the urlFor function to use the correct type for `source`
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
