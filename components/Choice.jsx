import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useState } from "react";

const Choice = ({ data }) => {
  const { title } = data;

  const [checked, setChecked] = useState(false);

  return (
    <Pressable
      style={styles.choice}
      onPress={() => {
        setChecked(!checked);
      }}
    >
      <Image
        style={[styles.img, checked && styles.checkedChoice]}
        source={require("../assets/images/american.png")}
      />
      <Text style={styles.choiceTxt}>{title}</Text>
    </Pressable>
  );
};

export default Choice;

const styles = StyleSheet.create({
  choice: {
    // backgroundColor: "red",
    width: 71,
    height: 71,
    // borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  choiceTxt: {
    fontWeight: "500",
    fontSize: 12,
    position: "absolute",
    color: "#FFF",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    position: "absolute",
  },
  checkedChoice: {
    opacity: 0.6,
    backgroundColor: "#ee6732",
    // overlayColor: "#ee6732",
  },
});
