import { RouteProp } from "@react-navigation/native";
import { Category, Dish } from "../redux/model";
import { Key } from "react";

export type AppStackParamList = {
    Home: undefined;
    Restaurant: {
      // id: Key | null| undefined;
      id: Key;
      image: string;
      description: string;
      name: string;
      rating: number;
      genre: string;
      address: string;
      dishes: Dish[];
      longitude: number;
      latitude: number;
      type: Category;
    };
    Basket: undefined;
  };
  
export interface RootStackParamList extends AppStackParamList {}

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }