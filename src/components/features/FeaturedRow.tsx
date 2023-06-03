import { View, Text, ScrollView } from "react-native";
import React, { FC, Key, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./../restaurants/RestaurantCard";
import { Restaurant } from "../../redux/model";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getFeatured } from "../../redux/actions/actionThunk";
interface IProps {
  id: Key;
  name: string;
  description: string;
  restaurants: Restaurant[];
}

const FeaturedRow: FC<IProps> = ({ id, name, description, restaurants }) => {
  // const dispatch = useAppDispatch();
  // const restaurants = useAppSelector(
  //   (state) => state.featuredStore.featuredSelected.restaurants
  // );

  // useEffect(() => {
  //   dispatch(getFeatured(id));

  //   return () => {
  //     console.log("component unmounting...");
  //   };
  // }, [id, dispatch]);

  const restaurantElements = restaurants?.map((rest, index) => {
    // console.log("rest._id: ", rest);
    return (
      <RestaurantCard
        key={index}
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
    <View>
      <View className="mt-4 px-4 flex-row item-center justify-between">
        {/* <Text>{id}</Text> */}
        <Text className="font-bold text-lg">{name}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        className="pt-4"
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* Restaurant Cards */}
        {restaurantElements}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
