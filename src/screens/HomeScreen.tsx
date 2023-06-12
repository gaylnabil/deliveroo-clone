import {
  ScrollView,
  RefreshControl,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
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
import { hideHeader } from "../helpers/util";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationType } from "../helpers/navigation";
import LayoutHeader from "../components/layouts/LayoutHeader";
import { getRestaurants } from "../redux/actions/actionThunk";

const HomeScreen: FC = () => {
  const dispatch = useAppDispatch();
  const features = useAppSelector((state) => state.featuredStore.features);
  const restaurants = useAppSelector(
    (state) => state.restaurantStore.restaurants
  );
  const [refreshing, setRefreshing] = React.useState(false);

  hideHeader();

  const clearData = () => {
    dispatch(setCategories([]));
    dispatch(setFeatures([]));
  };

  const getData = () => {
    dispatch(getAllCategories());
    dispatch(getAllFeatures());
    dispatch(getRestaurants(3));
  };

  useEffect(() => {
    getData();
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
      <LayoutHeader />
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

        <FeaturedRow
          id=""
          name="Restaurants"
          description={"Click the arrow to show the list of restaurants"}
          restaurants={restaurants}
        />
        <View className="my-14"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
