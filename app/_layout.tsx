import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="register" />
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
