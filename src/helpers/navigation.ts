import { RouteProp } from "@react-navigation/native";
import { Category, Dish } from "../redux/model";
import { Key } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
    PreparingOrder: undefined;
    Delivery: undefined;
  };
  
export interface RootStackParamList extends AppStackParamList {}

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }


// Create Screen Navigation Prop
export type ScreenNavigationType = NativeStackNavigationProp<RootStackParamList>;

// // Create Restaurant Navigation Prop
// export type RestaurantScreenNavigationType = NativeStackNavigationProp<
// RootStackParamList,
// "Restaurant"
// >;

// Create Restaurant Route Prop
export type RestaurantScreenRouteType = RouteProp<
  RootStackParamList,
  "Restaurant"
>;

// // Create Basket Navigation Prop
// export type BasketScreenNavigationType = NativeStackNavigationProp<
//   RootStackParamList,
//   "Basket"
// >;

// // Create PreparingOrder Navigation Prop
// export type PreparingOrderScreenNavigationType = NativeStackNavigationProp<
//   RootStackParamList,
//   "PreparingOrder"
// >;

// // Create Delivery Navigation Prop
// export type DeliveryScreenNavigationType = NativeStackNavigationProp<
//   RootStackParamList,
//   "Delivery"
// >;
