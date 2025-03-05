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
          style={styles.nextbutton} onPress={login}>
            <Text
              style={styles.continuer}>
                Se Connecter
              </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextbutton} onPress={suscribe}>
            <Text
              style={styles.continuer}>
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
    width: 500,
    height: 500,
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center', // centre verticalement
    alignItems: 'center',     // centre horizontalement
    backgroundColor: '#fff',
    padding: 1,
  },
  title: {
    marginTop: 0,
    fontSize: 50,
    fontWeight: 'bold', // texte en gras
    textAlign: 'center',
    color: '#000',
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
    margin:20,
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'rgb(0, 0, 0)',
    borderColor: 'rgb(0,0,0)',
    opacity: 0.5,
  },
  buttonon: {
    margin:20,
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'rgb(0, 0, 0)',
    borderColor: 'rgb(0,0,0)',
    opacity: 1,
  },
  nextbutton: {
    width: 250,
    height: 50,
    borderStyle: 'solid',
    borderColor: 'rgb(0,0,0)',
    backgroundColor: 'rgb(0,0,0)',
    borderRadius: 25,
  },
  continuer: {
    color: 'rgb(255,255,255)',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 5,
  }
});
