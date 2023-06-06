import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

interface IProps {}

const Header: FC<IProps> = (props) => {
  return (
    <View className="flex-row pb-1 items-center mx-4 space-x-2">
      <Image
        source={{ uri: "https://links.papareact.com/wru" }}
        className="w-7 h-7 bg-gray-300 rounded-full"
      />

      <View className="flex-1 ">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-lg">
          Current Location
          <ChevronDownIcon size={20} color="#0081CC" />
        </Text>
      </View>
      <UserIcon size={35} color="#0081CC" />
    </View>
  );
};

export default Header;
