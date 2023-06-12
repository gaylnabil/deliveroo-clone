import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";


export const hideHeader=()=>{
  const navigation = useNavigation();

    useLayoutEffect(() => {
        // navigation.setOptions({ title: "Nabil" });
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
} 

export const truncate = (text: string, num: number=30): string => {
    return text.length > num ? `${text.substring(0, num)}...` : text;
  }
  
export const USD = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

export const ColorHex = "#0081CC" /*"#00CCBB" */
