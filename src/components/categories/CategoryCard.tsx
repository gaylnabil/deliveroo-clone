import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { urlFor } from "../../redux/sanityClient/sanity";

interface IProps {
  image: string;
  title: string;
}

const CategoryCart: FC<IProps> = ({ image, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{ uri: urlFor(image).url() }}
        className="w-20 h-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCart;
