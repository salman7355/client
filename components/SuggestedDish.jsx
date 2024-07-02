import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/features/cart/cartSlice";
import { MaterialIcons } from "@expo/vector-icons";

const SuggestedDish = ({ dish }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const addDish = () => {
    dispatch(addItem(dish));
  };

  const isInCart = items.some((item) => item.id === dish.id);

  return (
    <View style={{ flex: 1, gap: 4 }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `${dish.img}`,
          }}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={addDish}>
          {isInCart ? (
            <MaterialIcons name="done" size={24} color="white" />
          ) : (
            <Icon name="add" size={24} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{dish.title}</Text>
        <Text style={{ color: "#797979" }}>{dish.restaurant}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 80,
    borderRadius: 15,
    overflow: "hidden", // Ensures the icon stays within the rounded corners
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  iconContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#EE6732", // Optional: adds a semi-transparent background for better visibility
    borderRadius: 12,
    padding: 4,
  },
});

export default SuggestedDish;
