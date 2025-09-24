import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

const todos = [
  { id: "1", task: "Buy groceries" },
  { id: "2", task: "Finish project" },
  { id: "3", task: "Call mom" },
  { id: "4", task: "Go for a run" },
  { id: "5", task: "Read a book" },
  { id: "6", task: "Practice coding" },
];

const ProfileCard = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    Alert.alert("Card Pressed", "You tapped the button!");
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.image}
          />
          <Text style={styles.name}>Hamid Hussain</Text>
          <Text style={styles.job}>Software Engineer</Text>

          <Text style={styles.counterText}>Count: {count}</Text>

          <TouchableOpacity style={styles.mainButton} onPress={handlePress}>
            <Text style={styles.buttonText}>Press</Text>
          </TouchableOpacity>

          <View style={styles.counterRow}>
            <TouchableOpacity
              style={[styles.counterButton, { backgroundColor: "#34c759" }]}
              onPress={() => setCount(count + 1)}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.counterButton, { backgroundColor: "#ff3b30" }]}
              onPress={() => setCount(count - 1)}
            >
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.todoContainer}>
          <Text style={styles.todoTitle}>My Tasks</Text>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.todoItem}>
                <Text style={styles.todoText}>• {item.task}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#f7f9fc",
  },
  scrollContent: {
    alignItems: "center",
    padding: 16,
  },
  container: {
    width: "100%",
    alignItems: "center",
  },
  card: {
    width: 280,
    alignItems: "center",
    backgroundColor: "#1e534c",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#f2b705",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 4,
  },
  job: {
    fontSize: 16,
    color: "#cce3de",
    marginBottom: 16,
  },
  counterText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 12,
  },
  mainButton: {
    backgroundColor: "#f2b705",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: "#1e534c",
    fontSize: 16,
    fontWeight: "bold",
  },
  counterRow: {
    flexDirection: "row",
    gap: 12,
  },
  counterButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  counterButtonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  todoContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  todoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e534c",
    marginBottom: 10,
    textAlign: "center",
  },
  todoItem: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  todoText: {
    fontSize: 16,
    color: "#333",
  },
});
