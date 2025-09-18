import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
// import Cart from "./cart";
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 150 },
];

export default function ProductList() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.name} - ${item.price}
            </Text>
            <Button
              title="Add to Cart"
              onPress={() => dispatch(addToCart(item))}
            />
          </View>
        )}
      />
      {/* <Cart /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  item: { marginBottom: 15 },
});
