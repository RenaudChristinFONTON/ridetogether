import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert, TextInput, Button } from "react-native";
import { useRouter, Link } from "expo-router";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '../nav/navbar';
import MapboxGL from '@react-native-mapbox-gl/maps';


MapboxGL.setAccessToken('pk.eyJ1IjoicmlkZXRvZ2V0aGVyYmoiLCJhIjoiY203dnh2N3RoMDE0cTJqcXE1aDIwZTdoZSJ9.RNXmTHZpb3GuoZao4KCOpw');
MapboxGL.setConnected(true);
MapboxGL.setTelemetryEnabled(false);

export default function Home() {
  return (
    <View style={styles.container}>
      <Text >
        Home
      </Text>
      <View 
        style={styles.barnav}>
      <MainNavigator />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "93%",
    width: "100%",
  },
  barnav: {
    position: "absolute",
    top: "93%",
    bottom: 0,
    left: 0,
    right: 0,
  }
})