import { View, Text, ActivityIndicator } from "react-native";

export default function StartPage() {
  return (
    <View className="bg-red-200 pt-20">
      <ActivityIndicator size="large" color="gray" />
    </View>
  );
}
