import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const ProfileRoute = ({ item }) => {
  return (
    <Link href={`${item.route}`} asChild>
      <Pressable style={styles.route}>
        <Text style={styles.routeTitle}>{item.name}</Text>
        <SimpleLineIcons name="arrow-right" size={14} color="black" />
      </Pressable>
    </Link>
  );
};

export default ProfileRoute;

const styles = StyleSheet.create({
  route: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  routeTitle: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
  },
});
