import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FC, Key } from "react";
import { urlFor } from "../../redux/sanityClient/sanity";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { truncate } from "../../helpers/util";
import { Category, Dish, Restaurant } from "../../redux/model";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationType } from "../../helpers/navigation";

interface IProps {
  id: Key;
  image: string;
  description: string;
  name: string;
  rating: number;
  genre: string;
  address: string;
  dishes: Dish[];
  longitude: number;
  latitude: number;
  type: Category;
}

const RestaurantItem: FC<IProps> = ({
  id,
  image,
  description,
  name,
  rating,
  genre,
  address,
  dishes,
  longitude,
  latitude,
  type,
}) => {
  const navigation = useNavigation<ScreenNavigationType>();

  // console.log("ResttaurantItem image: ", image);
  return (
    <TouchableOpacity
      className="flex flex-row my-1 bg-white"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id: id,
          image: image,
          description: description,
          name: name,
          rating: rating,
          genre: genre,
          address: address,
          dishes: dishes,
          longitude: longitude,
          latitude: latitude,
          type: type,
        });
      }}
    >
      <Image source={{ uri: urlFor(image).url() }} className="w-32 h-24" />
      <View className="pl-2 pb-4">
        <Text className="font-bold text-sm">{name}</Text>
        <View className="mt-2">
          <View className="flex-row items-center space-x-1 ">
            <StarIcon size={16} color="#0081CC" opacity={0.5} />
            <Text className="text-xs text-gray-500">
              <Text className="text-[#0081CC]">{rating}</Text> - {genre}
            </Text>
          </View>
          <View className="flex-row items-start py-1">
            <MapPinIcon color="#0081CC" size={16} opacity={0.5} />
            <View className="flex-row p-0 ">
              <Text className="text-xs text-gray-500 w-[81%]">
                {" "}
                {truncate(address, 50)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;
