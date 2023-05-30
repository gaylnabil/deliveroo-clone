import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../model";

export interface RestaurantState {
    restaurants: Restaurant[];
    // restaurantSelected: Restaurant;
}

const initialState: RestaurantState = {
    restaurants:[],
    // restaurantSelected: {
    //     name: "",
    //     description: "",
    //     restaurants:[]
    // }
}

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: initialState,
    reducers:{
        setRestaurants: (state, action: PayloadAction<Restaurant[]>) =>{
         state.restaurants = action.payload
        },
        // getRestaurant: (state, action: PayloadAction<Restaurant>) =>{
        //  state.restaurantSelected = action.payload
        // },
}
})

export const { setRestaurants } = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;