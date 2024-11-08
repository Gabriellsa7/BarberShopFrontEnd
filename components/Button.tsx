import { colors } from "@/constraints/color";
import React from "react";
import { Pressable, StyleProp, StyleSheet, TextStyle } from "react-native";

interface ButtonProps {
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  color?: string; // Cor opcional para o botão
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }, styles.button]}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primaryPurple,
    paddingHorizontal: 116,
    paddingVertical: 15,
    borderRadius: 10,
    width: 360,
  },
});
