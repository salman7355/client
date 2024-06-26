import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleRemember = () => {
    setRemember(!remember);
  };

  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/logoo.png")}
        />
        <View style={{ gap: 5, alignItems: "center" }}>
          <Text style={styles.loginTxt}>Log in to your Account</Text>
          <Text style={styles.grtTxt}>
            Glad to see you again, craving something ?
          </Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.edit}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            style={styles.textInput}
            placeholder="your email address"
          />
        </View>
        <View style={styles.edit}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            style={styles.textInput}
            placeholder="your password"
          />
        </View>
      </View>
      <View style={styles.forgetpass}>
        <View style={styles.remember}>
          <Checkbox
            value={remember}
            style={styles.check}
            color="#d4d9de"
            onValueChange={handleRemember}
          />
          <Text>Remember me</Text>
        </View>
        <Text style={styles.passForgettxt}>Forgot Password?</Text>
      </View>
      <View style={styles.btn}>
        <CustomButton text="Login" route={"profile"} />
        <View style={styles.register}>
          <Text style={styles.txt}>Don&apos;t have an account?</Text>
          <Link href="/register" asChild>
            <Text style={styles.registerTxt}>Sign Up</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imgContainer: {
    width: "100%",
    paddingTop: 93,
    alignItems: "center",
  },
  img: {
    marginBottom: 83,
  },
  loginTxt: {
    color: "#373737",
    fontSize: 20,
    fontWeight: "700",
  },
  grtTxt: {
    color: "#1f2b3c",
    fontSize: 12,
    fontWeight: "400",
  },
  inputContainer: {
    marginTop: 37,
    paddingHorizontal: 20,
    gap: 18,
  },
  label: {
    color: "#232f3f",
    fontSize: 12,
  },
  edit: {
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
  check: {
    backgroundColor: "#d4d9de",
    borderRadius: 5,
    width: 20,
    height: 20,
  },
  remember: {
    flexDirection: "row",
    gap: 5,
  },
  forgetpass: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 45,
  },
  passForgettxt: {
    color: "black",
    fontSize: 12,
    fontWeight: "500",
  },
  btn: {
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  registerTxt: {
    fontSize: 12,
    fontWeight: "500",
    color: "#1676F3",
  },
  register: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 19,
    gap: 3,
  },
  txt: {
    color: "black",
    fontSize: 12,
    fontWeight: "500",
  },
});
