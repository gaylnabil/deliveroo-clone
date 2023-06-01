import { RouteProp } from "@react-navigation/native";
import { Dish } from "../redux/model";

export type AppStackParamList = {
    Home: undefined;
    Restaurant: {
      image: string;
      description: string;
      title: string;
      rating: number;
      genre: string;
      address: string;
      dishes: Dish[];
      longitude: number;
      latitude: number;
    };
    Basket: undefined;
  };
  
export interface RootStackParamList extends AppStackParamList {}

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }