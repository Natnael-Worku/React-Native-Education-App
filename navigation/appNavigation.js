import { View, Text, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SelectGradeScreen from '../screens/SelectGradeScreen';
import SelectProvinceScreen from '../screens/SelectProvinceScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { themeColors } from '../theme';
import { images } from '../assets';
import CourseDetailScreen from '../screens/CourseDetail/CourseDetailScreen';
import LessonsScreen from '../screens/CourseDetail/LessonsScreen';
import ReviewsScreen from '../screens/CourseDetail/ReviewsScreen';
import MyCourse from '../screens/MyCourse';
import CourseEnrolled from '../screens/CourseEnrolled';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnBoardingScreen';
import StreamScreen from '../screens/StreamScreen';
import ClassWorkScreen from '../screens/ClassWorkScreen';
import Messages from '../screens/Messages';
import Messages_detail from '../screens/Messages_detail';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="OnboardingScreen"
          options={{ headerShown: false }}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="SignIn"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="SelectGrade"
          options={{ headerShown: false }}
          component={SelectGradeScreen}
        />
        <Stack.Screen
          name="SelectProvince"
          options={{ headerShown: false }}
          component={SelectProvinceScreen}
        />
        <Stack.Screen
          name="CourseDetail"
          options={{ headerShown: false }}
          component={CourseDetailScreen}
        />
        <Stack.Screen
          name="Lessons"
          options={{ headerShown: false }}
          component={LessonsScreen}
        />
        <Stack.Screen
          name="Reviews"
          options={{ headerShown: false }}
          component={ReviewsScreen}
        />
        <Stack.Screen
          name="courses"
          options={{ headerShown: false }}
          component={MyCourse}
        />
        <Stack.Screen
          name="CourseEnrolled"
          options={{ headerShown: false }}
          component={CourseEnrolled}
        />
        <Stack.Screen
          name="Messages"
          options={{ headerShown: false }}
          component={Messages}
        />
        <Stack.Screen
          name="Messages_detail"
          options={{ headerShown: false }}
          component={Messages_detail}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const { streamIcon, classWorkIcon, exploreIcon,funnel } = images;
const extraTabOptions = {
  tabBarLabelStyle: { fontFamily: 'exo' },
  tabBarStyle: { borderTopRightRadius: 12, borderTopLeftRadius: 12 },
  tabBarActiveTintColor: themeColors.bgPurple,
  tabBarInactiveTintColor: themeColors.darkGrayText,
};
function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Explore">
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              <Image
                source={exploreIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="Stream"
        component={StreamScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              <Image
                source={streamIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              <Image
                source={funnel}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="Classwork"
        component={ClassWorkScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              <Image
                source={classWorkIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
    </Tab.Navigator>
  );
}