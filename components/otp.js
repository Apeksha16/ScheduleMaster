import * as React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

var screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
export default function Otp({ navigation }) {


    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <KeyboardAvoidingView style={{ flex: 1 }} enabled behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.upperContainer}>
                                {/* <Text style={styles.header}>Login</Text> */}
                                <Image style={styles.picture1} source={require('.././assets/photos/otp.png')} />
                            </View>
                            <View style={styles.backgroundColor}>
                                <View style={styles.phoneContainer}>
                                    <Text style={styles.phoneNumber}>+91 7668804527</Text>
                                    <TouchableOpacity>
                                        <Ionicons style={styles.pencil} name="pencil-outline" size={30} color="black" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.otp}>Enter 4-digit OTP</Text>
                                <View style={styles.lowerContainer}>
                                    <TextInput style={styles.code}></TextInput>
                                    <TextInput style={styles.code}></TextInput>
                                    <TextInput style={styles.code}></TextInput>
                                    <TextInput style={styles.code}></TextInput>
                                </View>
                                <TouchableOpacity style={styles.verify} onPress={() => navigation.navigate('Home')} >
                                    <Text style={styles.text1}>Verify</Text>
                                </TouchableOpacity >
                            </View>
                        </View >
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
            <View style={styles.bottomView} />
        </View>
    );
}

const styles = StyleSheet.create({
    bottomView: {
        flex: 0.05,
        backgroundColor: '#f2f2f2'
    },
    container: {
        flex: 1,
        // backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    phoneContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '100%',
        marginTop: '4%',
    },
    pencil: {
        textAlign: 'center',
        marginLeft: 10,
        fontWeight: 'bold',
        borderRadius: 6,
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 2,
        fontSize: 24,
        width: 44,
        padding: 8,
        backgroundColor: '#fff',

    },

    picture1: {
        width: 280,
        height: 280,
        // resizeMode:'center',
    },
    upperContainer: {
        alignItems: 'center',
        // marginTop: 140,

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
        backgroundColor: '#fff',
    },
    otp: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
    lowerContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        justifyContent: 'flex-end',
    },
    verify: {
        borderWidth: 1,
        backgroundColor: '#9b4afe',
        borderColor: '#9b4afe',
        borderRadius: 6,
        height: 50,
        width: 240,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,

    },
    code: {
        fontSize: 20,
        width: 40,
        height: 40,
        paddingLeft: '3%',
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
        // borderRadius: 48,
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
        width: '100%',
        height: '50%',
        maxHeight: 310,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '10%',
    },
    text1: {
        fontSize: 16,
        color: 'white',
    },
});