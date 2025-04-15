import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function AuthButton() {
  const handleAuth = async () => {
    try {
      // Remplacez l'URL par celle de votre script PHP qui démarre le flux OAuth 2.0.
      const authUrl = "http://192.168.30.6/api/auth.php";
      // Ouvre une session d'authentification dans le navigateur intégré
      const result = await WebBrowser.openAuthSessionAsync(authUrl);
      console.log("Résultat de l'authentification :", result);
      // Ici, vous devez traiter le résultat du flux OAuth
      // Par exemple, vérifier si result.type === "success" et récupérer le token depuis result.url
    } catch (error) {
      console.error("Erreur d'authentification", error);
      Alert.alert("Erreur", "Impossible de lancer l'authentification.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>Se connecter avec Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4285F4', // Couleur typique de Google
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
