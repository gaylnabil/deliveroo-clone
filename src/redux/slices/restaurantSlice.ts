import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../model";

export interface RestaurantState {
    restaurants: Restaurant[];
    restaurantSelected: Restaurant;
}

const initialState: RestaurantState = {
    restaurants:[],
    restaurantSelected: {
        _id: "",
        name: "",
        image: "",
        description: "",
        rating: 0,
        genre: "",
        address: "",
        dishes: [],
        longitude: 0,
        latitude: 0,
        type: {
            _id: "",
            name: "",
            image: "",
            description: "",
        },
    }
}

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: initialState,
    reducers:{
        setRestaurants: (state, action: PayloadAction<Restaurant[]>) =>{
         state.restaurants = action.payload
        },
        setRestaurant: (state, action: PayloadAction<Restaurant>) =>{
         state.restaurantSelected = action.payload
        },
}
})

export const { setRestaurants, setRestaurant } = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;