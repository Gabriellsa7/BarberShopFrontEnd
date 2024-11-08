import { globalStyles } from "@/styles/globalStyles";
import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";
import { colors } from "@/constraints/color";
import { useRouter } from "expo-router";

export default function InitialPage() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#141518", "#221C3D"]} // Cores do gradiente
      start={{ x: 0.2, y: 0 }} // Define o ponto inicial do gradiente
      end={{ x: 0.9, y: 1 }} // Define o ponto final do gradiente
      style={[globalStyles.centralization, { gap: 52 }]}
    >
      <View>
        <Image source={require("@/assets/Logo.png")} />
      </View>
      <View style={{ gap: 24 }}>
        <Button onPress={() => router.push("/login")}>
          <Text style={globalStyles.ButtonText}>Login</Text>
        </Button>
        <Button onPress={() => router.push("/signup")}>
          <Text style={globalStyles.ButtonText}>Sign Up</Text>
        </Button>
      </View>
    </LinearGradient>
  );
}
