import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <View style={{ gap: 2.5 }}>
          <Text style={{ color: "#797979" }}>Delivering to</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Nasr city, Cairo
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 7 }}>
          <Image
            style={{ width: 30, height: 30, objectFit: "contain" }}
            source={require("../assets/images/heart.png")}
          />
          <Image
            style={{ width: 30, height: 30, objectFit: "contain" }}
            source={require("../assets/images/profile.png")}
          />
        </View>
      </View>

      {/*<View>*/}
      {/*    <View>*/}
      {/*        <Text>Food you may like</Text>*/}
      {/*    </View>*/}
      {/*    <View>*/}

      {/*    </View>*/}
      {/*</View>*/}
    </SafeAreaView>
  );
};

export default Home;
