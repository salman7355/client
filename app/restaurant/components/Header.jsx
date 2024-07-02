import { View, Text, Image } from 'react-native';

export default function RestaurantDetailsHeader() {
    return (
        <View
            style={{
                alignItems: 'center'
            }}
        >
            <View
                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderStyle: 'solid',
                    backgroundColor: 'white',
                    width: '90%',
                    padding: 12,
                    borderRadius: 10,
                    flexDirection: 'row',
                    gap: 10,
                }}
            >
                <Image
                    style={{
                        height: 70,
                        width: 70,
                        borderRadius: 8
                    }}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--1MJsy7_DWpEDHBVdc8L7Vn-neqF-M_MyA&s'
                    }}
                />
                <View
                    style={{
                        justifyContent: 'space-evenly'

                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 20
                        }}
                    >Burger King
                    </Text>
                    <Text
                        style={{
                            color: 'gray'
                        }}
                    >Sandwiches, Fast Food
                    </Text>
                    <Text>
                        Rating: 3.4
                    </Text>
                </View>
            </View>
        </View>
    );
}
