import { View, Text } from "react-native";
import React, { FC } from "react";
import Header from "./Header";
import Search from "./Seearch";

interface IProps {}

const LayoutHeader: FC<IProps> = (props) => {
  return (
    <View className="pb-1">
      {/* Header */}
      <Header />
      {/* Search */}
      <Search />
      {/* Body */}
    </View>
  );
};

export default LayoutHeader;
