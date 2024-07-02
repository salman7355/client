import { View, Text, Image } from "react-native";

export default function RestaurantDetailsHeader({ restaurant }) {
  //   console.log("-----------------");
  //   console.log(JSON.parse(restaurant));
  const rest = JSON.parse(restaurant);
  //   console.log(rest.title);

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderStyle: "solid",
          backgroundColor: "white",
          width: "90%",
          padding: 12,
          borderRadius: 10,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image
          style={{
            height: 70,
            width: 70,
            borderRadius: 8,
          }}
          source={{
            uri: rest.img,
          }}
        />
        <View
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {rest.title}
          </Text>
          {/* <Text
            style={{
              color: "gray",
            }}
          >
            Sandwiches, Fast Food
          </Text> */}
          <Text>Rating: {rest.rating}</Text>
        </View>
      </View>
    </View>
  );
}
