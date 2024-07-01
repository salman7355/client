import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";

const RestaurantCard = ({ restaurant, toAdd }) => {
  return (
    <View
      style={{
        height: 150, // Set a fixed height for each card
        padding: 10,
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10, // Add space between items
      }}
    >
      <Pressable
        onPress={() => router.push(`/restaurant/${restaurant.id}`)}
        style={{
          flexDirection: "row",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image
            style={{
              height: "100%",
              width: 100,
              objectFit: "cover",
              borderRadius: 15,
            }}
            source={{
              uri: `${restaurant.img}`,
            }}
          />
          <View style={{ width: "50%", justifyContent: "space-evenly" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {restaurant.title}
            </Text>
            <Text>Rating: {restaurant.rating}</Text>
            <Text>
              {restaurant.description.length > 50
                ? restaurant.description.slice(0, 50) + "..."
                : restaurant.description}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {/* <Image
            style={{ width: 20, height: 20, objectFit: "contain" }}
            source={require("../assets/images/heart.png")}
          /> */}

          {toAdd && (
            <TouchableOpacity style={styles.button}>
              <View style={styles.plusIconContainer}>
                <View style={styles.horizontalLine} />
                <View style={styles.verticalLine} />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </Pressable>
    </View>
  );
};
export default RestaurantCard;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#EE6732",
    borderRadius: 10,
    width: 60,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 25,
  },
  plusIconContainer: {
    position: "relative",
    width: 14.4,
    height: 14.4,
  },
  horizontalLine: {
    position: "absolute",
    width: 14.4,
    height: 2.4,
    backgroundColor: "white",
    top: 6,
  },
  verticalLine: {
    position: "absolute",
    width: 2.4,
    height: 14.4,
    backgroundColor: "white",
    left: 6,
  },
});
