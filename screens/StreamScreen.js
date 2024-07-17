import { View, Text } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Mycourses from '../components/mycourse';
import {
  areaFilters,
  institutionData,
  subjectFilters,
  teacherData,
} from '../assets/data/data';

const StreamScreen = () => {
  const [institutions, setInstitutions] = useState(institutionData);
  return (
    <SafeAreaView className="flex-1 bg-bgWhite p-8 ">
       <Text className="text-blackText text-3xl text-start font-exoSemibold mb-3">
              My Courses
            </Text>   
          {   <View className={`w-full bg-transparent t-4`}>
            {institutions.map((institution, index) => (
              <Mycourses institution={institution} key={index} />
            ))}
          </View> 
          }
             </SafeAreaView>
  );
};

export default StreamScreen;
