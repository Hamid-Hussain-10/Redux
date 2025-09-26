import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Practice = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0, borderWidth: 0 }]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secure}
          placeholder="Enter password"
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <Icon name={secure ? "eye-off" : "eye"} size={15} color="#333" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setName("")} style={styles.clearBtn}>
        <Text style={{ borderBottomWidth: 1 }}>Clear All</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.image}
        />
        <Text style={{ borderBottomWidth: 1 }}>{name}</Text>
      </View>

      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: 250,
    borderRadius: 16,
    fontSize: 12,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 250,
  },
  clearBtn: {
    width: 65,
    borderRadius: 16,
    alignItems: "center",
    marginVertical: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 16,
    marginBottom: 10,
  },
});

export default Practice;
