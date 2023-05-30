import { View, Text } from "react-native";
import React, { FC, useEffect } from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import { useAppDispatch, useAppSelector } from "./../../redux/store";
import { getAllCategories } from "./../../redux/actions/actionThunk";
import { urlFor } from "../../redux/sanityClient/sanity";

interface IProps {}

const Categories: FC<IProps> = (props) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categoryStore.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const categoryElements = categories.map((cat) => {
    return (
      <CategoryCard
        key={cat._id}
        imgUrl={urlFor(cat.image).url()}
        title={cat.name}
      />
    );
  });

  // console.log("categories: ", categories);
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

      {categoryElements}
    </ScrollView>
  );
};

export default Categories;
