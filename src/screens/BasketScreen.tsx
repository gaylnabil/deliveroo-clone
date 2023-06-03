import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { FC, Key, useMemo, useState } from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  XCircleIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../redux/store";
import { useAppSelector } from "./../redux/store";
import { Dish } from "../redux/model";
import { urlFor } from "../redux/sanityClient/sanity";
import { USD } from "../helpers/util";
import { removeFromBasket } from "../redux/slices/basketSlice";

interface IProps {}

const BasketScreen: FC<IProps> = (props) => {
  const navigation = useNavigation();
  const baskets = useAppSelector((state) => state.basketStore.items);

  if (baskets.length === 0) navigation.goBack();

  const dispatch = useAppDispatch();
  const restaurant = useAppSelector(
    (state) => state.restaurantStore.restaurantSelected
  );

  const [groupeItemsInBaskets, setGroupeItemsInBaskets] = useState<any>([]);
  const subTotalPrice = baskets.reduce((total, item) => total + item.price, 0);
  const deliveryFee: number = baskets.length === 0 ? 0 : 10;
  const total = subTotalPrice + deliveryFee;

  useMemo(() => {
    const groupItems = baskets.reduce((results: any, item: Dish) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});

    setGroupeItemsInBaskets(groupItems);
  }, [baskets]);

  // console.log("groupeItemsInBaskets: ", groupeItemsInBaskets);

  const removeBasket = (id: Key) => {
    // const removeBasket = (id: Key | null | undefined) => {
    dispatch(removeFromBasket(id));
  };
  // console.log(process.env.PUBLIC_URL);
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="bg-white flex-row items-center py-6 border-b border-[#00CCBB] relative">
        <View className="flex-1 items-center">
          <Text className="font-bold text-lg">Baskets</Text>
          <Text className="text-xs text-gray-500">{restaurant.name}</Text>
        </View>
        <TouchableOpacity
          className="bg-gray-100 rounded-full absolute top-7 right-3"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <XCircleIcon size={42} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white flex-row space-x-4 items-center p-4 mt-4 border-y border-gray-200 ">
        <Image
          source={require("./../images/delivery-scooter.png")}
          style={{ width: 7, height: 7, resizeMode: "center" }}
          className="bg-gray-100 p-4 rounded-full"
        />

        <Text className="flex-1 text-gray-500">Deliver in 55-75 min</Text>
        <TouchableOpacity>
          <PencilSquareIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <ScrollView className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
        <View className="pb-1">
          {Object.entries(groupeItemsInBaskets).map(([key, items]) => {
            const dishes = items as Dish[];
            const dish = dishes[0];
            return (
              <View
                key={key}
                className="bg-white flex-row space-x-1 items-center p-4"
              >
                <Text className="text-[#00CCBB] font-bold">
                  {dishes.length} x
                </Text>
                <Image
                  source={{
                    uri: urlFor(dish.image).url(),
                  }}
                  className="w-7 h-7 bg-gray-100 p-4 rounded-full"
                />
                <Text className="flex-1 text-gray-500 pl-1">{dish.name}</Text>
                <Text className="text-gray-500 pr-1">
                  {USD.format(dish.price)}
                </Text>
                <TouchableOpacity onPress={() => removeBasket(dish._id)}>
                  <TrashIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View>
        <View className="bg-white p-4">
          <View className="flex-row items-center justify-between py-1">
            <Text className="text-gray-400 font-bold">Subtotal</Text>
            <Text className="text-gray-400 font-bold">
              {USD.format(subTotalPrice)}
            </Text>
          </View>
          <View className="flex-row items-center justify-between py-1">
            <Text className="text-gray-400 font-bold">Delivery fee</Text>
            <Text className="text-gray-400 font-bold">
              {USD.format(deliveryFee)}
            </Text>
          </View>
          <View className="flex-row items-center justify-between py-2">
            <Text className="text-lg font-bold">Total</Text>
            <Text className="text-lg font-bold">{USD.format(total)}</Text>
          </View>
          <TouchableOpacity className="bg-[#00CCBB] p-3 rounded-lg my-1">
            <Text className="text-white font-bold text-lg text-center">
              Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
