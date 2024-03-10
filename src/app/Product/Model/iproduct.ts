import { Category } from "../../Category/Model/category";

export interface IProduct {

    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
    creationAt: string,
    updatedAt: string,
    category: Category

}
