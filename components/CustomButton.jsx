import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const CustomButton = ({ text, route, onPress }) => {
  return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={styles.txt}>{text}</Text>
        </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 19,
    width: "100%",
    borderRadius: 40,
    backgroundColor: "#ee6732",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    // textAlign: "center",
    fontWeight: "700",
    fontSize: 22,
    color: "#FFF",
  },
});
