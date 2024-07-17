import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { images } from "../assets";
import Button from '../components/button';
import { useNavigation } from '@react-navigation/native';


const { Timar } = images;

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Timar} style={styles.logo} />
      </View>
      <Button
        showPrimaryBtn="true"
        primaryBtnText={"Sign In"}
        onPrimaryBtnPress={() => navigation.navigate("OnboardingScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

export default SplashScreen;
