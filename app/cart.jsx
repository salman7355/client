import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const cart = () => {
  const handleCheckout = () => {
    router.push("/successful");
  };

  const restaurants = [
    {
      id: 1,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
    },
    {
      id: 3,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
    },
    {
      id: 2,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
    },
    {
      id: 41,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
    },
    {
      id: 11,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
    },
    {
      id: 12,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
    },
    {
      id: 14,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          gap: 10,
          paddingHorizontal: 20,
          marginBottom: 60,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={restaurants}
          renderItem={(item) => (
            <RestaurantCard restaurant={item.item} toAdd={false} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingVertical: 10,
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          alignSelf: "center",
          paddingHorizontal: 20,
          position: "absolute",
          bottom: 20,
        }}
      >
        <CustomButton text="Checkout" onPress={handleCheckout} />
      </View>
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
