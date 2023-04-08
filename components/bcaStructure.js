import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Svg, {
    Path,
} from 'react-native-svg';
const primaryColor = '#9b4afe';
const backArrowColor = "#fff";

const BcaStructure = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <SafeAreaView style={styles.droidSafeArea}>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>

                    <View style={styles.pageHeader}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.backNavigate}>
                                <Svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26" fill="${backArrowColor}"><Path d="M616 960 265 609q-7-7-10.5-15.5T251 576q0-9 3.5-17.5T265 543l351-351q16-16 40-16.5t41 15.5q16 17 16 41t-16 41L394 576l303 303q17 18 16.5 41T697 959q-17 17-41 17t-40-16Z" /></Svg>
                                {/* <SvgXml xml={backArrowCode} width={26} height={26} style={{ marginRight: '4%' }}></SvgXml> */}
                                <Text style={styles.title}>BCA Structure</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ marginRight: '4%' }}>
                            <View style={styles.userIcon}>
                                <Svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26" fill="${backArrowColor}"><Path d="M479.796 562q-77.203 0-126-48.796Q305 464.407 305 387.204 305 310 353.796 261q48.797-49 126-49Q557 212 606.5 261T656 387.204q0 77.203-49.5 126Q557 562 479.796 562ZM731 934H229q-39.8 0-66.9-27.625Q135 878.75 135 840v-27q0-44.302 22.828-77.516Q180.656 702.27 217 685q69-31 133.459-46.5T479.731 623q66.731 0 130.5 16 63.769 16 131.69 46.194 37.911 16.085 60.995 49.445Q826 768 826 813v27q0 38.75-27.394 66.375Q771.213 934 731 934Zm-502-94h502v-23q0-15.353-9.5-29.323Q712 773.706 698 767q-60-28-110.495-38.5-50.496-10.5-108-10.5Q424 718 371.5 728.5 319 739 261.429 766.844 247 773.559 238 787.575q-9 14.016-9 29.425v23Zm250.796-372Q515 468 538 445.154t23-58.119q0-35.685-22.796-58.36-22.797-22.675-58-22.675Q445 306 422 328.721t-23 57.819q0 35.51 22.796 58.485 22.797 22.975 58 22.975Zm.204-81Zm0 453Z" /></Svg>
                                {/* <SvgXml xml={userCode} width={26} height={26} style={{ margin: 2 }}></SvgXml> */}
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.course}>BCA</Text>

                    <View style={styles.middleContainer}>

                        <View style={styles.addingCourseSection}>
                            <Text style={styles.courseName}>Course Name</Text>
                            <Svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 96 960 960" width="80" fill="${primaryColor}"><Path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z" /></Svg>
                            {/* <SvgXml xml={addCourseBtn} width={80} height={50} style={{ margin: 2 }}></SvgXml> */}
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={styles.lowerContainer} style={{ height: '100%' }}>

                        <Text style={styles.sublst}>Subject List</Text>
                        <View style={styles.subinputbox}>
                            <TextInput style={styles.inputbox}></TextInput>
                            <Svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 96 960 960" width="60" fill="${primaryColor}"><Path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" /></Svg>
                            {/* <SvgXml xml={deleteBtn} width={60} height={44} style={{ marginRight: '12%', marginBottom: '4%' }}></SvgXml> */}
                        </View>

                        <View style={styles.subinputbox}>
                            <TextInput style={styles.inputbox}></TextInput>
                            <Svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 96 960 960" width="60" fill="${primaryColor}"><Path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" /></Svg>
                            {/* <SvgXml xml={deleteBtn} width={60} height={44} style={{ marginRight: '12%', marginBottom: '4%' }}></SvgXml> */}
                        </View>

                        <View style={styles.subinputbox}>
                            <TextInput style={styles.inputbox}></TextInput>
                            <Svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 96 960 960" width="60" fill="${primaryColor}"><Path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" /></Svg>
                            {/* <SvgXml xml={deleteBtn} width={60} height={44} style={{ marginRight: '12%', marginBottom: '4%' }}></SvgXml> */}
                        </View>

                        <View style={styles.subinputbox}>
                            <TextInput style={styles.inputbox}></TextInput>
                            <Svg xmlns="http://www.w3.org/2000/svg" height="44" viewBox="0 96 960 960" width="60" fill="${primaryColor}"><Path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" /></Svg>
                            {/* <SvgXml xml={deleteBtn} width={60} height={44} style={{ marginRight: '12%', marginBottom: '4%' }}></SvgXml> */}
                        </View>



                    </ScrollView>
                </View>
            </SafeAreaView >
            <View style={styles.bottomView} />
        </View >
    );
};


export default BcaStructure;
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
    },

    addingCourseSection: {
        marginTop: '6%',
        flexDirection: 'row',
        // backgroundColor: 'yellow',
    },
    course: {
        marginTop: '4%',
        fontWeight: 'bold',
        fontSize: 36,
        textAlign: 'center',
    },
    courseName: {
        fontWeight: 'bold',
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
        padding: '4%',
        backgroundColor: '#9b4afe',
        color: 'white',
        borderColor: '#9b4afe',
        borderRadius: 6,
        marginBottom: '6%',
    },

    lowerContainer: {
        backgroundColor: '#f2f2f2',
        margin: '2%',
        height: '60%',
        width: '80%',
        marginLeft: '10%',
        justifyContent: 'center',
    },

    sublst: {
        margin: '4%',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputbox: {
        borderRadius: 2,
        backgroundColor: '#fff',
        width: '42%',
        height: '80%',
        marginLeft: '20%',

    },
    subinputbox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});
