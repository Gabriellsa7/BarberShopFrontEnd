import { View, Text, Image } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constraints/color";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Constants from "expo-constants";
import { Link } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

export default function login() {
  return (
    <LinearGradient
      colors={["#141518", "#221C3D"]} // Cores do gradiente
      start={{ x: 0.2, y: 0 }} // Define o ponto inicial do gradiente
      end={{ x: 0.9, y: 1 }} // Define o ponto final do gradiente
      style={[
        globalStyles.centralization,
        { gap: 52, paddingTop: statusBarHeight + 20, paddingBottom: 20 },
      ]}
    >
      <View style={{ gap: 24, alignItems: "center" }}>
        <Image source={require("@/assets/Logo.png")} />
        <Text
          style={{
            color: colors.textPrimary,
            fontWeight: "600",
            fontSize: 24,
          }}
        >
          Join Us!
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 11,
          //   alignItems: "center",
          gap: 24,
        }}
      >
        <View style={{ gap: 13 }}>
          <Text
            style={{
              color: colors.textPrimary,
              fontWeight: "600",
              fontSize: 24,
            }}
          >
            Name
          </Text>
          <Input
            placeholder="Enter your Email"
            style={{
              borderRadius: 10,
              backgroundColor: "#FFFFFF",
              width: 360,
              padding: 13,
              maxWidth: 376,
            }}
          />
        </View>
        <View style={{ gap: 13 }}>
          <Text
            style={{
              color: colors.textPrimary,
              fontWeight: "600",
              fontSize: 24,
            }}
          >
            Email
          </Text>
          <Input
            placeholder="Enter your Email"
            style={{
              borderRadius: 10,
              backgroundColor: "#FFFFFF",
              width: 360,
              padding: 13,
              maxWidth: 376,
            }}
          />
        </View>
        <View style={{ gap: 13 }}>
          <Text
            style={{
              color: colors.textPrimary,
              fontWeight: "600",
              fontSize: 24,
            }}
          >
            Password
          </Text>
          <Input
            placeholder="Enter your Password"
            style={{
              borderRadius: 10,
              backgroundColor: "#FFFFFF",
              width: 360,
              padding: 13,
              maxWidth: 376,
            }}
          />
        </View>
      </View>
      <Button>
        <Text style={globalStyles.ButtonText}>Sign Up</Text>
      </Button>
      <Text style={globalStyles.ButtonText}>
        Already have an account?{" "}
        <Link href="/login">
          <Text style={{ color: "#706EFF", textDecorationLine: "underline" }}>
            Login
          </Text>
        </Link>
      </Text>
    </LinearGradient>
  );
}