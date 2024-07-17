import { View, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';
import Button2 from '../components/button2';
import Input from '../components/input';
import { EyeIcon } from 'react-native-heroicons/solid';

const { signup } = images;

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, phoneNumber, password, confirmPassword } = userData;

    if (!firstName || !lastName || !phoneNumber || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    console.log('user data --> ', userData);
    navigation.navigate('SelectGrade', { userData });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 24, justifyContent: 'center' }}>
      <View style={{ marginVertical: 20 }}>
        <Text style={{ color: '#000000', fontSize: 24, textAlign: 'center', fontWeight: '600', marginBottom: 4 }}>
          Sign Up
        </Text>
        <Text style={{ color: '#666666', textAlign: 'center', marginBottom: 20 }}>
          Create an account to begin your Learning Journey
        </Text>

        <Input
          label="First Name"
          placeholder="Your Name Here"
          value={userData.firstName}
          onChange={(text) => handleInputChange('firstName', text)}
          style={{ marginBottom: 12 }}
        />
        <Input
          label="Last Name"
          placeholder="Your Name Here"
          value={userData.lastName}
          onChange={(text) => handleInputChange('lastName', text)}
          style={{ marginBottom: 12 }}
        />
        <Input
          label="Phone Number"
          placeholder="+251912345678"
          value={userData.phoneNumber}
          onChange={(text) => handleInputChange('phoneNumber', text)}
          style={{ marginBottom: 12 }}
        />
        <Input
          label="Password"
          placeholder="********"
          Icon={EyeIcon}
          value={userData.password}
          onChange={(text) => handleInputChange('password', text)}
          style={{ marginBottom: 12 }}
        />
        <Input
          label="Confirm Password"
          placeholder="********"
          Icon={EyeIcon}
          value={userData.confirmPassword}
          onChange={(text) => handleInputChange('confirmPassword', text)}
          style={{ marginBottom: 12 }}
        />

        <Button2
          bigBtnText="Sign Up"
          onbigBtnPress={handleSubmit}
          style={{ width: '100%', backgroundColor: '#8A56C2', paddingVertical: 12, borderRadius: 8, marginBottom: 20 }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC' }} />
          <Text style={{ color: '#666666', marginHorizontal: 8 }}>already have an account</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC' }} />
        </View>
        <Button
          secondaryBtnText1="Already have an account?"
          secondaryBtnText2="Sign In Here"
          onSecondaryBtnPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </SafeAreaView>
  );
}