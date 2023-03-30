import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function App() {
  return (
    <View style={styles.container}>

      {/* <View style={styles.upperContainer}>
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
      </View> */}

      <View style={styles.upperContainer}>
        <Text style={styles.header}>Schedule Master</Text>
        <Image style={styles.picture1} source={require('./assets/photos/otp.png')} />
      </View>

      <View style={styles.backgroundColor}>
        <View style={styles.phoneContainer}>
          <Text style={styles.phoneNumber}>+91 7668804527</Text>
          <Ionicons style={styles.pencil} name="pencil-outline" size={30} color="black" />
        </View>


        <Text style={styles.otp}>Enter 4-digit OTP</Text>
        <View style={styles.lowerContainer}>
          <TextInput style={styles.code}></TextInput>
          <TextInput style={styles.code}></TextInput>
          <TextInput style={styles.code}></TextInput>
          <TextInput style={styles.code}></TextInput>

        </View>
        <TouchableOpacity style={styles.verify}  >
          <Text style={styles.text1}>Verify</Text>
        </TouchableOpacity >
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
    justifyContent: 'flex-end',
  },
  phoneContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,

    width: '100%',
  },
  pencil: {
    marginLeft: 10,
  },

  picture1: {
    height: 210,
    width: 280,
  },
  upperContainer: {
    alignItems: 'center',

  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
  },
  phoneNumber: {
    fontWeight: 'bold',
    borderRadius: 6,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 2,
    padding: 10,
    fontSize: 18,
    width: 170,
    color: '#5A5A5A',
  },
  otp: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  lowerContainer: {

    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
  },
  verify: {
    borderWidth: 1,
    backgroundColor: '#9b4afe',
    borderColor: '#9b4afe',
    borderRadius: 6,
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 20,

  },
  code: {
    fontSize: 20,
    width: 40,
    height: 40,
    paddingLeft: 14,
    margin: 20,
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: '#9b4afe',
    fontWeight: 'bold',
  },
  backgroundColor: {
    marginTop: '6%',
    backgroundColor: '#f2f2f2',
    borderRadius: 38,
    width: '100%',
    height: '44%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '14%',

  },
  text1: {
    fontSize: 22,
    color: 'white',

  },
  // upperContainer: {
  //   backgroundColor: '#f2f2f2',
  //   marginTop: "25%",
  //   width: 350,
  //   borderRadius: 22,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 360,

  // },
  // lowerContainer: {

  //   flexDirection: 'column',
  //   backgroundColor: '#f2f2f2',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 18,
  //   width: 300,
  //   height: 200,


  // },
  // header: {
  //   fontWeight: 'bold',
  //   fontSize: 30,
  //   alignItems: 'center',
  // },
  // picture1: {
  //   height: 210,
  //   width: 280,

  // },


  // signUp: {
  //   borderWidth: 1,
  //   backgroundColor: '#9b4afe',
  //   borderColor: '#9b4afe',
  //   borderRadius: 6,
  //   height: 30,
  //   width: 200,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   alignSelf: 'center',

  // },

  // Login: {
  //   borderWidth: 1,
  //   marginTop: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 6,
  //   borderColor: '#9b4afe',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 30,
  //   width: 200,
  //   alignSelf: 'center',

  // },
  // phoneNumber: {
  //   margin: 30,
  //   fontWeight: 'bold',
  //   borderRadius: 6,
  //   borderColor: 'grey',
  //   borderWidth: 2,
  //   padding: 10,
  //   fontSize: 22,
  // },
});
