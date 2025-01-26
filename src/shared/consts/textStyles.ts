import { TextStyle } from "react-native";

type TKey =
  | "titleBig"
  | "title"
  | "standart"
  | "standartSemibold"
  | "standartBold"
  | "small"
  | "smallSemibold"
  | "smallBold"
  | "ultraSmall";

export const TEXT_STYLES: { [key in TKey]: TextStyle } = {
  titleBig: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Gilroy-bold",
    lineHeight: 30,
    letterSpacing: 0.1,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "Gilroy-bold",
    lineHeight: 26,
    letterSpacing: 0.1,
  },
  standart: {
    fontSize: 17,
    fontWeight: "medium",
    fontFamily: "Gilroy-medium",
    lineHeight: 21,
    letterSpacing: 0.1,
  },
  standartSemibold: {
    fontSize: 17,
    fontWeight: "semibold",
    fontFamily: "Gilroy-semibold",
    lineHeight: 21,
    letterSpacing: 0.1,
  },
  standartBold: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Gilroy-bold",
    lineHeight: 21,
    letterSpacing: 0.1,
  },
  small: {
    fontSize: 15,
    fontWeight: "medium",
    fontFamily: "Gilroy-medium",
    lineHeight: 19,
    letterSpacing: 0.1,
  },
  smallSemibold: {
    fontSize: 15,
    fontWeight: "semibold",
    fontFamily: "Gilroy-semibold",
    lineHeight: 19,
    letterSpacing: 0.1,
  },
  smallBold: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Gilroy-bold",
    lineHeight: 19,
    letterSpacing: 0.1,
  },
  ultraSmall: {
    fontSize: 13,
    fontWeight: "medium",
    fontFamily: "Gilroy-medium",
    lineHeight: 15,
    letterSpacing: 0.1,
  },
};
