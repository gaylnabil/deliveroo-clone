import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Featured } from "../model";
import FeaturedRow from './../../components/features/FeaturedRow';

export interface FeaturedState {
    features: Featured[];
    featuredSelected: Featured;
}

const initialState: FeaturedState = {
    features:[],
    featuredSelected: {
        name: "",
        description: "",
        restaurants:[]
    }
}

const featuredSlice = createSlice({
    name: "featured",
    initialState: initialState,
    reducers:{
        setFeatures: (state, action: PayloadAction<Featured[]>) =>{
         state.features = action.payload
        },
        getFeatured: (state, action: PayloadAction<Featured>) =>{
         state.featuredSelected = action.payload
        },
}
})

export const { setFeatures, getFeatured } = featuredSlice.actions;
export const featuredReducer = featuredSlice.reducer;