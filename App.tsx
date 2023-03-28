import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.upperContainer}>
        <Text style={styles.header}>Schedule Master</Text>

        <Image style={styles.picture1} source={require('./assets/photos/login.png')} />
      </View>
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
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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


  signUp: {
    borderWidth: 1,
    backgroundColor: '#9b4afe',
    borderColor: '#9b4afe',
    borderRadius: 6,
    height: 30,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },

  Login: {
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: '#9b4afe',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
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
  },
});
