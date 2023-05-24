import { View, Text } from "react-native";
import React, { FC } from "react";
import { ScrollView } from "react-native";
import CategoryCart from "./CategoryCart";

interface IProps {}

const Categories: FC<IProps> = (props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category Cart */}
      <CategoryCart
        imgUrl="https://links.papareact.com/gn7"
        title="Category Cart 01"
      />
      <CategoryCart
        imgUrl="https://links.papareact.com/gn7"
        title="Category Cart 02"
      />
      <CategoryCart
        imgUrl="https://links.papareact.com/gn7"
        title="Category Cart 03"
      />
    </ScrollView>
  );
};

export default Categories;
