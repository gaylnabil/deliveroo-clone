import { ScrollView, RefreshControl, View } from "react-native";
import React, { FC, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/categories/Categories";
import FeaturedRow from "../components/features/FeaturedRow";

import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  getAllCategories,
  getAllFeatures,
} from "./../redux/actions/actionThunk";
import { setFeatures } from "../redux/slices/FeaturedSlice";
import { setCategories } from "../redux/slices/catgorieSlice";
import Header from "../components/layouts/Header";
import Search from "./../components/layouts/Seearch";
import { hideHeader } from "../helpers/util";

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
      <View className="pb-1">
        {/* Header */}
        <Header />
        {/* Search */}
        <Search />
        {/* Body */}
      </View>
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
