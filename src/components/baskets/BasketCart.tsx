import { View, Text, TouchableOpacity } from "react-native";
import React, { Component, FC } from "react";
import { useAppSelector } from "../../redux/store";
import { USD } from "../../helpers/util";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationType } from "../../types/navigation";

interface IProps {}

const BasketCart: FC<IProps> = (props) => {
  const baskets = useAppSelector((state) => state.basketStore.items);
  const subTotalPrice = baskets.reduce((total, item) => total + item.price, 0);
  const navigation = useNavigation<ScreenNavigationType>();

  // Hide BasketCart Component if baskets array is empty
  if (baskets.length === 0) return null;

  return (
    <View className="absolute w-full bottom-10">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="flex-row items-center justify-between bg-[#00c9bf] mx-6 p-3 border-[#00c4ba] border-2 rounded-md"
      >
        <View className="bg-[#00b9b0] px-2 py-1 border-2 border-[#00b3aa] rounded-md">
          <Text className="text-white text-lg font-bold">{baskets.length}</Text>
        </View>
        <Text className="text-white text-lg font-bold">Total Basket</Text>
        <View className="">
          <Text className="text-white text-lg font-bold">
            {USD.format(subTotalPrice)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BasketCart;
