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
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "Gilroy-bold",
    lineHeight: 26,
  },
  standart: {
    fontSize: 17,
    fontWeight: "medium",
    fontFamily: "Gilroy-medium",
    lineHeight: 21,
  },
  standartSemibold: {
    fontSize: 17,
    fontWeight: "semibold",
    fontFamily: "Gilroy-semibold",
    lineHeight: 21,
  },
  standartBold: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Gilroy-bold",
    lineHeight: 21,
  },
  small: {
    fontSize: 15,
    fontWeight: "medium",
    fontFamily: "Gilroy-medium",
    lineHeight: 19,
  },
  smallSemibold: {
    fontSize: 15,
    fontWeight: "semibold",
    fontFamily: "Gilroy-semibold",
    lineHeight: 19,
  },
  smallBold: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Gilroy-bold",
    lineHeight: 19,
  },
  ultraSmall: {
    fontSize: 12,
    fontWeight: "medium",
    fontFamily: "Gilroy-medium",
    lineHeight: 14,
  },
};
