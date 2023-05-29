import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { FC, useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories/Categories";
import FeaturedRow from "../components/features/FeaturedRow";

import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAllFeatures } from "./../redux/actions/actionThunk";

const HomeScreen: FC = () => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  const [features, featuredSelected] = useAppSelector((state) => [
    state.featuredStore.features,
    state.featuredStore.featuredSelected,
  ]);

  useLayoutEffect(() => {
    // navigation.setOptions({ title: "Nabil" });
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    dispatch(getAllFeatures());
  }, []);

  const featuredElements = features.map((feature) => {
    return (
      <FeaturedRow
        key={feature._id}
        id={feature._id}
        title={feature.name}
        description={feature.description}
        restaurants={feature.restaurants}
      />
    );
  });

  console.log("Features: ", features);
  return (
    <SafeAreaView className="bg-white pt-1 pb-1">
      {/* Header */}
      <View className="flex-row pb-1 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="w-7 h-7 bg-gray-300 rounded-full"
        />

        <View className="flex-1 ">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-lg">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
            className="flex-1"
          />
        </View>
        <AdjustmentsVerticalIcon size={35} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Features rows */}
        {/* Features */}
        {featuredElements}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
