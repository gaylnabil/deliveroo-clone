import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category, Featured } from "../model";
import FeaturedRow from './../../components/features/FeaturedRow';

export interface CategoryState {
    categories: Category[];
}

const initialState: CategoryState = {
    categories: [],
}

const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers:{
        setCategories: (state, action: PayloadAction<Category[]>) =>{
         state.categories = action.payload
        },
}
})

export const { setCategories } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;