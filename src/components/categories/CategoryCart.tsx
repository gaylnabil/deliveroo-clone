import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";

interface IProps {
  imgUrl: string;
  title: string;
}

const CategoryCart: FC<IProps> = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="w-20 h-20 rounded" />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCart;
