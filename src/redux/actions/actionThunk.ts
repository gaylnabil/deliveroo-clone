import { Dispatch } from 'redux';
import { setFeatures } from '../slices/FeaturedSlice';
import client from '../sanityClient/sanity';
import { AnyAction, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { Category, Featured, Restaurant } from '../model';
import { setCategories } from '../slices/catgorieSlice';
import { RootState } from '../store';
import { setRestaurants } from '../slices/restaurantSlice';

export const getAllFeatures = (): ThunkAction<Promise<void>, RootState, unknown, PayloadAction<Featured[]>> =>{
    
    return ( 
      async(dispatch: Dispatch) =>{
        try {
          const query = `*[_type == "featured"] {
                          ...,
                          restaurants[] -> {
                            ...,
                            dishes[] ->,
                            type->{
                              name
                            },
                          }
                        }`
          const features = await client.fetch(query)

          dispatch(setFeatures(features))

        } catch (error) {

          dispatch(setFeatures([]))
          console.error("error: ", error)

        }
      }
    )
}

export const getAllRestaurants = (id: number): ThunkAction<Promise<void>, RootState, unknown, PayloadAction<Restaurant[]>> =>{
    
  return ( 
    async(dispatch: Dispatch) =>{
      try {
        const query = `*[_type == "restaurant"] {...,}`
        const restaurants = await client.fetch(query)
        dispatch(setRestaurants(restaurants))
      } catch (error) {
        dispatch(setRestaurants([]))
        console.error("error: ", error)

      }
    }
  )
}

export const getFeaturedRestaurants = (id: number): ThunkAction<Promise<void>, RootState, unknown, PayloadAction<Restaurant[]>> =>{
    
  return ( 
    async(dispatch: Dispatch) =>{
      try {
        const query = `*[_type == "featured" && _id == $id] {
          restaurants[] -> {
            _id,
            name,
            rating,
            genre,
            address,
            image,        
          }
        }`
        const params = {id: id}
        const restaurants = await client.fetch(query, params)
        dispatch(setRestaurants(restaurants))
      } catch (error) {
        dispatch(setRestaurants([]))
        console.error("error: ", error)

      }
    }
  )
}

// export const getAllCategories = (): ThunkAction<Promise<void>, CategoryState, undefined, PayloadAction<Category[]>> =>{
// export const getAllCategories = (): ThunkAction<void, RootState, unknown, AnyAction> =>{
  export const getAllCategories = (): ThunkAction<Promise<void>, RootState, unknown, PayloadAction<Category[]>> =>{
    
  return ( 
    async(dispatch: Dispatch) =>{
     try {
      const query = `*[_type == "category"]`
      const features = await client.fetch(query)
      dispatch(setCategories(features))
     } catch (error) {
      dispatch(setCategories([]))
      console.error("error: ", error)
     }
    }
  )
}
