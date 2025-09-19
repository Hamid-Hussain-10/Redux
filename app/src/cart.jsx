import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "./cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>
                  {item.name} x {item.quantity} = ${item.price * item.quantity}
                </Text>
                <View style={styles.buttons}>
                  <Button
                    title="+"
                    onPress={() => dispatch(increaseQuantity(item.id))}
                  />
                  <Button
                    title="-"
                    onPress={() => dispatch(decreaseQuantity(item.id))}
                  />
                  <Button
                    title="Remove"
                    onPress={() => dispatch(removeFromCart(item.id))}
                  />
                </View>
              </View>
            )}
          />
          <Text style={styles.total}>Total: ${total}</Text>
          <Button title="Clear Cart" onPress={() => dispatch(clearCart())} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 30 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  item: { marginBottom: 10 },
  buttons: { flexDirection: "row", gap: 5, marginTop: 5 },
  total: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
});
