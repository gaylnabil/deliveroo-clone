import { RouteProp } from "@react-navigation/native";
import { Dish } from "../redux/model";

export type AppStackParamList = {
    Home: undefined;
    Restaurant: {
      imgUrl: string;
      description: string;
      title: string;
      rating: number;
      genre: string;
      address: string;
      dishes: Dish[];
      longitude: number;
      latitude: number;
    };
  };
  
export interface RootStackParamList extends AppStackParamList {}

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }