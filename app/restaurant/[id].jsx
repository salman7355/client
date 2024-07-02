// app/restaurant/[id].js
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import RestaurantDetailsHeader from "./components/Header";
import SuggestedDish from "../../components/SuggestedDish";
import React from "react";
import RestaurantCard from "../../components/RestaurantCard";

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams();

  const restaurants = [
    {
      id: 1,
      title: "Cheese Burger",
      img: "https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267.jpg",
      rating: 4.5,
      description:
      'This cheeseburger recipe is a classic and will become a family favorite. The best cheeseburger recipe is made with a juicy beef patty, a slice of cheese, and all the fixings on a toasted bun. This is the perfect cheeseburger recipe!',
    },
    {
      id: 3,
      title: "Mushroom Burger",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFnPwnmWfGuVXblPZHvkl_CFBU46SdPyrz-g&s",
      rating: 3.2,
      description:
       "This mushroom burger is a delicious vegetarian burger recipe that is full of flavor. It is made with a juicy mushroom patty, a slice of cheese, and all the fixings on a toasted bun. This is the perfect vegetarian burger recipe!",
    },
    {
      id: 2,
      title: "Chicken Burger",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Mu1bhhIVSuRNlSfKPn3viOur2gQRTCJvsw&s",
      rating: 2.5,
      description:
        "This chicken burger recipe is a classic and will become a family favorite. The best chicken burger recipe is made with a juicy chicken patty, a slice of cheese, and all the fixings on a toasted bun. This is the perfect chicken burger recipe!",
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

  const dishes = [
    {
      id: 1,
      title: "Chicken Wings",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMRTQV6R1tFZTuvuFIQbGu01gqEzt43iy2g&s",
      // restaurant: "Burger King",
    },
    {
      id: 2,
      title: "Loaded Fries",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rJJJ7jnVYbiii3Gnqk3edvO08iqinDaUsg&s",
      // restaurant: "Pizza Hut",
    },
    {
      id: 3,
      title: "Bacon  Beef",
      img: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/beef-caramelised-bacon-burger-7fa59d72.jpg",
      // restaurant: "Sushi Bar",
    },
    {
      id: 4,
      title: "Classic Burger",
      img: "https://www.inspiredtaste.net/wp-content/uploads/2023/06/Easy-Hamburger-Recipe-Video.jpg",
      // restaurant: "Pasta Bar",
    },
  ];

  return (
    <SafeAreaView style={{ gap: 20, flex: 1 }}>
      <RestaurantDetailsHeader />
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
          paddingBottom: 300,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={restaurants}
          renderItem={(item) => (
            <RestaurantCard restaurant={item.item} toAdd={true} />
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
}
