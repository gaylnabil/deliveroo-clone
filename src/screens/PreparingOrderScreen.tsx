import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { ScreenNavigationType } from "../types/navigation";

interface IProps {}

const PreparingOrderScreen: FC<IProps> = (props) => {
  const navigation = useNavigation<ScreenNavigationType>();

  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setIndex(index + 1);
      navigation.navigate("Delivery");
    }, 1000);
  }, []);

  return (
    <SafeAreaView className="relative bg-[#00CCBB] flex-1 items-center justify-center content-center">
      <Animatable.Image
        source={require("./../images/preparing-order.gif")}
        animation={"slideInUp"}
        iterationCount={1}
        className="w-96 h-96"
      />

      <Animatable.Text
        animation={"fadeIn"}
        iterationCount={1}
        className="text-white font-bold text-center text"
        delay={200}
      >
        Please waiting until the restaurant accepts your orders {index}
      </Animatable.Text>

      <Progress.Circle
        className="mt-10"
        size={50}
        indeterminate={true}
        color="white"
      />
      <TouchableOpacity
        className="bg-gray-100 rounded-full absolute top-14 right-4"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <XCircleIcon size={42} color="#00CCBB" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
