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
        name="restaurant/[id]"
        options={{ title: "Restaurant Details" }}
      />
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
      <Stack.Screen
        name="cart"
        options={{
          headerShown: true,
          title: "My Cart",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "transparent", // Make the background transparent
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
