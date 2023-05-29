import { Dispatch } from 'redux';
import { FeaturedState, setFeatures } from '../slices/FeaturedSlice';
import client from '../sanityClient/sanity';
import { AnyAction, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { Featured } from '../model';
// import { RootState } from '../store';

// export const getAllFeatures = (): ThunkAction<Promise<void>, FeaturedState, undefined, AnyAction> =>{
export const getAllFeatures = (): ThunkAction<Promise<void>, FeaturedState, undefined, PayloadAction<Featured[]>> =>{
    
    return ( 
      async(dispatch: Dispatch) =>{
        const features = await client.fetch(
          `*[_type == "featured"] {
              ...,
            restaurants[] -> {
              ...,
              dishes[] ->,
              type->{
                ...,
              },            
            }
          }`
        )
        dispatch(setFeatures(features))
      }
    )
}

export const getAllCategories = (): ThunkAction<Promise<void>, FeaturedState, undefined, PayloadAction<Featured[]>> =>{
    
  return ( 
    async(dispatch: Dispatch) =>{
      const features = await client.fetch(
        `*[_type == "category"] {
            ...,
        }`
      )
      dispatch(setFeatures(features))
    }
  )
}
