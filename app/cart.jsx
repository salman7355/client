import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const cart = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleCheckout = () => {
    router.push("/successful");
  };

  const restaurants = [
    {
      id: 1,
      title: "Chicken Wings",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMRTQV6R1tFZTuvuFIQbGu01gqEzt43iy2g&s",
      rating: 4.5,
      description:
          'Chicken wings are a classic American dish that is perfect for any occasion. They are crispy on the outside and juicy on the inside. Chicken wings are typically deep-fried and then coated in a flavorful sauce. They are often served with celery sticks and blue cheese dressing. Chicken wings are a popular appetizer at parties and sporting events. They are also a great option for a quick and easy dinner. Chicken wings are easy to make at home and can be customized with your favorite seasonings and sauces. Whether you like them spicy, sweet, or tangy, there is a chicken wing recipe for everyone. Try making chicken wings at home for your next gathering or game day party. You can also find chicken wings at many restaurants and bars. Enjoy this classic American dish with your friends and family!',
    },
    {
      id: 3,
      title: "Burger",
      img: "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
      rating: 3.6,
      description:
          "A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chiles; condiments such as ketchup, mayonnaise, mustard, relish, or 'special sauce'; and are frequently placed on sesame seed buns. A hamburger topped with cheese is called a cheeseburger.",
    },
    {
      id: 2,
      title: "Loaded Fries",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rJJJ7jnVYbiii3Gnqk3edvO08iqinDaUsg&s",
      rating: 4.5,
      description:
          "Loaded fries are a delicious and indulgent treat that is perfect for sharing. They are typically made with French fries that are topped with a variety of ingredients, such as cheese, bacon, sour cream, and green onions. Loaded fries are a popular appetizer at restaurants and bars, and they are also a great option for a quick and easy meal. Loaded fries are easy to make at home and can be customized with your favorite toppings. Whether you like them spicy, cheesy, or loaded with bacon, there is a loaded fries recipe for everyone. Try making loaded fries at home for your next gathering or game day party. You can also find loaded fries at many restaurants and fast food chains. Enjoy this delicious and satisfying treat with your friends and family!",
    },
    {
      id: 41,
      title: "Classic Burger",
      img: "https://www.inspiredtaste.net/wp-content/uploads/2023/06/Easy-Hamburger-Recipe-Video.jpg",
      rating: 4.5,
      description: "A classic burger is a delicious and satisfying meal that is perfect for any occasion. It is made with a juicy beef patty, a slice of cheese, and all the fixings on a toasted bun. A classic burger is typically served with lettuce, tomato, onion, pickles, ketchup, and mustard. It is a popular choice for lunch or dinner and is a favorite among people of all ages. A classic burger is easy to make at home and can be customized with your favorite toppings. Whether you like it plain and simple or loaded with bacon and avocado, there is a classic burger recipe for everyone. Try making a classic burger at home for your next meal. You can also find classic burgers at many restaurants and fast food chains. Enjoy this delicious and timeless dish with your friends and family!",
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
    {
      id: 14,
      title: "Burger King",
      img: "https://picsum.photos/200",
      rating: 4.5,
      description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure",
    },
  ];

  const getTotalPrice = () => {
    return restaurants.reduce(
      (total, restaurant) => total + restaurant.price,
      0
    );
  };
  const totalPrice = getTotalPrice();
  const tax = totalPrice * 0.14;
  const total = totalPrice + tax;

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 490 }}>
        <View style={styles.summary}>
          <View style={styles.summaryCard}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                alignSelf: "center",
                marginBottom: 10,
              }}
            >
              Summary
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Number of items
              </Text>
              <Text style={{ fontSize: 16 }}>{restaurants.length}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Items total
              </Text>
              <Text style={{ fontSize: 16 }}>${getTotalPrice()}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Tax</Text>
              <Text style={{ fontSize: 16 }}>${tax}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Total</Text>
              <Text style={{ fontSize: 16 }}>${total}</Text>
            </View>

            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={styles.radioButtonContainer}
                onPress={() => setSelectedPaymentMethod("cash")}
              >
                <View style={styles.radioButton}>
                  {selectedPaymentMethod === "cash" && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </View>
                <View style={{ width: 25, height: 18 }}>
                  <Image
                    source={require("../assets/images/cash.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                    }}
                  />
                </View>
                <Text style={{ fontSize: 18 }}>Cash on Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioButtonContainer}
                onPress={() => setSelectedPaymentMethod("credit")}
              >
                <View style={styles.radioButton}>
                  {selectedPaymentMethod === "credit" && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </View>
                <View style={{ width: 25, height: 18 }}>
                  <Image
                    source={require("../assets/images/visa.jpg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                    }}
                  />
                </View>
                <Text style={{ fontSize: 18 }}>Credit Card on Delivery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            gap: 10,
            paddingHorizontal: 20,
            marginBottom: 60,
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={restaurants}
            renderItem={(item) => (
              <RestaurantCard restaurant={item.item} toAdd={false} />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              paddingVertical: 10,
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignSelf: "center",
          paddingHorizontal: 20,
          position: "absolute",
          bottom: 10,
        }}
      >
        <CustomButton text="Order" onPress={handleCheckout} />
      </View>
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  summary: {
    // backgroundColor: "blue",
    width: "100%",
    height: 250,
    paddingHorizontal: 20,
  },
  summaryCard: {
    // backgroundColor: "blue",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 8,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 5,
  },
  radioButton: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioButtonSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
});
