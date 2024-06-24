import {Image, StyleSheet, Text, View, ImageBackground} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import CustomButton from "@/components/CustomButton";

const Welcome = () => {
  const [fontLoaded] = useFonts({
    "Montserrat-Bold": require("@/assets/fonts/Montserrat-Bold.ttf"),
  });

  const image = require("@/assets/images/gettingStarted.png");

  if (!fontLoaded) {
    return null; // You can show a loader here if needed
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.textContainer}>
          <View>
            <Image source={require("@/assets/images/landinghead.png")} />
          </View>
          <Text style={[styles.txtColor, styles.subHeader]}>
            Are you a craver ?
          </Text>
          <View style={{width: '90%', fontWight: 'bold'}}>
            <Text style={styles.txtColor}>
              Yummie, Your Magical Food Genie, Ready to Serve Up Tasty Treats!
              Let AI Work Its Flavorful Magic and Serve You Perfect
              Recommendations
            </Text>
          </View>
        </View>
        <CustomButton text={"Continue"} route="login" />
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    gap: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingRight: 20,
    paddingLeft: 20,
    gap: 40
  },
  txtColor: {
    color: "#FFF",
    fontSize: 14,
  },
  subHeader: {
    fontFamily: "Montserrat-Bold",
    fontSize: 22,
  },
});
