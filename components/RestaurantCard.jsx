import {View, Text, Image, TouchableOpacity} from "react-native";
import {StyleSheet} from "react-native";
import React from "react";

const RestaurantCard = ({restaurant}) => {
    return (
        <View style={{ height: '100%', flexDirection: 'row', padding: 10, borderRadius: 15, borderStyle: 'solid', borderWidth: 1, borderColor: 'black', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', gap: 10}}>
                <Image
                    style={{height: '100%', width: 100, objectFit: 'cover', borderRadius: 15}}
                    source={{
                        uri: `${restaurant.img}`,
                    }}
                />
                <View style={{width: '50%', justifyContent: 'space-evenly'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                        {restaurant.title}
                    </Text>
                    <Text>
                        Rating: {restaurant.rating}
                    </Text>
                    <Text>
                        {restaurant.description.length > 50 ? restaurant.description.slice(0, 50) + "..." : restaurant.description}
                    </Text>
                </View>
            </View>
            <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
                <Image
                    style={{width: 20, height: 20, objectFit: 'contain'}}
                    source={require("../assets/images/heart.png")}
                />
                <TouchableOpacity style={styles.button}>
                    <View style={styles.plusIconContainer}>
                        <View style={styles.horizontalLine} />
                        <View style={styles.verticalLine} />
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default RestaurantCard;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EE6732',
        borderRadius: 10, // Adjust the border radius as needed
        width: 60, // Adjust the width as needed
        height: 35, // Adjust the height as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30, // Adjust the width of the icon as needed
        height: 25, // Adjust the height of the icon as needed
    },
    plusIconContainer: {
        position: 'relative',
        width: 14.4, // 24 * 0.8
        height: 14.4, // 24 * 0.8
    },
    horizontalLine: {
        position: 'absolute',
        width: 14.4, // 24 * 0.8
        height: 2.4, // 4 * 0.8
        backgroundColor: 'white',
        top:6, // Adjusted to center the line
    },
    verticalLine: {
        position: 'absolute',
        width: 2.4, // 4 * 0.8
        height: 14.4, // 24 * 0.8
        backgroundColor: 'white',
        left: 6, // Adjusted to center the line
    },
});
