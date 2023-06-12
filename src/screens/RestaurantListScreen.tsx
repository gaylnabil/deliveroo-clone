import { SafeAreaView, ScrollView, View } from "react-native";
import React, { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./../redux/store";
import { getRestaurants } from "../redux/actions/actionThunk";
import LayoutHeader from "../components/layouts/LayoutHeader";
import RestaurantItem from "../components/restaurants/RestaurantItem";

interface IProps {}

const RestaurantList: FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const restaurants = useAppSelector(
    (state) => state.restaurantStore.restaurants
  );

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  const restaurantsElements = restaurants.map((rest) => {
    return (
      <RestaurantItem
        key={rest._id}
        id={rest._id}
        image={rest.image}
        description={rest.description}
        name={rest.name}
        rating={rest.rating}
        genre={rest.genre}
        address={rest.address}
        dishes={rest.dishes}
        longitude={rest.longitude}
        latitude={rest.latitude}
        type={rest.type}
      />
    );
  });
  return (
    <SafeAreaView>
      <LayoutHeader />

      <ScrollView>
        <View className="mx-4 pb-28">
          {restaurantsElements}
          {/* {restaurantsElements} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantList;
