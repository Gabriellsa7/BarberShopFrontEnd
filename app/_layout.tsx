import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
        initialRouteName="index"
      >
        {/* Optionally configure static options outside the route.*/}
        <Stack.Screen name="index" options={{ title: "Initial" }} />
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="signup" options={{ title: "SignUp" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
