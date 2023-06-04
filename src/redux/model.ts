import { Key } from "react";

interface Category{
    // _id: Key | null | undefined;
    _id: Key;
    name: string;
    image: string;
    description: string;

}
interface Dish{
    // _id: Key | null | undefined;
    _id: Key;
    name: string;
    image: string;
    description: string;
    price: number;
}

interface Restaurant{
    // _id: Key | null | undefined;
    _id: Key;
    name: string;
    image: string;
    description: string;
    rating: number;
    genre: string;
    address: string;
    dishes: Dish[];
    latitude: number;
    longitude: number;
    type: Category;
}

interface Featured{
    // _id: Key | null | undefined;
    _id: Key;
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
