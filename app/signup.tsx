import { View, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "@/styles/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/constraints/color";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Constants from "expo-constants";
import { Link, useRouter } from "expo-router";
import { createClient } from "@/api/client-service";

const statusBarHeight = Constants.statusBarHeight;

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      const clientData = { name, email, password };
      const newClient = await createClient(clientData);
      Alert.alert(
        "Sucesso",
        `Cliente ${newClient.name} cadastrado com sucesso!`
      );
      setName("");
      setEmail("");
      setPassword("");

      // Redirecionar para a página de login
      router.push("/login");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar o cliente.");
    }
  };

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
            onChange={setName}
            placeholder="Enter your Name"
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
            onChange={setEmail}
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
            onChange={setPassword}
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
      <Button onPress={handleSubmit}>
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
