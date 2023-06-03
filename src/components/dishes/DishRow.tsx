import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC, Key, useState } from "react";
import { CurrencyDollarIcon } from "react-native-heroicons/outline";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addToBasket,
  removeFromBasket,
} from "./../../redux/slices/basketSlice";
import { urlFor } from "./../../redux/sanityClient/sanity";
import { USD } from "../../helpers/util";

interface IProps {
  // id: Key | null | undefined;
  id: Key;
  title: string;
  description: string;
  image: string;
  price: number;
}

const DishRow: FC<IProps> = ({ id, title, description, image, price }) => {
  const dispatch = useAppDispatch();
  const [isShow, setIsShow] = useState(false);
  const selectedBasketItems = useAppSelector((state) =>
    state.basketStore.items.filter((item) => item._id === id)
  );

  const addBasket = () => {
    dispatch(
      addToBasket({
        _id: id,
        name: title,
        description: description,
        image: image,
        price: price,
      })
    );
  };

  const removeBasket = (id: Key) => {
    // const removeBasket = (id: Key | null | undefined) => {
    dispatch(removeFromBasket(id));
  };

  console.log("=============================");
  console.log("selectedBasketItems: ", selectedBasketItems);
  console.log("count: ", selectedBasketItems.length);

  return (
    <View className="bg-white border-b first-letter:border-gray-300 my-1 p-4">
      <TouchableOpacity
        onPress={() => setIsShow(!isShow)}
        className="flex-row justify-between space-x-2 items-start"
      >
        <View className="flex-column justify-center flex-1">
          <Text className="text-xl font-bold mb-2">{title}</Text>
          <Text className="text-sm text-gray-500 text-justify pr-2">
            {description}
          </Text>
          <View className="flex-row items-center pt-3">
            <CurrencyDollarIcon color="#00CCBB" size={20} />
            <Text className="text-base text-gray-500 font-bold pl-1">
              {USD.format(price)}
            </Text>
          </View>
        </View>
        <Image
          source={{ uri: urlFor(image).url() }}
          className="w-32 h-28 rounded-md"
        />
      </TouchableOpacity>

      {isShow && (
        <View className="flex-row space-x-2 mt-3 items-center">
          <TouchableOpacity
            onPress={() => {
              removeBasket(id);
            }}
            disabled={!selectedBasketItems.length}
          >
            <MinusCircleIcon
              size={38}
              color={selectedBasketItems.length > 0 ? "#00CCBB" : "gray"}
            />
          </TouchableOpacity>
          <Text className="text-lg font-bold">
            {selectedBasketItems.length}
          </Text>
          <TouchableOpacity
            onPress={() => {
              addBasket();
            }}
          >
            <PlusCircleIcon size={38} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DishRow;
