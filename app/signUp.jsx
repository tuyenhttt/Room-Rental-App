// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import { Feather, Octicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// export default function SignUp() {
//   const navigation = useNavigation();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = () => {
//     if (!username || !email || !password) {
//       Alert.alert("Error", "Please fill in all fields");
//       return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         Alert.alert("Success", "Account created successfully!");

//         navigation.navigate("signIn");
//       })
//       .catch((error) => {
//         Alert.alert("Error", error.message);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>SIGN UP</Text>

//       <View style={styles.inputWrapper}>
//         <Feather name="user" size={24} color="gray" />
//         <TextInput
//           placeholder="User name"
//           placeholderTextColor="gray"
//           style={styles.input}
//           value={username}
//           onChangeText={setUsername}
//           autoCapitalize="none"
//         />
//       </View>

//       <View style={styles.inputWrapper}>
//         <Octicons name="mail" size={24} color="gray" />
//         <TextInput
//           placeholder="Email"
//           placeholderTextColor="gray"
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//       </View>

//       <View style={styles.inputWrapper}>
//         <Octicons name="lock" size={24} color="gray" />
//         <TextInput
//           placeholder="Password"
//           placeholderTextColor="gray"
//           secureTextEntry
//           style={styles.input}
//           value={password}
//           onChangeText={setPassword}
//         />
//       </View>

//       <TouchableOpacity onPress={handleSignUp} style={styles.button}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate("signIn")}>
//         <Text style={styles.switchText}>Already have an account? Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#F5F5F5",
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     fontWeight: "bold",
//   },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f0f0f0",
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     width: "100%",
//     height: 50,
//     marginBottom: 15,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: "#333",
//     marginLeft: 10,
//   },
//   button: {
//     backgroundColor: "#1E90FF",
//     padding: 10,
//     borderRadius: 5,
//     width: "100%",
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//   },
//   switchText: {
//     marginTop: 20,
//     color: "#1E90FF",
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Feather, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Success", "Account created successfully!");
        navigation.navigate("signIn");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>SIGN UP</Text>

        <View style={styles.inputWrapper}>
          <Feather name="user" size={24} color="gray" />
          <TextInput
            placeholder="User name"
            placeholderTextColor="gray"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Octicons name="mail" size={24} color="gray" />
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
          <Octicons name="lock" size={24} color="gray" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("signIn")}>
          <Text style={styles.switchText}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  scrollViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1, // Ensures the ScrollView takes the full height
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  switchText: {
    marginTop: 20,
    color: "#1E90FF",
  },
});
