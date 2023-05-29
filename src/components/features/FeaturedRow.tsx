import { View, Text, ScrollView } from "react-native";
import React, { FC, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./../restaurants/RestaurantCard";
import { Restaurant } from "../../redux/model";
import { urlFor } from "../../redux/sanityClient/sanity";
interface IProps {
  id: number;
  title: string;
  description: string;
  restaurants: Restaurant[];
}

const FeaturedRow: FC<IProps> = ({ id, title, description, restaurants }) => {
  const restaurantElements = restaurants.map((rest, index) => {
    console.log("rest._id: ", rest._id);
    return (
      <RestaurantCard
        key={rest._id}
        id={rest._id}
        imgUrl={urlFor(rest.imgUrl).url()}
        description={rest.description}
        title={rest.name}
        rating={rest.rating}
        genre={rest.genre}
        address={rest.address}
        dishes={rest.dishes}
        longitude={rest.longitude}
        latitude={rest.latitude}
      />
    );
  });

  return (
    <View>
      <View className="mt-4 px-4 flex-row item-center justify-between">
        {/* <Text>{id}</Text> */}
        <Text className="font-bold text-lg">{title}</Text>
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
