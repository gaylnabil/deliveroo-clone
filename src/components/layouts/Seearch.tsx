import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

interface IProps {}

const Search: FC<IProps> = (props) => {
  return (
    <View className="flex-row items-center space-x-2 mx-4">
      <View className="flex-row items-center space-x-2 bg-gray-200 p-3 flex-1">
        <MagnifyingGlassIcon size={20} color="gray" />
        <TextInput
          placeholder="Restaurants and Cuisines"
          keyboardType="default"
          className="flex-1"
        />
      </View>
      <AdjustmentsVerticalIcon size={35} color="#0081CC" />
    </View>
  );
};

export default Search;
