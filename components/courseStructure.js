import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SvgXml } from "react-native-svg";
const primaryColor = '#9b4afe';
const backArrowColor = "#fff";
const blackColor = "#000";
const backArrowCode = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="${backArrowColor}"><path d="M616 960 265 609q-7-7-10.5-15.5T251 576q0-9 3.5-17.5T265 543l351-351q16-16 40-16.5t41 15.5q16 17 16 41t-16 41L394 576l303 303q17 18 16.5 41T697 959q-17 17-41 17t-40-16Z"/></svg>`;

const userCode = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="${backArrowColor}"><path d="M479.796 562q-77.203 0-126-48.796Q305 464.407 305 387.204 305 310 353.796 261q48.797-49 126-49Q557 212 606.5 261T656 387.204q0 77.203-49.5 126Q557 562 479.796 562ZM731 934H229q-39.8 0-66.9-27.625Q135 878.75 135 840v-27q0-44.302 22.828-77.516Q180.656 702.27 217 685q69-31 133.459-46.5T479.731 623q66.731 0 130.5 16 63.769 16 131.69 46.194 37.911 16.085 60.995 49.445Q826 768 826 813v27q0 38.75-27.394 66.375Q771.213 934 731 934Zm-502-94h502v-23q0-15.353-9.5-29.323Q712 773.706 698 767q-60-28-110.495-38.5-50.496-10.5-108-10.5Q424 718 371.5 728.5 319 739 261.429 766.844 247 773.559 238 787.575q-9 14.016-9 29.425v23Zm250.796-372Q515 468 538 445.154t23-58.119q0-35.685-22.796-58.36-22.797-22.675-58-22.675Q445 306 422 328.721t-23 57.819q0 35.51 22.796 58.485 22.797 22.975 58 22.975Zm.204-81Zm0 453Z"/></svg>`;

const editCourseBtn = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="${primaryColor}"><path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>`;

const editCourseBtn1 = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="${blackColor}"><path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>`;

const deleteBtn = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="${blackColor}"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>`;

const deleteBtn1 = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="${primaryColor}"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>`;

const addBtn = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="${blackColor}"><path d="M450 776h60V606h170v-60H510V376h-60v170H280v60h170v170ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Z"/></svg>`;

const CourseStructure = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <SafeAreaView style={styles.droidSafeArea}>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>

                    <View style={styles.pageHeader}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.backNavigate}>
                                <SvgXml xml={backArrowCode} width={26} height={26} style={{ marginRight: '4%' }}></SvgXml>
                                <Text style={styles.title}>Course Structure</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ marginRight: '4%' }}>
                            <View style={styles.userIcon}>
                                <SvgXml xml={userCode} width={26} height={26} style={{ margin: 2 }}></SvgXml>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.middleContainer}>

                        <View style={styles.addingCourseSection}>
                            <TextInput style={styles.courseName}>Course Name</TextInput>
                            <SvgXml xml={editCourseBtn} width={50} height={40}></SvgXml>
                            <SvgXml xml={deleteBtn1} width={50} height={40} ></SvgXml>
                        </View>
                        <View style={styles.lowerContainer}>
                            <View style={styles.courseModification}>
                                <Text style={styles.sublst}>Subject List</Text>
                                <SvgXml xml={addBtn} width={50} height={40} style={{ marginTop: '2%', marginBottom: '4%', marginLeft: '26%' }} ></SvgXml>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: blackColor,
                                    borderBottomWidth: 4,

                                }}
                            />
                            <ScrollView contentContainerStyle={styles.scrollContainer} style={{ height: '60%' }}>
                                <View style={styles.subinputbox}>
                                    <TextInput style={styles.inputbox}></TextInput>
                                    <SvgXml xml={editCourseBtn1} width={40} height={38} style={{ marginLeft: '2%', marginTop: '4%' }}></SvgXml>
                                    <SvgXml xml={deleteBtn} width={40} height={38} style={{ marginRight: '2%', marginTop: '4%' }}></SvgXml>
                                </View>

                                <View style={styles.subinputbox}>
                                    <TextInput style={styles.inputbox}></TextInput>
                                    <SvgXml xml={editCourseBtn1} width={40} height={38} style={{ marginLeft: '2%', marginTop: '4%' }}></SvgXml>
                                    <SvgXml xml={deleteBtn} width={40} height={38} style={{ marginRight: '2%', marginTop: '4%' }}></SvgXml>
                                </View>

                                <View style={styles.subinputbox}>
                                    <TextInput style={styles.inputbox}></TextInput>
                                    <SvgXml xml={editCourseBtn1} width={40} height={38} style={{ marginLeft: '2%', marginTop: '4%' }}></SvgXml>
                                    <SvgXml xml={deleteBtn} width={40} height={38} style={{ marginRight: '2%', marginTop: '4%' }}></SvgXml>
                                </View>

                                <View style={styles.subinputbox}>
                                    <TextInput style={styles.inputbox}></TextInput>
                                    <SvgXml xml={editCourseBtn1} width={40} height={38} style={{ marginLeft: '2%', marginTop: '4%' }}></SvgXml>
                                    <SvgXml xml={deleteBtn} width={40} height={38} style={{ marginRight: '2%', marginTop: '4%' }}></SvgXml>
                                </View>

                                <View style={styles.subinputbox}>
                                    <TextInput style={styles.inputbox}></TextInput>
                                    <SvgXml xml={editCourseBtn1} width={40} height={38} style={{ marginLeft: '2%', marginTop: '4%' }}></SvgXml>
                                    <SvgXml xml={deleteBtn} width={40} height={38} style={{ marginRight: '2%', marginTop: '4%' }}></SvgXml>
                                </View>

                            </ScrollView>


                        </View>

                        {/* <View style={styles.updateBtnContainer}> */}
                        <Text style={styles.updateBtn}>Update</Text>
                        {/* </View> */}
                    </View>
                </View>
            </SafeAreaView >
            <View style={styles.bottomView} />
        </View >
    );
};


export default CourseStructure;
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

    middleContainer: {
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        height: '92%',
        borderRadius: 6,
        margin: '4%',
    },

    addingCourseSection: {
        marginTop: '6%',
        flexDirection: 'row',
    },
    courseName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
        padding: '4%',
        backgroundColor: '#9b4afe',
        color: 'white',
        marginBottom: '6%',
        marginRight: '8%',
        borderColor: '#ccc',
    },

    lowerContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 12,
        height: '70%',
        margin: '4%',
    },

    sublst: {
        marginTop: '4%',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: blackColor,
    },
    inputbox: {
        borderRadius: 2,
        backgroundColor: 'pink',
        width: '68%',
        height: '90%',
        marginLeft: '4%',
        marginTop: '4%',

    },
    subinputbox: {
        margin: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    courseModification: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '4%',
    },

    updateBtn: {
        borderRadius: 6,
        backgroundColor: primaryColor,
        color: backArrowColor,
        fontSize: 30,
        padding: '2%',
        width: '34%',
        textAlign: 'center',
        marginTop: '6%',
        marginLeft: '56%',
    },
});
