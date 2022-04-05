import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native";
import { BlackButton } from "./Button";

export default function App() {
  const [userName, onChangeUserName] = useState("");
  const register = () => {
    fetch("http://78.46.69.39:8007/rest-auth/registration/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        email: "",
        first_name: "",
        last_name: "",
        password1: "",
        password2: "",
        group: "Suscriptor",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Prueba React</Text>
      <Text style={styles.subTitle}>!Bienvenido¡ registrarte</Text>
      <TextInput
        placeholder="username"
        style={styles.textInput}
        onChangeText={onChangeUserName}
        value={userName}
      />
      <TextInput placeholder="first_name" style={styles.textInput} />
      <TextInput placeholder="last_name" style={styles.textInput} />
      <TextInput placeholder="email" style={styles.textInput} />
      <TextInput placeholder="password1" style={styles.textInput} />
      <TextInput placeholder="password2" style={styles.textInput} />
      <BlackButton handlerClick={register} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1", //Fondo de color blanco
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 40,
    color: "#000",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "green",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  forgotPassword: {
    fontSize: 14,
    color: "gray",
    marginTop: 20,
  },
  button: {},
});
