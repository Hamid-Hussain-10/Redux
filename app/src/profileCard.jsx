import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from "react-native";

const ProfileCard = () => {
  const handlePress = () => {
    Alert.alert("Card Pressed", "You tapped the button!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.image}
        />
        <Text style={styles.name}>Hamid Hussain</Text>
        <Text style={styles.job}>Software Engineer</Text>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Press</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e534c",
    padding: 12,
    borderRadius: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 16,
    marginBottom: 5,
    marginTop: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  job: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#f2b705",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#1e534c",
    fontSize: 16,
    fontWeight: "bold",
  },
});
