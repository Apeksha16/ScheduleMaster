import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Schedule Master</Text>

      <Image style={styles.picture1} source={require('./assets/photos/login-01.jpg')} />

      <TextInput style={styles.phoneNumber} placeholder='Enter Phone Number'></TextInput>
      <View style={styles.lowerContainer}>
        <TouchableOpacity style={styles.signUp} >
          <Text>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Login}  >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center',
  },
  picture1: {
    height: 210,
    width: 280,

  },
  lowerContainer: {

    flexDirection: 'column',
    marginTop: 30,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    padding: 20,

  },

  signUp: {
    borderWidth: 1,
    backgroundColor: '#9b4afe',
    borderRadius: 2,
    height: 20,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },

  Login: {
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 200,
    alignSelf: 'center',

  },
  phoneNumber: {
    marginTop: 20,
    fontWeight: 'bold',
    borderRadius: 6,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 8,
  },
});
