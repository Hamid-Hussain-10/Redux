import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

const Practice = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={{ marginTop: 10, color: "#555" }}>Loading users...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User List</Text>

      <FlatList
        data={user}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Icon name="account" size={24} color="#4a90e2" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.cardText}>{item.name}</Text>
              <Text style={styles.subText}>@{item.username}</Text>
              <Text style={styles.subText}>{item.email}</Text>
              <Text style={styles.subText}>{item.address.street}</Text>
            </View>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Enter Your Details</Text>

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#aaa"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secure}
          placeholder="Enter password"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Icon name={secure ? "eye-off" : "eye"} size={20} color="#4a90e2" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setName("")} style={styles.clearBtn}>
        <Text style={styles.clearText}>Clear All</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://picsum.photos/300/300" }}
          style={styles.image}
        />
        <Text style={styles.imageLabel}>{name || "Your Name"}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  subText: {
    fontSize: 14,
    color: "#666",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 15,
    color: "#444",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 12,
    width: "100%",
    borderRadius: 12,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 14,
  },
  clearBtn: {
    backgroundColor: "#eaeaea",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  clearText: {
    color: "#555",
    fontWeight: "500",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 16,
    marginBottom: 10,
  },
  imageLabel: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});

export default Practice;
