import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./src/cartSlice";
import Cart from "./src/cart";

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
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
            <Button
              color="#746d08"
              title="Add to Cart"
              onPress={() => dispatch(addToCart(item))}
            />
          </View>
        )}
      />
      <Cart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    marginTop: 40, 
    backgroundColor: "#f5f5f5" 
  },
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center" 
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#746d08",
  },
});
