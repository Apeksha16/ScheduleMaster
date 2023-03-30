import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, SafeAreaView } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} enabled behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <Text style={styles.header}>Schedule Master</Text>
            <Image style={styles.picture1} source={require('.././assets/photos/login.png')} />
          </View>
          <TextInput style={styles.phoneNumber} placeholder='Enter Phone Number'></TextInput>
          <View style={styles.lowerContainer}>
            <TouchableOpacity style={styles.signUp} >
              <Text style={styles.btnTxt}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Login} onPress={() => navigation.navigate('Verify OTP')}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  upperContainer: {
    backgroundColor: '#f2f2f2',
    marginTop: "25%",
    width: 350,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    height: 360,

  },
  lowerContainer: {
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    width: 300,
    height: 200,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
  },
  picture1: {
    height: 210,
    width: 280,

  },
  btnTxt:{
    color:'white'
  },

  signUp: {
    borderWidth: 1,
    backgroundColor: '#9b4afe',
    borderColor: '#9b4afe',
    borderRadius: 6,
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  Login: {
    borderWidth: 1,
    marginTop: 14,
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: '#9b4afe',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 200,
    alignSelf: 'center',
  },
  phoneNumber: {
    margin: 30,
    fontWeight: 'bold',
    borderRadius: 6,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 10,
    fontSize: 22,
    width:238,
  },
});