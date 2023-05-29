import { configureStore } from "@reduxjs/toolkit";
import { featuredReducer} from './slices/FeaturedSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from 'redux-thunk';
// Configure and return service decorator store. This is a wrapper around configureStore ()

export const store = configureStore({
  reducer: {
    featuredStore: featuredReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk]
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),  
});

console.log("store: ", store);
console.log("store.getState() : ", store.getState());

export const useAppDispatch:()=> typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
// export type RootState = ReturnType<typeof store.getState>