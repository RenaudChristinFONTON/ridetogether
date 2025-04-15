import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert, TextInput, Button } from "react-native";
import { useRouter, Link } from "expo-router";
import { useState } from "react";
import * as AppleAuthentication from 'expo-apple-authentication';
import { useAuthRequest, makeRedirectUri, useAuthRequestResult } from 'expo-auth-session';


export default function Suscribe() {
  const router = useRouter();
  // États pour chaque champ du formulaire
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [remember, setRemember] = useState(false);
  /*const [request, response, promptAsync] = useAuthRequest({
    clientId: 'VOTRE_CLIENT_ID_GOOGLE',
    scopes: ['profile', 'email'],
    redirectUri: makeRedirectUri({
      scheme: 'com.ridetogether.RIDETOGETHER'
    }),
  });*/

  // Fonction pour gérer l'inscription
  const handleRegister = async () => {
    if (!fullName || !email || !password || !acceptedTerms) {
      Alert.alert(
        "Erreur",
        "Veuillez remplir tous les champs et accepter les conditions."
      );
      return;
    }

    // Préparation des données à envoyer
    const payload = {
      fullName,
      email,
      password,
      remember,
      acceptedTerms,
    };

    try {
      // Appel vers le backend PHP (assure-toi que ton serveur local est accessible)
      const response = await fetch("http://192.168.1.107/api/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data.success) {
        Alert.alert("Succès", "Inscription réussie !");
        // Rediriger vers l'écran de connexion ou autre écran de ton choix
        router.replace("/(auth)/login");
      } else {
        Alert.alert("Erreur", data.message || "Erreur lors de l'inscription.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Impossible de se connecter au serveur.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Inscription</Text>
        <TextInput
        style={styles.input}
        placeholder="Nom complet"
        value={fullName}
        onChangeText={setFullName}
      />
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
      <View style={styles.switchContainer}>
        <Switch
          value={acceptedTerms}
          onValueChange={setAcceptedTerms}
          thumbColor={acceptedTerms ? "rgb(0, 0, 0)" : "rgba(0, 0, 0, 0.5)"}
        />
        <Text style={styles.switchLabel}>
          Accepter les conditions et la confidentialité
        </Text>
      </View>
      <View style={styles.switchContainer}>
        <Switch
          value={remember}
          onValueChange={setRemember}
          thumbColor={remember ? "rgb(0, 0, 0)" : "rgba(0, 0, 0, 0.5)"}
        />
        <Text style={styles.switchLabel}>Se souvenir du mot de passe</Text>
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>S'inscrire</Text>
      </TouchableOpacity>
      <View
          style={styles.authcontainer}>
          <Text
            style={styles.text}>
            S'incrire avec
          </Text>
          <Text
            style={styles.text}>
            Vous avez déjà un compte ? 
            <Link href="/(auth)/login" style={styles.link}>
              <Text style={styles.link}> Se Connecter</Text>
            </Link>
          </Text>
        </View>
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
  authcontainer: {
    justifyContent: 'center',
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

  },
  link: {
    color: 'rgb(0,0,0)',
    fontWeight: 'bold',
  },
  input: {
    width: '95%',
    height: 50,
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
  registerButton: {
    width: '80%',
    backgroundColor: "rgb(0,0,0)",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  registerButtonText: {
    color: "rgb(255, 255, 255)",
    fontSize: 18,
    fontWeight: "bold",
  },
  appleButton: {
    width: '48%',
    height: 44,
  },
  googleButton: {
    width: '48%',
    height: 44,
  },
});