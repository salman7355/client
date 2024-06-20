import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { useFonts } from "expo-font";

const index = () => {
  const [fontLoaded] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontLoaded) {
    return null; // You can show a loader here if needed
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/gettingStarted.png")}
        />
      </View>
      <View style={styles.txtContainer}>
        <View>
          <Image source={require("../assets/images/landinghead.png")} />
        </View>
        <Text style={[styles.txtColor, styles.subHeader]}>
          Are you a craver ?
        </Text>
        <View style={styles.txt}>
          <Text style={styles.txtColor}>Yummie, Your Magical Food Genie,</Text>
          <Text style={styles.txtColor}>Ready to Serve Up Tasty Treats!</Text>
          <Text style={styles.txtColor}>
            Let AI Work Its Flavorful Magic and Serve You Perfect
            Recommendations
          </Text>
        </View>
      </View>
      <View style={styles.btn}>
        <CustomButton text={"Continue"} route="login" />
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
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
    bottom: 80,
    marginBottom: 38,
    paddingHorizontal: 27,
    flex: 1,
    gap: 20,
  },
  txtColor: {
    color: "#FFF",
    fontSize: 12,
  },
  txtheader: {
    fontSize: 12,
    fontWeight: "500",
    height: 63,
  },
  subHeader: {
    fontFamily: "Montserrat-Bold",
    fontSize: 22,
  },
  txt: {
    width: 277,
    height: 63,
  },
  btn: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
});
