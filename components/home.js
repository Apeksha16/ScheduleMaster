import { StyleSheet, Text, View, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SvgXml } from "react-native-svg";
const backArrowColor = "#fff";
const backArrowCode = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="${backArrowColor}"><path d="M616 960 265 609q-7-7-10.5-15.5T251 576q0-9 3.5-17.5T265 543l351-351q16-16 40-16.5t41 15.5q16 17 16 41t-16 41L394 576l303 303q17 18 16.5 41T697 959q-17 17-41 17t-40-16Z"/></svg>`;
const userCode = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="${backArrowColor}"><path d="M479.796 562q-77.203 0-126-48.796Q305 464.407 305 387.204 305 310 353.796 261q48.797-49 126-49Q557 212 606.5 261T656 387.204q0 77.203-49.5 126Q557 562 479.796 562ZM731 934H229q-39.8 0-66.9-27.625Q135 878.75 135 840v-27q0-44.302 22.828-77.516Q180.656 702.27 217 685q69-31 133.459-46.5T479.731 623q66.731 0 130.5 16 63.769 16 131.69 46.194 37.911 16.085 60.995 49.445Q826 768 826 813v27q0 38.75-27.394 66.375Q771.213 934 731 934Zm-502-94h502v-23q0-15.353-9.5-29.323Q712 773.706 698 767q-60-28-110.495-38.5-50.496-10.5-108-10.5Q424 718 371.5 728.5 319 739 261.429 766.844 247 773.559 238 787.575q-9 14.016-9 29.425v23Zm250.796-372Q515 468 538 445.154t23-58.119q0-35.685-22.796-58.36-22.797-22.675-58-22.675Q445 306 422 328.721t-23 57.819q0 35.51 22.796 58.485 22.797 22.975 58 22.975Zm.204-81Zm0 453Z"/></svg>`;
const forwardArrowCode = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="${backArrowColor}"><path d="M264 957q-16-17-16.5-40t16.5-40l303-303-303-303q-16-16-17-39.5t16-40.5q16-17 40-17.5t40 16.5l352 351q7 7 10.5 15.5T709 574q0 9-3.5 17.5T695 607L344 958q-16 16-39.5 16T264 957Z"/></svg>`;


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#9b4afe' }}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

        <View style={styles.pageHeader}>
          <View style={{flex:1, flexDirection:'row'}}>
            <TouchableOpacity style={styles.backNavigate}>
              <SvgXml xml={backArrowCode} width={26} height={26} style={{marginRight:'4%'}}></SvgXml>
        <Text style={styles.title}>Dashboard</Text>
        </TouchableOpacity>
          </View>
          <TouchableOpacity style={{marginRight:'4%'}}>
            <View style={styles.userIcon}>
            <SvgXml xml={userCode} width={26} height={26} style={{margin:2}}></SvgXml>    
            </View>
        </TouchableOpacity>
      </View>
        <View style={{alignItems:'flex-end',margin:'1%'}}>
        <Text style={styles.userName}>Hello, Apeksha Verma</Text>
      </View>
      <View style={styles.upperContainer}>
        <Image style={styles.picture2} source={require('.././assets/photos/background.png')} />
      </View>

        <ScrollView contentContainerStyle={styles.lowerContainer} style={{ height: '100%' }}>
        <TouchableOpacity style={styles.courses} onPress={() => navigation.navigate('Courses')} >
          <Text style={styles.text1}>Courses</Text>
            {/* <Ionicons name="chevron-forward-outline" size={30} color="white" /> */}
            <SvgXml xml={forwardArrowCode} width={20} height={20} style={{ marginTop: '1.5%' }}></SvgXml>
        </TouchableOpacity>

        <TouchableOpacity style={styles.courses} >
          <Text style={styles.text1}> Faculties</Text>
            {/* <Ionicons name="chevron-forward-outline" size={30} color="white" /> */}
            <SvgXml xml={forwardArrowCode} width={20} height={20} style={{ marginTop: '1.5%' }}></SvgXml>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.courses} >
          <Text style={styles.text1}>Schedules</Text>
            {/* <Ionicons name="chevron-forward-outline" size={30} color="white" /> */}
            <SvgXml xml={forwardArrowCode} width={20} height={20} style={{ marginTop: '1.5%' }}></SvgXml>
            
          </TouchableOpacity>
          
        </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.bottomView} />
      </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor:'#9b4afe'
  },
  bottomView: {
    flex:0.05,
    backgroundColor:'red'
},
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginTop:'1.2%'
  },
  backNavigate: {
    paddingLeft: '4%',
    flexDirection:'row'
  },
  container: {
    flex: 1,
    // backgroundColor: '#333',
    alignItems: 'center',
  },
  userIcon: {
    borderRadius: '50%',
    borderColor: '#fff',
    borderWidth: 3,
    // marginRight:'4%'
    
  },
  picture2: {
    height: 200,
    width: 260,
    marginBottom: 30,

  },
  upperContainer: {
    alignItems: 'center',
    opacity:0.5
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
    margin:10
  },

  courses: {
    margin: '4%',
    borderWidth: 1,
    backgroundColor: '#9b4afe',
    borderColor: '#9b4afe',
    borderRadius: 6,
    height: 70,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },


  text1: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: 'white',
  },

});
