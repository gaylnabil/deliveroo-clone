import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";


export const hideHeader=()=>{
  const navigation = useNavigation();

    useLayoutEffect(() => {
        // navigation.setOptions({ title: "Nabil" });
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
} 

export const truncate = (text: string) =>{
    return text.length > 30 ? `${text.substring(0, 30)}...` : text;
  }
  
export const USD = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

export const ColorHex = "#0081CC" /*"#00CCBB" */
