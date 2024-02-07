import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cameras",
    image:
      "https://res.cloudinary.com/dktkavyr3/image/upload/v1707052391/1_gdoglp.png",
  },
  {
    _id: uuid(),
    categoryName: "Smart Devices",
    image:
      "https://res.cloudinary.com/dktkavyr3/image/upload/v1707052389/4_nanwg9.png",
  },
  {
    _id: uuid(),
    categoryName: "Laptops & PCs",
    image:
      "https://res.cloudinary.com/dktkavyr3/image/upload/v1707052390/3_xdr4yb.png",
  },
];
