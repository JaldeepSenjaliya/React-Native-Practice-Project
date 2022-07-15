import react  from "react";
import { SafeAreaView, Text } from "react-native";

const Home = (props) => {
    return(
        // <SafeAreaView style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <View style={styles.listContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText} numberOfLines={0} ellipsizeMode='tail'>Compassion Meals</Text>
       </View>
       <View style={styles.distanceContainer}>
          <Text style={styles.distanceText}>0.2 mi</Text>
        </View>    
        <Pressable onPress={handlePress} style={styles.infoBtn}>
          <View>
              <Image source={require('./assets/info.png')} style={{width: 25, height: 25, tintColor: 'white'}} />
          </View>
        </Pressable>
    </View>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      marginTop: 100,
      backgroundColor: '#232323',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    locationContainer: {
      backgroundColor: "#232323",
      flex: 0.75,
      marginLeft: 12,
      marginTop: 20,
      marginBottom: 20,
      height: 35
    },
    locationText: {
      color: '#ffffff',
      fontSize: 18,
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 5,
    },
    distanceContainer: {
      flex: 0.14,
      backgroundColor: '#4F4F4F',
      borderRadius: 5,
      marginLeft: 7,
      marginTop: 22.5,
      marginBottom: 20,
      height: 30,
     
    },
    distanceText: {
      color: '#B2FFC3',
      paddingLeft: 5,
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 5,
    },
    infoBtn: {
      flex: 0.10,
      marginLeft: 10,
      marginTop: 22.5,
      marginRight: 12,
      marginBottom: 20,
      
    },
  });

export default Home