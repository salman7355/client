import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const successful = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cong}>
        <Ionicons name="checkmark-sharp" size={90} color="white" />
      </View>
      <View style={styles.txt}>
        <Text style={styles.congtxt}>Congratulations</Text>
        <Text style={styles.ss}>Your order has been placed successfully</Text>
      </View>
    </View>
  );
};

export default successful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  cong: {
    backgroundColor: "#ee6732",
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  txt: {
    width: "80%",
    textAlign: "center",
    marginHorizontal: "auto",
    alignItems: "center",
    gap: 10,
  },
  congtxt: {
    fontWeight: "bold",
    fontSize: 20,
  },
  ss: {
    textAlign: "center",
    color: "#ccc",
  },
});
