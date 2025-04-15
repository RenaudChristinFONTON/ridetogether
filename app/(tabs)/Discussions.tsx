import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert, TextInput, Button } from "react-native";
import { useRouter, Link } from "expo-router";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '../nav/navbar';

export default function Discussions() {
  return (
    <View style={styles.container}>
          <Text >
            Discussions
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