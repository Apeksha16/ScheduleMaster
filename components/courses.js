import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CourseList = (navigation) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <TouchableOpacity style={styles.backArrow}>
                        <Ionicons name="arrow-back" size={38} color="#9b4afe" />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Schedule Master</Text>
                    <TouchableOpacity>
                        <Ionicons name="person-outline" size={38} color="#9b4afe" />
                    </TouchableOpacity>
                </View>

                <View style={styles.middleContainer}>
                    <Text style={styles.course}>Our Courses</Text>
                    <TouchableOpacity style={styles.addCourse}>
                        <Text>Add Course</Text>

                    </TouchableOpacity>

                </View>
                <ScrollView>
                    <View style={styles.lowerContainer}>
                        <View style={styles.courseBox}>
                            <View style={styles.subParts}>
                                <Text style={styles.courseHeading}>BC</Text>
                                <Text style={styles.courseName}>BCA</Text>
                            </View>
                        </View>

                        <View style={styles.courseBox}>
                            <View style={styles.subParts}>
                                <Text style={styles.courseHeading}>MC</Text>
                                <Text style={styles.courseName}>MCA</Text>
                            </View>
                        </View>


                        <View style={styles.courseBox}>
                            <View style={styles.subParts}>
                                <Text style={styles.courseHeading}>BB</Text>
                                <Text style={styles.courseName}>BBA</Text>
                            </View>
                        </View>
                        <View style={styles.courseBox}>
                            <View style={styles.subParts}>
                                <Text style={styles.courseHeading}>BE</Text>
                                <Text style={styles.courseName}>BTECH</Text>
                            </View>
                        </View>
                    </View >
                </ScrollView>
            </View>
        </SafeAreaView >
    );
};


export default CourseList;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    upperContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    backArrow: {
        borderWidth: 2,
        borderRadius: 16,
    },
    heading: {
        fontSize: 26,
    },
    middleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    course: {
        fontWeight: 'bold',
        fontSize: 26,
        alignItems: 'center',
    },
    addCourse: {
        borderWidth: 2,
        borderRadius: 14,
        fontSize: 20,
        padding: 10,

    },
    lowerContainer: {
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        height: 350,
        margin: 20,
    },
    courseName: {
        fontSize: 18,
        paddingTop: 26,
    },
    courseHeading: {
        borderWidth: 2,
        borderColor: 'black',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: 70,
        fontSize: 18,
        padding: 16,
        margin: 10,

    },
    subParts: {
        flexDirection: 'row',
        padding: 10,
        marginRight: 100,

    },
    courseBox: {
        margin: 28,
        borderWidth: 2,
        borderColor: '#9b4afe',
        borderRadius: 14,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 240,
        backgroundColor: '#fff',

    },

});