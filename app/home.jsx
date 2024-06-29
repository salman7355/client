import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";
import SuggestedDish from "../components/SuggestedDish";
import RestaurantCard from "../components/RestaurantCard";


const dishes = [
    {
        id: 1,
        title: "Burger",
        img: 'https://picsum.photos/200',
        restaurant: "Burger King",
    },
    {
        id: 2,
        title: "Pizza",
        img: 'https://picsum.photos/200',
        restaurant: "Pizza Hut",
    },
    {
        id: 3,
        title: "Sushi",
        img: 'https://picsum.photos/200',
        restaurant: "Sushi Bar",
    },
    {
        id: 4,
        title: "Pasta",
        img: 'https://picsum.photos/200',
        restaurant: "Pasta Bar",
    },
]

const restaurants = [
    {
        id: 1,
        title: "Burger King",
        img: 'https://picsum.photos/200',
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure"
    },
    {
        id: 3,
        title: "Burger King",
        img: 'https://picsum.photos/200',
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure"
    },
    {
        id: 2,
        title: "Burger King",
        img: 'https://picsum.photos/200',
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure"
    },
    {
        id: 41,
        title: "Burger King",
        img: 'https://picsum.photos/200',
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure"
    },
    {
        id: 11,
        title: "Burger King",
        img: 'https://picsum.photos/200',
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos dolorum ducimus eius eveniet in inventore itaque iure"
    },
]

const Home = () => {
    return (
        <SafeAreaView style={{gap: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center'}}>
                <View style={{gap: 2.5}}>
                    <Text style={{color: '#797979'}}>Delivering to</Text>
                    <Text style={{fontSize: '16px', fontWeight: 'bold'}}>Nasr city, Cairo</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', gap: 7}}>
                    <Image
                        style={{width: 30, height: 30, objectFit: 'contain'}}
                        source={require("../assets/images/heart.png")}
                    />
                    <Image
                        style={{width: 30, height: 30, objectFit: 'contain'}}
                        source={require("../assets/images/profile.png")}
                    />
                </View>
            </View>

            <View style={{paddingHorizontal: 20}}>
                <View style={{gap: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Food you may like</Text>
                    <View style={{flexDirection: 'row', gap: 10}}>
                        {
                            dishes.map((dish) => (
                                <SuggestedDish key={dish.id} dish={dish} />
                            ))
                        }
                    </View>
                </View>
            </View>
            <View style={{gap: 10, paddingHorizontal: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Shop By Restaurant</Text>
                <View style={{height: 120, gap: 20}}>
                    {
                        restaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;
