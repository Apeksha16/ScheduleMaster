import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login';
import Otp from './components/otp';
import Home from './components/home';
import CourseList from './components/courses';
import BcaStructure from './components/bcaStructure';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}
          initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verify OTP" component={Otp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Courses" component={CourseList} />
          <Stack.Screen name="Course Structure" component={BcaStructure} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  );
};

export default App;

const styles = StyleSheet.create({
});