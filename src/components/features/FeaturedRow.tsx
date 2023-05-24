import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./../restaurants/RestaurantCard";

interface IProps {
  id: number;
  title: string;
  description: string;
}

const FeaturedRow: FC<IProps> = ({ id, title, description }) => {
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
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          short_description="The cheese should be melted, the crust should have some crunch to it, the toppings should be well-cooked and the whole thing should be served piping hot"
          title="Pizza"
          rating={5}
          genre="Italian"
          address="Address of the pizza 142"
          dishes={[]}
          long={20}
          lat={1}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          short_description="The cheese should be melted, the crust should have some crunch to it, the toppings should be well-cooked and the whole thing should be served piping hot"
          title="Pizza"
          rating={5}
          genre="Italian"
          address="Address of the pizza 142"
          dishes={[]}
          long={20}
          lat={1}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          short_description="The cheese should be melted, the crust should have some crunch to it, the toppings should be well-cooked and the whole thing should be served piping hot"
          title="Pizza"
          rating={5}
          genre="Italian"
          address="Address of the pizza 142"
          dishes={[]}
          long={20}
          lat={1}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          short_description="The cheese should be melted, the crust should have some crunch to it, the toppings should be well-cooked and the whole thing should be served piping hot"
          title="Pizza"
          rating={5}
          genre="Italian"
          address="Address of the pizza 142"
          dishes={[]}
          long={20}
          lat={1}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
