import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const cart = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

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
      price: 10,
    },
    {
      id: 3,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
      price: 12,
    },
    {
      id: 2,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
      price: 8,
    },
    {
      id: 41,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
      price: 15,
    },
    {
      id: 11,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
      price: 9,
    },
    {
      id: 12,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
      price: 11,
    },
    {
      id: 14,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
      price: 14,
    },
  ];

  const getTotalPrice = () => {
    return restaurants.reduce(
      (total, restaurant) => total + restaurant.price,
      0
    );
  };
  const totalPrice = getTotalPrice();
  const tax = totalPrice * 0.14;
  const total = totalPrice + tax;

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 490 }}>
        <View style={styles.summary}>
          <View style={styles.summaryCard}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                alignSelf: "center",
                marginBottom: 10,
              }}
            >
              Summary
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Number of items
              </Text>
              <Text style={{ fontSize: 16 }}>{restaurants.length}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Items total
              </Text>
              <Text style={{ fontSize: 16 }}>${getTotalPrice()}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Tax</Text>
              <Text style={{ fontSize: 16 }}>${tax}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total</Text>
              <Text style={{ fontSize: 16 }}>${total}</Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={styles.radioButtonContainer}
                onPress={() => setSelectedPaymentMethod("cash")}
              >
                <View style={styles.radioButton}>
                  {selectedPaymentMethod === "cash" && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </View>
                <View style={{ width: 25, height: 18 }}>
                  <Image
                    source={require("../assets/images/cash.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                    }}
                  />
                </View>
                <Text style={{ fontSize: 18 }}>Cash on Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioButtonContainer}
                onPress={() => setSelectedPaymentMethod("credit")}
              >
                <View style={styles.radioButton}>
                  {selectedPaymentMethod === "credit" && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </View>
                <View style={{ width: 25, height: 18 }}>
                  <Image
                    source={require("../assets/images/visa.jpg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                    }}
                  />
                </View>
                <Text style={{ fontSize: 18 }}>Credit Card on Delivery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
      </View>
      <View
        style={{
          width: "100%",
          alignSelf: "center",
          paddingHorizontal: 20,
          position: "absolute",
          bottom: 10,
        }}
      >
        <CustomButton text="Order" onPress={handleCheckout} />
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
  summary: {
    // backgroundColor: "blue",
    width: "100%",
    height: 250,
    paddingHorizontal: 20,
  },
  summaryCard: {
    // backgroundColor: "blue",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 8,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 5,
  },
  radioButton: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
});
