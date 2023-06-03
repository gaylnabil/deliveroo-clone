import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Dish } from "../model";
import { useAppSelector } from "./../store";
import { Key } from "react";
interface basketState{
    items: Dish[];
}

const initialState: basketState = {
    items:[]
}

// const counterSlice = (state: CounterState, action: PayloadAction<number>)=>{}

const basketSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers:{
    // Here we can define all actions
    addToBasket: (state, action: PayloadAction<Dish>) => {
        state.items.push(action.payload);
        // console.log(".count: ", state.count)
      },
      removeFromBasket: (state, action: PayloadAction<Key>) => {
        // removeFromBasket: (state, action: PayloadAction<Key | null | undefined>) => {
        const index = state.items.findIndex(item => item._id === action.payload)
        state.items.splice(index, 1);

      },
      getBasket: (state, action: PayloadAction<Key>) => {
        // getBasket: (state, action: PayloadAction<Key | null | undefined>) => {
        state.items.filter(item => item._id === action.payload)
      }
    }
})

export const {addToBasket, removeFromBasket} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
