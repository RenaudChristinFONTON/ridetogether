import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch, Alert, TextInput, Button } from "react-native";
import { useRouter, Link } from "expo-router";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '../nav/navbar';
import MapboxGL from '@react-native-mapbox-gl/maps';


    MapboxGL.setAccessToken('pk.eyJ1IjoicmlkZXRvZ2V0aGVyYmoiLCJhIjoiY203dnh2N3RoMDE0cTJqcXE1aDIwZTdoZSJ9.RNXmTHZpb3GuoZao4KCOpw');
    MapboxGL.setConnected(true);
    MapboxGL.setTelemetryEnabled(false);
    MapboxGL.setWellKnownTileServer('Mapbox');
export default function Account() {
  return (
    <View style={styles.container}>
      <Text >
        Account
      </Text>
      <MapboxGL.MapView
        style={styles.map}
        zoomEnabled={true}
        styleURL='mapbox://styles/mapbox/streets-v12'
        rotateEnabled={true}>
        <MapboxGL.Camera
            zoomLevel={15}
            centerCoordinate={[10.181667, 36.886389]}
            pitch={60}
            animationMode={'flyTo'}
            animationDuration={6000}
            >
            
            </MapboxGL.Camera>
      </MapboxGL.MapView>
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
  },
  map: {
    flex: 1,
  }
})