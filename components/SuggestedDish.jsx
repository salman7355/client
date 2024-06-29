import {View, Text, Image} from "react-native";

const SuggestedDish = ({dish}) => {

    return (
        <View style={{flex: 1, gap: 4}}>
            <Image
                style={{width: '100%', height: 80, objectFit: 'contain', borderRadius: 15}}
                source={{
                    uri: `${dish.img}`,
                }}
            />
            <View>
                <Text
                    style={{fontWeight: 'bold', fontSize: 16}}
                >
                    {dish.title}
                </Text>
                <Text style={{color: "#797979"}}>
                    {dish.restaurant}
                </Text>
            </View>
        </View>
    )
}

export default SuggestedDish;