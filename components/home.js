import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container} style={{ height: '100%' }}>
      <View style={styles.pageHeader}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="#9b4afe" />
        </TouchableOpacity>
      </View>
      <Text style={styles.userName}>Hello, Apeksha Verma</Text>
      <View style={styles.upperContainer}>
        <Image style={styles.picture2} source={require('.././assets/photos/background.png')} />
      </View>

      <View style={styles.lowerContainer}>
        <TouchableOpacity style={styles.courses} onPress={() => navigation.navigate('Courses')} >
          <Text style={styles.text1}>Courses</Text>
          <Ionicons name="chevron-forward-outline" size={30} color="white" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.courses} >
          <Text style={styles.text1}> Faculties</Text>
          <Ionicons name="chevron-forward-outline" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.courses} >
          <Text style={styles.text1}>Schedules</Text>
          <Ionicons name="chevron-forward-outline" size={30} color="white" />
        </TouchableOpacity>



      </View>

    </ScrollView >
  );
};

export default Home;
const styles = StyleSheet.create({

  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '6%',
    height: 56,

  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 250,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  picture2: {
    height: 200,
    width: 260,
    marginBottom: 30,

  },
  upperContainer: {
    alignItems: 'center',

  },
  userName: {
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: '42%',
    marginBottom: 50,
    marginTop: 20,
  },

  courses: {
    margin: '4%',
    borderWidth: 1,
    backgroundColor: '#9b4afe',
    borderColor: '#9b4afe',
    borderRadius: 6,
    height: 60,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },


  text1: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
  },

});