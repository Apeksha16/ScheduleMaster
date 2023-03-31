import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {SvgXml} from 'react-native-svg'
import React,{useState} from 'react';

const Home = () => {
  // const [arrowColor, setColor] = useState('blue');
  // const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" fill="${arrowColor}"><path d="M266 961q-23-23-23-56t23-56l273-273-274-274q-23-24-23.5-55.5T265 190q23-22 56.5-22t55.5 22l337 336q11 11 16.5 24t5.5 26q0 13-5.5 25.5T714 625L377 962q-25 25-56 23.5T266 961Z"/></svg>`;

  // setTimeout(() => {
  //   setColor('red');
  // }, 2000);
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.header}>Schedule Master</Text>
                <Image style={styles.picture2} source={require('.././assets/photos/background.png')} />
            </View>
            <Text style={styles.userName}>Hello, Apeksha Verma</Text>
            <View style={styles.lowerContainer}>
                <TouchableOpacity style={styles.courses} >
                    <Text style={styles.text1}>Courses</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.courses} >
                    <Text style={styles.text1}> Faculties</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.courses} >
                    <Text style={styles.text1}>Schedules</Text>
                </TouchableOpacity>
          {/* <View>
            <SvgXml xml={arrowSvg} height={30} width={30}></SvgXml>
                </View> */}
            </View>
            <Image style={styles.picture1} source={require('.././assets/photos/footer.png')} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    picture2: {
      height: 200,
      width: 260,
  
    },
    upperContainer: {
      alignItems: 'center',
    },
    header: {
      marginTop: '50%',
      fontWeight: 'bold',
      fontSize: 30,
  
    },
    picture1: {
      height: 60,
      width: 420,
    },
    userName: {
      fontWeight: 'bold',
      fontSize: 14,
      marginLeft: '42%',
    },
    lowerContainer: {
      justifyContent: 'flex-end',
    },
    courses: {
      margin: '4%',
      borderWidth: 1,
      backgroundColor: '#9b4afe',
      borderColor: '#9b4afe',
      borderRadius: 22,
      height: 50,
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    text1: {
      fontSize: 20,
      color: 'white',
    },
  
  });