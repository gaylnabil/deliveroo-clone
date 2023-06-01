import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "./../types/navigation";
import { hideHeader } from "./../types/utils";
import {
  ArrowLeftCircleIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";
import DishRow from "./../components/dishes/DishRow";
import { urlFor } from "./../redux/sanityClient/sanity";
import ModalBasketBottom from "./../components/modals/ModalBasketBottom";

export type RestaurantScreenRouteType = RouteProp<
  RootStackParamList,
  "Restaurant"
>;

const RestaurantScreen: FC = () => {
  const navigation = useNavigation();

  const {
    params: {
      // id,
      image,
      description,
      title,
      rating,
      genre,
      address,
      dishes,
      longitude,
      latitude,
    },
  } = useRoute<RestaurantScreenRouteType>();

  hideHeader();

  return (
    <>
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(image).url() }}
            className="w-full h-64 bg-gray-500 p-4"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-12 left-5 bg-gray-100 rounded-full"
          >
            <ArrowLeftCircleIcon size={42} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white pt-4">
          <View className="pb-4 px-4">
            <Text className="font-bold text-2xl pt-1 pb-2">{title}</Text>

            <View className="flex-row items-center space-x-1">
              <View className="flex-row items-center space-x-1 mr-1">
                <StarIcon size={20} color="#00CCBB" opacity={0.5} />
                <Text className="text-sx text-gray-500">
                  <Text className="text-green-500">{rating}</Text> - {genre}
                </Text>
              </View>
            </View>
            <View className="flex-row items-start space-x-1 mt-2">
              <MapPinIcon
                className=""
                color="#00CCBB"
                size={20}
                opacity={0.5}
              />
              <Text className="text-sm text-gray-500 break-all ">
                {address}
              </Text>
            </View>

            <Text className=" text-sm text-gray-500 pt-4 text-justify">
              {description}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center justify-between border-y border-gray-300 p-4">
            <QuestionMarkCircleIcon size={25} color="gray" />
            <Text className="text-base font-bold flex-1 pl-2 text-gray-800">
              You have food allergy?
            </Text>
            <ChevronRightIcon size={25} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="">
          <Text className="text-xl font-bold p-4">Menu</Text>
        </View>

        {/* Dishes */}
        <View className="pb-32">
          {dishes.map((dish, index) => {
            return (
              <DishRow
                key={dish._id}
                id={dish._id}
                title={dish.name}
                description={dish.description}
                image={dish.image}
                price={dish.price}
              />
            );
          })}
        </View>
      </ScrollView>
      <ModalBasketBottom />
    </>
  );
};

export default RestaurantScreen;
