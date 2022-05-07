import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Health",
    imageUrl: "",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Finance",
    imageUrl: "",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Technology",
    imageUrl: "",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Books",
    imageUrl: "",
    description: "",
  },
];
