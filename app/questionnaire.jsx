import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import Choice from "../components/Choice";
import CustomButton from "@/components/CustomButton";

const questionnaire = () => {
  const choices = [
    {
      id: 1,
      title: "American",
    },
    {
      id: 2,
      title: "italian",
    },
    {
      id: 3,
      title: "asian",
    },
    {
      id: 4,
      title: "japanese",
    },
    {
      id: 5,
      title: "eastern",
    },
    {
      id: 6,
      title: "Syrian",
    },
  ];

  const food = [
    {
      id: 1,
      title: "Wheat-free",
    },
    {
      id: 2,
      title: "Egg-free",
    },
    {
      id: 3,
      title: "Soy-free",
    },
  ];

  const dietChoice = [
    {
      id: 1,
      title: "Vegan",
    },
    {
      id: 2,
      title: "Pescatarian",
    },
    {
      id: 3,
      title: "Ketogenic",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTxt}>personalize your experience</Text>

      <View style={styles.questionContainer}>
        <View style={styles.CuisineChoiceContainer}>
          <Text style={styles.questionTitle}>
            What are your favorite cuisines
          </Text>
          <View style={styles.choicesContainer}>
            {choices.map((e) => (
              <Choice data={e} key={e.id} />
            ))}
          </View>
        </View>

        <View style={styles.preferContainer}>
          <Text style={styles.questionTitle}>What food do you prefer</Text>
          <View style={styles.choicesContainer}>
            {food.map((e) => (
              <Choice data={e} key={e.id} />
            ))}
          </View>
        </View>

        <View style={styles.preferContainer}>
          <Text style={styles.questionTitle}>
            Do you follow any of these diets
          </Text>
          <View style={styles.choicesContainer}>
            {dietChoice.map((e) => (
              <Choice data={e} key={e.id} />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.btn}>
        <CustomButton text="Done" route="" />
      </View>
    </SafeAreaView>
  );
};

export default questionnaire;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerTxt: {
    marginTop: 57,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
    color: "#1f2b3c",
  },
  questionContainer: {
    // alignItems: "center",
  },
  questionTitle: {
    color: "#373737",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 7,
    textAlign: "center",
  },
  CuisineChoiceContainer: {},
  choicesContainer: {
    // backgroundColor: "gray",
    flexDirection: "row",
    marginHorizontal: 55,
    flexWrap: "wrap",
    gap: 23,
    marginTop: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  choice: {
    // backgroundColor: "red",
    width: 71,
    height: 71,
    // borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  choiceTxt: {
    fontWeight: "500",
    fontSize: 12,
    position: "absolute",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  preferContainer: {
    marginTop: 41,
    gap: 11,
  },
  btn: {
    alignSelf: "center",
    marginTop: 90,
  },
});
