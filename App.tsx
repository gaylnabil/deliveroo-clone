import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";

import { NativeWindStyleSheet } from "nativewind";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { RootStackParamList } from "./src/types/navigation";
import { Platform } from "react-native";

import { setupURLPolyfill } from "react-native-url-polyfill";

if (Platform.OS !== "web") {
  setupURLPolyfill();
}
NativeWindStyleSheet.setOutput({
  default: "native",
});

console.log("Platform OS: " + Platform.OS);
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={{ title: "Title" }}
          />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
