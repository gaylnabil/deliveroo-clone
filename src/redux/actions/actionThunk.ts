import { Dispatch } from 'redux';
import { setFeatured, setFeatures } from '../slices/FeaturedSlice';
import client from '../sanityClient/sanity';
import { AnyAction, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { Category, Featured, Restaurant } from '../model';
import { setCategories } from '../slices/catgorieSlice';
import { RootState } from '../store';
import { setRestaurants } from '../slices/restaurantSlice';
import { Key } from 'react';

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

export const getRestaurants = (limit: number=0): ThunkAction<Promise<void>, RootState, unknown, PayloadAction<Restaurant[]>> =>{
    
  return ( 
    async(dispatch: Dispatch) =>{
      try {
        const query = `*[_type == "restaurant"] {
          ...,
          dishes[] ->,
          type->{
              ...,
          },
        }${limit <= 0 ? "" : `[0...${limit}]`}`
        const restaurants = await client.fetch(query)
        dispatch(setRestaurants(restaurants))
      } catch (error) {
        dispatch(setRestaurants([]))
        console.error("error: ", error)

      }
    }
  )
}

export const getFeatured = (id: Key /*Key | null | undefined */): ThunkAction<Promise<void>, RootState, unknown, PayloadAction<Restaurant[]>> =>{
  // console.log("getFeatured: ", id)
  return ( 
    async(dispatch: Dispatch) =>{
      try {
        const query = `
        *[_type == "featured" && _id == $id] {
          ...,
          restaurants[] -> {
           ...,
           dishes[] ->,
           type->{
               ...,
           },
         }
       }[0]
        `
        const params = {id: id}
        const featured = await client.fetch(query, params)
        dispatch(setFeatured(featured))
        console.log(`getFeatured:`, featured)
      } catch (error) {

        dispatch(setFeatured({ 
          _id: "",
          name: "",
          description: "",
          restaurants:[]
        }))
        console.error("error: ", error)

      }
    }
  )
}

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
