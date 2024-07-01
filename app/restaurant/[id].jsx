// app/restaurant/[id].js
import {SafeAreaView, Text, View} from 'react-native';
import {useLocalSearchParams} from "expo-router";
import RestaurantDetailsHeader from "./components/Header";
import SuggestedDish from "../../components/SuggestedDish";
import React from "react";
import RestaurantCard from "../../components/RestaurantCard";

export default function RestaurantDetails() {
    const { id } = useLocalSearchParams()

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

    return (
        <SafeAreaView style={{gap: 20}}>
            <RestaurantDetailsHeader />
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
            <View style={{gap: 10, paddingHorizontal: 20}} >
                <View style={{height: 120, gap: 20}}>
                    {
                        restaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))
                    }
                </View>
            </View>
        </SafeAreaView>
    );
}
