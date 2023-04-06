import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const primaryColor = '#9b4afe';
const backArrowColor = "#fff";
import Svg, {
    Path,
} from 'react-native-svg';

const CourseList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <SafeAreaView style={styles.droidSafeArea}>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>

                    <View style={styles.pageHeader}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.backNavigate}>
                                <Svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26" fill={backArrowColor} marginRight="4%"><Path d="M616 960 265 609q-7-7-10.5-15.5T251 576q0-9 3.5-17.5T265 543l351-351q16-16 40-16.5t41 15.5q16 17 16 41t-16 41L394 576l303 303q17 18 16.5 41T697 959q-17 17-41 17t-40-16Z" /></Svg>

                                <Text style={styles.title}>Course List</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ marginRight: '4%' }}>
                            <View style={styles.userIcon}>
                                <Svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26" fill={backArrowColor} margin="2%"><Path d="M479.796 562q-77.203 0-126-48.796Q305 464.407 305 387.204 305 310 353.796 261q48.797-49 126-49Q557 212 606.5 261T656 387.204q0 77.203-49.5 126Q557 562 479.796 562ZM731 934H229q-39.8 0-66.9-27.625Q135 878.75 135 840v-27q0-44.302 22.828-77.516Q180.656 702.27 217 685q69-31 133.459-46.5T479.731 623q66.731 0 130.5 16 63.769 16 131.69 46.194 37.911 16.085 60.995 49.445Q826 768 826 813v27q0 38.75-27.394 66.375Q771.213 934 731 934Zm-502-94h502v-23q0-15.353-9.5-29.323Q712 773.706 698 767q-60-28-110.495-38.5-50.496-10.5-108-10.5Q424 718 371.5 728.5 319 739 261.429 766.844 247 773.559 238 787.575q-9 14.016-9 29.425v23Zm250.796-372Q515 468 538 445.154t23-58.119q0-35.685-22.796-58.36-22.797-22.675-58-22.675Q445 306 422 328.721t-23 57.819q0 35.51 22.796 58.485 22.797 22.975 58 22.975Zm.204-81Zm0 453Z" /></Svg>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.upperContainer}>
                        <Text style={styles.heading}>Our Courses</Text>
                        <TouchableOpacity style={styles.addBtn}>
                            <Text style={styles.btnTxt}>Add Course</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lowerContainer}>
                        <ScrollView contentContainerStyle={styles.scrollContainer} style={{ height: '70%' }}>
                            <TouchableOpacity style={styles.courseListContainer} onPress={() => navigation.navigate('Course Structure')} >
                                <View style={styles.circle}>
                                    <Text style={styles.dynamicName1}>BC</Text>
                                </View>
                                <Text style={styles.courseName}>BCA</Text>
                            </TouchableOpacity>


                            <View style={styles.courseListContainer}>
                                <View style={styles.circle}>
                                    <Text style={styles.dynamicName1}>MC</Text>
                                </View>
                                <Text style={styles.courseName}>MCA</Text>
                            </View>


                            <View style={styles.courseListContainer}>
                                <View style={styles.circle}>
                                    <Text style={styles.dynamicName1}>BE</Text>
                                </View>
                                <Text style={styles.courseName}>BTECH</Text>
                            </View>

                            <View style={styles.courseListContainer}>
                                <View style={styles.circle}>
                                    <Text style={styles.dynamicName1}>BB</Text>
                                </View>
                                <Text style={styles.courseName}>BBA</Text>
                            </View>

                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView >
            <View style={styles.bottomView} />
        </View >
    );
};


export default CourseList;
const styles = StyleSheet.create({
    userIcon: {
        borderRadius: 50,
        borderColor: '#fff',
        borderWidth: 3,
    },
    pageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 60,
        width: '100%',
        backgroundColor: primaryColor,
    },
    bottomView: {
        flex: 0.05,
        backgroundColor: 'red',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        marginTop: '1.2%'
    },
    backNavigate: {
        paddingLeft: '4%',
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: '#9b4afe',
    },
    upperContainer: {
        margin: '4%',
        padding: '2%',
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 6,
    },

    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        padding: '2%',

    },
    addBtn: {
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#9b4afe',
    },
    btnTxt: {
        fontSize: 18,
        backgroundColor: '#9b4afe',
        textAlign: 'center',
        padding: '2%',
        color: 'white',
        fontWeight: 'bold',
    },
    lowerContainer: {
        justifyContent: 'flex-start',
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        height: '80%',
        width: '90%',
        marginLeft: '5%',
        marginTop: '4%',
        borderRadius: 6,
        marginBottom: '4%',
    },


    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: backArrowColor,
        justifyContent: 'center',
        alignItems: 'center',

    },

    dynamicName1: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',

    },

    courseName: {
        margin: '4%',
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',

    },

    courseListContainer: {
        flexDirection: 'row',
        paddingLeft: '4%',
        marginTop: '20%',
        borderWidth: 1,
        backgroundColor: primaryColor,
        borderColor: primaryColor,
        borderRadius: 6,
        alignItems: 'center',
        width: 240,
        height: 74,
    },
});
