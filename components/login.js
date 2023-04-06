import  React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, SafeAreaView } from 'react-native';

const Login = ({ navigation }) => {

  const [mobileNumber, setMobileNumber] = useState('');

  const navigateToOtp = () => {
    Keyboard.dismiss();
    navigation.navigate('Verify OTP')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#fff' }}>
    <KeyboardAvoidingView style={{ flex: 1 }} enabled behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <Text style={styles.header}>Schedule Master</Text>
            <Image style={styles.picture1} source={require('.././assets/photos/login.png')} />
          </View>
            <TextInput style={styles.phoneNumber} inputMode='numeric' textAlign='center' caretHidden={true} maxLength={10} placeholder='Enter Phone Number' defaultValue={mobileNumber} onChangeText={text => setMobileNumber(text)}></TextInput>
          <View style={styles.lowerContainer}>
            <TouchableOpacity style={styles.signUp} >
              <Text style={styles.btnTxt}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={mobileNumber.length < 10} style={[styles.Login,{opacity: mobileNumber.length < 10 ? 0.3: 1}]} onPress={() => navigateToOtp()}>
              <Text style={styles.btnTxt1}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </ KeyboardAvoidingView>
      </SafeAreaView>
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
    width: 340,
    height: 200,
    marginBottom:'6%'
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
  btnTxt: {
    color: 'white',
    fontSize: 16,
  },
  btnTxt1: {
    color: 'black',
    fontSize: 16,
  },


  signUp: {
    borderWidth: 1,
    backgroundColor: '#9b4afe',
    borderColor: '#9b4afe',
    borderRadius: 6,
    height: 50,
    width: 240,
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
    height: 50,
    width: 240,
    alignSelf: 'center',
  },
  phoneNumber: {
    textAlign: 'center',
    margin: 30,
    fontWeight: 'bold',
    borderRadius: 6,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 10,
    fontSize: 22,
    width: 238,
  },
});