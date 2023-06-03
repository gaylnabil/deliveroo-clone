import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC, Key } from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { Category, Dish } from "../../redux/model";
import { truncate } from "../../helpers/util";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../../redux/sanityClient/sanity";
import { ScreenNavigationType } from "../../types/navigation";

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

const RestaurantCard: FC<IProps> = ({
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

  return (
    <TouchableOpacity
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
      className="bg-white mr-4 shadow"
    >
      <Image
        source={{ uri: urlFor(image).url() }}
        className="w-64 h-36 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{name}</Text>
        <View className="flex-row items-center space-x-1">
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
