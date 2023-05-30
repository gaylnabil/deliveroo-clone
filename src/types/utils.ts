import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";


export const hideHeader=()=>{
  const navigation = useNavigation();

    useLayoutEffect(() => {
        // navigation.setOptions({ title: "Nabil" });
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
} 