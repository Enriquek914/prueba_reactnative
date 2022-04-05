import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function BlackButton(props) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: "#0a0a0a",
      }}
      onPress={() => {
        props.handlerClick();
        alert("You tapped the button!");
      }}
    >
      <Text
        style={{
          ...styles.button,
          color: "#f1f1f1",
        }}
      >
        Registrarse
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    borderRadius: 10,
    paddingVertical: 1,
    width: "45%",
    height: 50,
    marginTop: 15,
  },
  buttonText: {
    textAlign: "center",
  },
});
