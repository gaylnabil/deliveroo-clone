import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { PhoneIcon, XMarkIcon } from "react-native-heroicons/solid";
import { ScreenNavigationType } from "../types/navigation";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import { useAppSelector } from "../redux/store";

interface IProps {}

const DeliveryScreen: FC<IProps> = (props) => {
  const navigation = useNavigation<ScreenNavigationType>();

  const restaurant = useAppSelector(
    (state) => state.restaurantStore.restaurantSelected
  );

  console.log("Restaurant Delivery: ", restaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity
            className=""
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <XMarkIcon size={32} color="white" />
          </TouchableOpacity>
          <Text className="text-lg text-white">Order help?</Text>
        </View>
        <View className="bg-white mx-5 my-5 p-5 rounded-lg z-50">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-gray-500 py-1">Estimated Arrival</Text>
              <Text className="text-2xl font-extrabold py-1">
                45-75 Minutes
              </Text>
            </View>
            <Image
              source={require("./../images/delivery-scooter.png")}
              style={{ width: 64, height: 64, resizeMode: "center" }}
              className=""
            />
          </View>
          <Progress.Bar
            className="my-1"
            progress={0.3}
            width={200}
            color={"#00CCBB"}
            indeterminate={true}
          />
          <Text className="text-gray-500 py-1 text-sm">
            Your Order at {restaurant.name} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1 -mt-10 z-0"
        mapType={"mutedStandard"}
      >
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          title={restaurant.name}
          description={restaurant.description}
          identifier={"origin"}
          pinColor={"#00CCBB"}
        />
      </MapView>

      <SafeAreaView className="pt-2 px-2">
        <View className="bg-white flex-row items-center justify-between p-4 rounded-t-md">
          <View className="flex-row items-center space-x-2">
            <Image
              source={require("./../images/delivery-scooter.png")}
              style={{ width: 32, height: 32, resizeMode: "center" }}
              className=""
            />
            <View>
              <Text className="font-bold">Nabil GAYL</Text>
              <Text className="text-gray-500 text-xs">Your Rider</Text>
            </View>
          </View>
          <PhoneIcon size={20} color="#00CCBB" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
