import { colors } from "@/constraints/color";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  centralization: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 22,
  },
  fullScreen: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  ButtonText: {
    color: colors.textPrimary,
    fontWeight: "600",
    fontSize: 16,
  },
});
