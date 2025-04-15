// app/onboarding/OnboardingScreen.tsx
import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, Button } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useRouter } from 'expo-router';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';

export default function OnboardingScreen() {
  const router = useRouter();
  
  const login = () => {
    router.push('/(auth)/login');
  };
  const suscribe = () => {
    router.push('/(auth)/suscribe');
  };
  
  return (
    <View
        style={styles.container}>
      <View 
        style={styles.imageview}>
          <Image
        source={require('@/assets/images/onboarding1.png')}
        style={styles.image}
      />
        </View>
        <TouchableOpacity
          style={styles.button} onPress={login}>
            <Text
              style={styles.buttontext}>
                Se Connecter
              </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} onPress={suscribe}>
            <Text
              style={styles.buttontext}>
                S'inscrire
              </Text>
        </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  imageview: {
    padding:0,

  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center', // centre verticalement
    alignItems: 'center',     // centre horizontalement
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    padding: 1,
  },
  buttontext: {
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold', // texte en gras
    textAlign: 'center',
    color: 'rgb(0, 0, 0)',
  },
  subtitle: {
    marginTop: 0,
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  buttonview: {
    flexDirection: 'row',       // Aligne les éléments horizontalement
    justifyContent: 'space-around', // Espace les boutons de façon égale
    alignItems: 'center',       // Aligne verticalement au centre
    margin: 15,
  },
  button: {
    justifyContent: 'center',
    margin:20,
    width: '50%',
    height: '5%',
    borderRadius: 50,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(0,0,0)',
    opacity: 1,
  }
});
