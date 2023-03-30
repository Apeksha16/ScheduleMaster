import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Home = () => {
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