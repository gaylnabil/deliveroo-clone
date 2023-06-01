import { View, Text, ScrollView } from "react-native";
import React, { FC, Key } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./../restaurants/RestaurantCard";
import { Restaurant } from "../../redux/model";

interface IProps {
  id: Key | null | undefined;
  title: string;
  description: string;
  restaurants: Restaurant[];
}

const FeaturedRow: FC<IProps> = ({ id, title, description, restaurants }) => {
  // const dispatch = useAppDispatch();
  // const restaurants = useAppSelector(
  //   (state) => state.restaurantStore.restaurants
  // );

  // useEffect(() => {
  //   dispatch(getFeaturedRestaurants(id));
  // }, [id]);

  console.log("id: ", id);

  const restaurantElements = restaurants?.map((rest) => {
    // console.log("rest._id: ", rest);
    return (
      <RestaurantCard
        key={rest._id}
        id={rest._id}
        image={rest.image}
        description={rest.description}
        title={rest.name}
        rating={rest.rating}
        genre={rest.genre}
        address={rest.address}
        dishes={rest.dishes}
        longitude={rest.longitude}
        latitude={rest.latitude}
      />
    );
  });

  return (
    <View>
      <View className="mt-4 px-4 flex-row item-center justify-between">
        {/* <Text>{id}</Text> */}
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        className="pt-4"
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* Restaurant Cards */}
        {restaurantElements}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
