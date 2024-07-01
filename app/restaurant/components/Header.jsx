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
                        uri: 'https://picsum.photos/200'
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
                    >Prego
                    </Text>
                    <Text
                        style={{
                            color: 'gray'
                        }}
                    >Sandwiches, Grills, Chicken
                    </Text>
                    <Text>
                        Rating: 2.5
                    </Text>
                </View>
            </View>
        </View>
    );
}
