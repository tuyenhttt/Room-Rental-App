import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { auth } from "../firebase";

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Success", "Logged in successfully!");
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/images/login.png")}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>SIGN IN</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Octicons name="mail" size={hp(2.7)} color="gray" />
            <TextInput
              placeholder="Email"
              placeholderTextColor="gray"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Octicons name="lock" size={hp(2.7)} color="gray" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity> */}
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Do not have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  imageContainer: {
    paddingTop: hp(10),
    alignItems: "center",
    flex: 1,
  },
  image: {
    height: hp(25),
    width: wp(80),
  },
  formContainer: {
    alignItems: "center",
    flex: 2,
    paddingBottom: hp(4),
  },
  title: {
    fontSize: hp(4),
    fontWeight: "bold",
    letterSpacing: 1,
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    gap: hp(2),
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: wp(4),
    width: wp(80),
    height: hp(7),
  },
  input: {
    flex: 1,
    fontSize: hp(2),
    color: "#333",
    fontWeight: "600",
    marginLeft: wp(2),
  },
  forgotPasswordText: {
    color: "#1E90FF",
    fontSize: hp(2),
    fontWeight: "500",
    marginTop: hp(1),
    textAlign: "right",
    width: wp(80),
  },
  button: {
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(8),
    marginTop: hp(4),
    alignItems: "center",
    width: wp(80),
  },
  buttonText: {
    fontSize: hp(3),
    color: "#fff",
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(2),
  },
  registerText: {
    fontSize: hp(2),
    color: "#333",
  },
  signUpText: {
    fontSize: hp(2),
    color: "#1E90FF",
    fontWeight: "bold",
  },
});
