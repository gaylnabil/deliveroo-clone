import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { Dish } from "../../redux/model";
import { truncate } from "../../utils/util";

interface IProps {
  id: number;
  imgUrl: string;
  description: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  dishes: Dish[];
  longitude: number;
  latitude: number;
}

const RestaurantCard: FC<IProps> = ({
  id,
  imgUrl,
  description,
  title,
  rating,
  genre,
  address,
  dishes,
  longitude,
  latitude,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-4 shadow">
      <Image source={{ uri: imgUrl }} className="w-64 h-36 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row item-center space-x-1">
          <StarIcon size={20} color="#00CCBB" opacity={0.5} />
          <Text className="text-sm text-gray-500">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>
        <View className="flex-row items-center py-1">
          <MapPinIcon className="" color="#00CCBB" size={20} opacity={0.5} />
          <Text className="text-sm text-gray-500"> {truncate(address)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
