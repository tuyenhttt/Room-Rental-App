import { Slot, useSegments, useRouter } from "expo-router";
import { createStackNavigator } from "@react-navigation/stack";
import "../global.css";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { useEffect, createContext } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import Home from "./Home";
import signIn from "./signIn";
import RoomDetail from "./RoomDetail";
import signUp from "./signUp";

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") return;

    // Thay đổi route dựa trên trạng thái xác thực
    if (isAuthenticated) {
      router.replace("home");
    } else if (isAuthenticated === false) {
      router.replace("signIn");
    }
  }, [isAuthenticated]);

  return (
    <Stack.Navigator>
      {/* Thêm các màn hình vào đây */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signIn"
        component={signIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signUp"
        component={signUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RoomDetail"
        component={RoomDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="app"
        component={Slot}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function _layout() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <MainLayout />
      </AuthContextProvider>
    </Provider>
  );
}
