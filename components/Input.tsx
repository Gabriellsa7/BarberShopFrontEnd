import { View, Text, StyleProp, TextStyle } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

interface Props {
  placeholder: string;
  style?: StyleProp<TextStyle>;
  onChange?:  (value: string) => void;
}

export default function Input({ placeholder, style,onChange }: Props) {
  return (
    <View>
      <TextInput placeholder={placeholder} style={style} onChangeText={onChange}/>
    </View>
  );
}
