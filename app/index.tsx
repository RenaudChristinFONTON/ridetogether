// app/InitialScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function InitialScreen() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    AsyncStorage.getItem('hasSeenOnboarding').then((value) => {
      if (value === null) {
        // Première ouverture
        setIsFirstLaunch(true);
      } else {
        // L'utilisateur a déjà vu l'onboarding
        setIsFirstLaunch(false);
      }
    });
  }, []);

  useEffect(() => {
    if (isFirstLaunch !== null) {
      if (isFirstLaunch) {
        router.replace('/onboarding/index1');
      } else {
        router.replace('/(auth)/login'); // ou ta route principale
      }
    }
  }, [isFirstLaunch]);

  // Affiche un indicateur de chargement pendant la vérification
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
