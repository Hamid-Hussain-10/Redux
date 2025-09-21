import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator } from "react-native";

const Practice = () => {
  const [name, setName] = useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <TextInput
        placeholder="Enter your name"
        style={{
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
          width: 250,
          borderRadius: 16,
          fontSize: 12,
        }}
        onChangeText={setName}
      />
      <TouchableOpacity
        onPress={() => alert(`Hello, ${name}!`)}
        style={{ width: 65, borderRadius: 16 }}
      >
        <Text style={{ borderBottomWidth: 1 }}>Click Here</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{ width: 300, height: 300, borderRadius: 16 }}
        />
      </View>
      <ActivityIndicator />
    </View>
  );
};

export default Practice;
