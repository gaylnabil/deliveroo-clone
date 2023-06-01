import { Key } from "react";

interface Category{
    name: string;
    image: string;
    description: string;

}
interface Dish{
    _id: Key | null | undefined;
    name: string;
    image: string;
    description: string;
    price: number;
}

interface Restaurant{
    _id: Key | null | undefined;
    name: string;
    image: string;
    description: string;
    rating: number;
    genre: string;
    address: string;
    dishes: Dish[];
    longitude: number;
    latitude: number;
    type: Category;
}

interface Featured{
    _id: Key | null | undefined;
    name: string;
    description: string;
    restaurants: Restaurant[]
}

export {
    Category,
    Dish,
    Restaurant,
    Featured
}
