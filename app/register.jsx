import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/logoo.png")}
        />
        <Text style={styles.header}>Let the genie do his magic</Text>
        <Text style={styles.subHeader}>Sign up now to get impressed</Text>
        <View style={styles.login}>
          <Text style={styles.haveAcc}>Already have an account?</Text>
          <Link href="/login" asChild>
            <Text style={styles.loginTxt}>Log in</Text>
          </Link>
        </View>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.fullName}>
          <View style={styles.edit}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              onChangeText={setFirstName}
              value={firstName}
              style={styles.textInput}
              placeholder="first name"
            />
          </View>
          <View style={styles.edit}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              onChangeText={setLastName}
              value={lastName}
              style={styles.textInput}
              placeholder="last name"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            style={styles.textInput}
            placeholder="your email address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            onChangeText={setMobile}
            value={mobile}
            style={styles.textInput}
            placeholder="mobile number"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            style={styles.textInput}
            placeholder="your password"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            style={styles.textInput}
            placeholder="your password"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Birth Date</Text>
          <TextInput
            onChangeText={setBirthDate}
            value={birthDate}
            style={styles.textInput}
            placeholder="your birth date"
          />
        </View>
      </View>

      <View style={styles.serviceTermsContainer}>
        <CheckBox
          checkBoxColor="#d4d9de"
          onClick={() => {
            console.log("checked");
          }}
        />
        <View style={styles.serviceTerms}></View>
        <Text style={styles.agree}>I have read and agree to the</Text>
        <Text style={[styles.terms, styles.agree]}>Terms of Service</Text>
      </View>
      <View style={styles.btn}>
        <CustomButton text="Sign Up" route="questionnaire" />
      </View>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imgContainer: {
    alignItems: "center",
  },
  img: {
    marginTop: 93,
    // marginBottom: 83,
  },
  header: {
    marginTop: 25,
    marginBottom: 4,
    color: "#373737",
    fontSize: 20,
    fontWeight: "700",
  },
  subHeader: {
    fontSize: 12,
    fontWeight: "400",
    color: "#1f2b3c",
  },
  login: {
    marginTop: 14,
    flexDirection: "row",
    gap: 3,
  },
  haveAcc: {
    fontSize: 12,
    fontWeight: "400",
  },
  loginTxt: {
    color: "#1676F3",
    fontSize: 12,
    fontWeight: "400",
  },
  inputsContainer: {
    gap: 10,
    marginTop: 54,
  },
  label: {
    color: "#232f3f",
    fontSize: 12,
  },
  edit: {
    gap: 5,
    flex: 1,
  },
  inputContainer: {
    gap: 5,
  },
  textInput: {
    color: "#797979",
    padding: 10,
    // width: 335,
    height: 34,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    fontSize: 10,
  },
  fullName: {
    flexDirection: "row",
    width: "100%",
    gap: 20,
  },
  serviceTermsContainer: {
    flexDirection: "row",
    marginTop: 29,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  serviceTerms: {
    flexDirection: "row",
  },
  agree: {
    fontSize: 12,
    fontWeight: "500",
  },
  terms: {
    color: "#1676F3",
    textDecorationLine: "underline",
  },
  btn: {
    alignSelf: "center",
    marginTop: 35,
  },
});
