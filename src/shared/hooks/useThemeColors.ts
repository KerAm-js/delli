import { THEME_COLORS, Theme } from "../consts/colors";
import { useColorScheme } from "react-native";

export const useThemeColors = (defaultTheme?: Theme) => {
  const theme: Theme | undefined | null = useColorScheme();
  return {
    theme,
    colors: THEME_COLORS[defaultTheme || theme || "light"],
  };
};
