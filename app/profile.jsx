import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import ProfileRoute from "../components/ProfileRoute";
import CustomButton from "@/components/CustomButton";

const profile = () => {
  const routes = [
    {
      id: 1,
      name: "My Wishlist",
      route: "/login",
    },
    {
      id: 2,
      name: "My Order",
      route: "/",
    },
    {
      id: 3,
      name: "My Address",
      route: "/",
    },
    {
      id: 4,
      name: "My Payment",
      route: "/",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.profileDetails}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Adel Selim</Text>
          <Text style={styles.job}>Student</Text>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={16} color="black" />
            <Text>nasrcity,cairo</Text>
          </View>
        </View>
        <View style={styles.routes}>
          {routes.map((item) => (
            <ProfileRoute item={item} key={item.id} />
          ))}
        </View>
        <View>
          <CustomButton text="Edit Profile" route="/" />
        </View>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ee6732",
  },
  imgContainer: {
    width: 260,
    height: 260,
    marginHorizontal: "auto",
    marginVertical: 20,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 260,
  },
  profileDetails: {
    flex: 1,
    backgroundColor: "white",
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 40,
    gap: 30,
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
  },
  job: {
    fontSize: 14,
    color: "#3E3E3E",
    fontWeight: "400",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingTop: 15,
  },
  // routes: {
  //   width: "100%",
  // },
});
