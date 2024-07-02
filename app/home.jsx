import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import React from "react";
import SuggestedDish from "../components/SuggestedDish";
import RestaurantCard from "../components/RestaurantCard";
import { Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useSelector } from "react-redux";

const dishes = [
  {
    id: 1,
    title: "Burger",
    img: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    restaurant: "Burger King",
  },
  {
    id: 2,
    title: "Pizza",
    img: "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8YUdObEwyaG1aQzh4TlRrMk9EWXlOVGM0TmpreE1DNXFjR2N8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA",
    restaurant: "Pizza Hut",
  },
  {
    id: 3,
    title: "Sushi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTd1lb7IgwAbBWcld8j0WM6yYmkjHQ-gctGg&s",
    restaurant: "Sushi Bar",
  },
  {
    id: 4,
    title: "Pasta",
    img: "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg",
    restaurant: "Pasta Bar",
  },
];

const restaurants = [
  {
    id: 1,
    title: "Burger King",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--1MJsy7_DWpEDHBVdc8L7Vn-neqF-M_MyA&s",
    rating: 3.4,
    description:
      "Burger King is an American multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida–based restaurant chain.",
  },
  {
    id: 3,
    title: "Pizza Hut",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqA5PzX8RH4rzMK5rDU6lyQXjBznCA5G-jw&s",
    rating: 5.0,
    description:
      "Pizza Hut is an American restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. It provides Italian-American cuisine, including pizza, pasta, side dishes and desserts.",
  },
  {
    id: 2,
    title: "McDonald's",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/McDonald%27s_square_2020.svg/800px-McDonald%27s_square_2020.svg.png",
    rating: 4.5,
    description:
      "McDonald's Corporation is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States.",
  },
  {
    id: 41,
    title: "Burger King",
    img: "https://picsum.photos/200",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
  },
  {
    id: 11,
    title: "Burger King",
    img: "https://picsum.photos/200",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
  },
  {
    id: 12,
    title: "Burger King",
    img: "https://picsum.photos/200",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
  },
];

const Home = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <SafeAreaView style={{ gap: 20, flex: 1 }}>
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
          <View style={{ position: "relative" }}>
            <Feather
              name="shopping-cart"
              size={30}
              color="#767676"
              onPress={() => {
                router.push("/cart");
              }}
            />
            <View
              style={{
                position: "absolute",
                backgroundColor: "orange",
                width: 17,
                height: 17,
                right: -5,
                borderRadius: 10,
                top: -3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                  lineHeight: 18,
                }}
              >
                {items.length}
              </Text>
            </View>
          </View>
          <Pressable>
            <Image
              style={{ width: 30, height: 30, objectFit: "contain" }}
              source={require("../assets/images/heart.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              router.push("/profile");
            }}
          >
            <Image
              style={{ width: 30, height: 30, objectFit: "contain" }}
              source={require("../assets/images/profile.png")}
            />
          </Pressable>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Food you may like
          </Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {dishes.map((dish) => (
              <SuggestedDish key={dish.id} dish={dish} />
            ))}
          </View>
        </View>
      </View>

      <View
        style={{
          gap: 10,
          paddingHorizontal: 20,
          paddingBottom: 250,
        }}
      >
        <FlatList
          ListHeaderComponent={
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Shop By Restaurant
            </Text>
          }
          ListHeaderComponentStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
          data={restaurants}
          renderItem={({ item }) => (
            <RestaurantCard restaurant={item} toAdd={false} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingVertical: 10,
          }}
        />

        {/* {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))} */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

{
  /* <FlatList
  data={restaurants}
  renderItem={(e) => <RestaurantCard restaurant={e.item} />}
  keyExtractor={(e) => e.id}
  contentContainerStyle={{
    backgroundColor: "red",
    height: 120,
  }}
/> */
}
