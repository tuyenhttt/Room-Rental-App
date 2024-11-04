import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home"; // Import your Home component
import RoomDetail from "./RoomDetail"; // Import your RoomDetail component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RoomDetail" component={RoomDetail} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
