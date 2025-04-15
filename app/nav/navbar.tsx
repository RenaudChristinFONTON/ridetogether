import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRouter} from 'expo-router';
import App from '../(tabs)/Home';
import Reservations from '../(tabs)/Reservations';
import Discussions from '../(tabs)/Discussions';
import Account from '../(tabs)/Account';
import { TouchableOpacity, View, Text, Button, StyleSheet, StyleSheetProperties, Image} from 'react-native';
import Home from '../(tabs)/Home';


export default function MainNavigator() {
  const router = useRouter();
  const home = () => {
    router.push('../(tabs)/Home');
  };
  const reservations = () => {
    router.push('../(tabs)/Reservations');
  };
  const discussions = () => {
    router.push('../(tabs)/Discussions');
  };
  const account = () => {
    router.push('../(tabs)/Account');
  };
  return (
    <View
    style={styles.navbar}>
      <TouchableOpacity
      style={styles.navbarbutton} onPress={home}>
        <Image
          source={require('@/assets/images/home_10023301.png')}
          style={styles.navbaricon}
        />
        <Text
        style={styles.navbartext}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.navbarbutton} onPress={reservations}>
        <Image
          source={require('@/assets/images/calendar-favorite_16678694.png')}
          style={styles.navbaricon}
        />
      <Text
      style={styles.navbartext}>Réservations</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.navbarbutton} onPress={discussions}>
        <Image
          source={require('@/assets/images/chatting-app_8578963.png')}
          style={styles.navbaricon}
        />
      <Text
      style={styles.navbartext}>Discussions</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.navbarbutton} onPress={account}>
        <Image
          source={require('@/assets/images/person_12119447.png')}
          style={styles.navbaricon}
        />
      <Text
      style={styles.navbartext}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    position: "fixed",
    top: "93%",
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 0,
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    borderBlockColor: "rgba(0, 0, 0, 0.38), 5",
    
    
  },

  navbarbutton: {
    margin: "1%",
    width: "23%",
    height: 30,
    justifyContent: "center",
    bottom: 0,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0)",
    textAlign: "center",
  },
  navbartext: {
    display: "flex",
    color: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  navbaricon: {
    zIndex: 3,
    width: "auto",
    height: 30,
    resizeMode: 'contain',
    margin: "1%",

  }

})