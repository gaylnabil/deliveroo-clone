import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { CurrencyDollarIcon } from "react-native-heroicons/outline";

interface IProps {
  title: string;
  description: string;
  imgUrl: string;
  price: number;
}

let USD = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const DishRow: FC<IProps> = ({ title, description, imgUrl, price }) => {
  return (
    <TouchableOpacity className="flex-row justify-between space-x-2 p-4 items-start bg-white border-b  border-gray-300 my-1">
      <View className="flex-column justify-center flex-1">
        <Text className="text-xl font-bold mb-2">{title}</Text>
        <Text className="text-sm text-gray-500 text-justify pr-2">
          {description}
        </Text>
        <View className="flex-row items-center pt-3">
          <CurrencyDollarIcon color="#00CCBB" size="20" />
          <Text className="text-base text-gray-500 font-bold pl-1">
            {USD.format(price)}
          </Text>
        </View>
      </View>
      <Image source={{ uri: imgUrl }} className="w-32 h-28 rounded-md" />
    </TouchableOpacity>
  );
};

export default DishRow;
