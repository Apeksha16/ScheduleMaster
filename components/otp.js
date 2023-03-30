import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Otp({navigation}) {
    return (
            <KeyboardAvoidingView style={{ flex: 1 }} enabled behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<View style={styles.container}>
<View style={styles.upperContainer}>
                <Text style={styles.header}>Schedule Master</Text>
                <Image style={styles.picture1} source={require('.././assets/photos/otp.png')} />
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
                <TouchableOpacity style={styles.verify} onPress={()=>navigation.navigate('Home')} >
                    <Text style={styles.text1}>Verify</Text>
                </TouchableOpacity >
            </View>
        </View >
            </TouchableWithoutFeedback></KeyboardAvoidingView>
    );}

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
        width: 178,
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
    });