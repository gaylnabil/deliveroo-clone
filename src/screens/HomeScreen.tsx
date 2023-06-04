import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { FC, useEffect } from "react";
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
import {
  getAllCategories,
  getAllFeatures,
} from "./../redux/actions/actionThunk";
import { hideHeader } from "../types/utils";
import { setFeatures } from "../redux/slices/FeaturedSlice";
import { setCategories } from "../redux/slices/catgorieSlice";

const HomeScreen: FC = () => {
  const dispatch = useAppDispatch();
  const features = useAppSelector((state) => state.featuredStore.features);
  const [refreshing, setRefreshing] = React.useState(false);

  hideHeader();

  const clearData = () => {
    dispatch(setCategories([]));
    dispatch(setFeatures([]));
  };

  const getData = () => {
    dispatch(getAllCategories());
    dispatch(getAllFeatures());
  };

  useEffect(() => {
    dispatch(getAllFeatures());
  }, []);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      clearData();
    }, 1800);
    setTimeout(() => {
      clearData();
      getData();
      setRefreshing(false);
    }, 2000);
  };

  const featuredElements = features?.map((feature) => {
    // console.log("Nabil Feature: ", feature._id);
    return (
      <FeaturedRow
        key={feature._id}
        id={feature._id}
        name={feature.name}
        description={feature.description}
        restaurants={feature.restaurants}
      />
    );
  });

  // console.log("Features: ", features);
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
      <ScrollView
        className="bg-gray-100"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
