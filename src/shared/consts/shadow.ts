import { ViewStyle } from "react-native";
import { COLORS } from "./colors";

export const SHADOW_STYLE: ViewStyle = {
  shadowColor: COLORS.shadow,
  shadowRadius: 25,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.7,
}