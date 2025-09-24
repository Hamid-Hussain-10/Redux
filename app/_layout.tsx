import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./src/store"; 

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="productList" options={{ title: "Product List" }} />
        <Stack.Screen name="practice" options={{ title: "Practice" }} />
        <Stack.Screen name="profileCard" options={{ title: "Profile Card" }} />
      </Stack>
    </Provider>
  );
}
