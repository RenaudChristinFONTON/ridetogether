import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter, Link } from "expo-router";


export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }
    
    const payload = { email, password };

    try {
      const response = await fetch("http://192.168.1.107/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      
      if (data.success) {
        Alert.alert("Succès", "Connexion réussie !");
        // Rediriger vers l'écran principal ou une autre page
        router.replace("../(tabs)/Home");
      } else {
        Alert.alert("Erreur", data.message || "Erreur lors de la connexion.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Impossible de se connecter au serveur.");
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.form}>
            <Text style={styles.title}>Connexion</Text>
            <TextInput
                style={styles.input}
                placeholder="Adresse email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Se connecter</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Se connecter avec</Text>
            <Text
              style={styles.text}>
              Vous n'avez pas un compte ? 
              <Link href="/(auth)/suscribe" style={styles.link}>
                <Text style={styles.link}> S'inscrire</Text>
              </Link>
            </Text>
            <Text style={styles.text}>
            <Link href="/(tabs)/Maps" style={styles.link}>
                <Text style={styles.link}> Maps</Text>
              </Link>
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(0, 0, 0)",
      // Permet de placer les enfants en bas
      justifyContent: "flex-end",
    },
    form: {
      alignItems: 'center',
      justifyContent: 'center',
      height: "80%", // Occupe 80 % de la hauteur de l'écran
      width: "100%", // Occupe toute la largeur
      padding: '10%',
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      // Pour arrondir uniquement les coins supérieurs
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    title: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 10,
      marginBottom: '5%',
    },
    text: {
      fontSize: 15,
      marginTop:10,
      textAlign: 'center',
  
    },input: {
      width: '95%',
      height: '10%',
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 20,
      paddingHorizontal: 10,
      marginBottom: 15,
    },
    switchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
    },
    switchLabel: {
      marginLeft: 10,
      fontSize: 16,
    },
    loginButton: {
      width: '80%',
      backgroundColor: "rgb(0,0,0)",
      paddingVertical: 15,
      borderRadius: 30,
      alignItems: "center",
    },
    loginButtonText: {
      color: "rgb(255, 255, 255)",
      fontSize: 18,
      fontWeight: "bold",
    },
    link: {
      color: 'rgb(0,0,0)',
      fontWeight: 'bold',
    },
  });
  