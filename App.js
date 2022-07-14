
//Make sure this stays at the very top and nothing comes before
//import 'react-native-gesture-handler';

import { StyleSheet, View, SafeAreaView, Text, Pressable, Image, FlatList} from 'react-native';


// function list() {
//  const items = [1, 2, 3, 4, 5] 
//  }

export default function App() {

  const handlePress = () => console.log("Text Pressed!");
  return (
    <SafeAreaView style={styles.listContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Compassion Meals</Text>
       </View>
       <View style={styles.distanceContainer}>
          <Text style={styles.distanceText}>2.00mi</Text>
        </View>    
        <Pressable onPress={handlePress} style={styles.infoBtn}>
          <View>
              <Image source={require('./assets/info.png')} style={{width: 20, height: 20, tintColor: 'white'}} />
          </View>
        </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  locationContainer: {
    //flex: 1,
    backgroundColor: 'black',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  locationText: {
    color: 'white'
  },
  distanceContainer: {
    // backgroundColor: 'grey',
    // paddingLeft: 5,
    // paddingTop: 5,
    // paddingBottom: 5
  },
  distanceText: {
    color: '#B2FFC3',
    backgroundColor: 'grey',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5

  },
  infoBtn: {
    //flex: 0.5
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
});


      /* <Text onPress={handlePress}>Hello React Native!</Text>
      <TouchableOpacity onPress={() => console.log("Text clicked")}>
          <Image source={{
              width: 200, 
              height: 300,
              uri: "https://picsum.photos/200/300"}} 
            />
     </TouchableOpacity>
     <Button
            color='orange'
            title= 'Click Me'
            onPress={() => Alert.prompt("Enter you name:", "Need more information about you.", (text) => console.log(text)
          )}
     /> */