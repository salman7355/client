import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/gettingStarted.png")}
        />
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.txtColor}>YUMMIE</Text>
        <Text style={styles.txtColor}>Are you a craver ?</Text>
        <Text style={styles.txtColor}>
          Yummie, Your Magical Food Genie, Ready to Serve Up Tasty Treats! Let
          AI Work Its Flavorful Magic and Serve You Perfect Recommendations
        </Text>

        <CustomButton text={"Continue"} route="login" />
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: "relative",
  },
  imgContainer: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  txtContainer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 50,
    paddingHorizontal: 27,
    flex: 1,
    gap: 20,
  },
  txtColor: {
    color: "#FFF",
  },
  txtheader: {
    fontSize: 12,
    fontWeight: "500",
    height: 63,
  },
});
