import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { images } from '../assets';

const { welcome } = images;
const Stack = createStackNavigator();

const OnboardingScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnboardingStep1" component={OnboardingStep1} options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingStep2" component={OnboardingStep2} options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingStep3" component={OnboardingStep3} options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingStep4" component={OnboardingStep4} options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingStep5" component={OnboardingStep5} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const OnboardingStep1 = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={welcome} style={styles.image} />
    <Text style={styles.title}>Welcome to Timar</Text>
    <Text style={styles.text}>where learning has no bound</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingStep2')}>
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
  </View>
);

const OnboardingStep2 = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={welcome} style={styles.image} />
    <Text style={styles.title}>Communicate with mentors</Text>
    <Text style={styles.text}>all around the world</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingStep3')}>
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
  </View>
);

const OnboardingStep3 = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={welcome} style={styles.image} />
    <Text style={styles.title}>Therapy Sessions</Text>
    <Text style={styles.text}>with best psychiatrists in the field</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingStep4')}>
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
  </View>
);

const OnboardingStep4 = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={welcome} style={styles.image} />
    <Text style={styles.title}>Join a community of learners</Text>
    <Text style={styles.text}>and embark on a learning adventure</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnboardingStep5')}>
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
  </View>
);

const OnboardingStep5 = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={welcome} style={styles.image} />
    <Text style={styles.title}>Join Timar to Kick Start Your Lesson</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.replace('SignIn')}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.replace('SignUp')}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A1B9A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
