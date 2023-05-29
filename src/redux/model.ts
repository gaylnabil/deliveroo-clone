interface Category{
    name: string;
    image: string;
    description: string;

}
interface Dish{
    name: string;
    image: string;
    description: string;
    price: number;
}

interface Restaurant{
    name: string;
    imgUrl: string;
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
