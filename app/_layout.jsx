import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
      <Stack.Screen name="home" />
      <Stack.Screen
        name="profile"
        options={{
          headerShown: true,
          title: "Profile",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#ee6732", // Make the background transparent
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
