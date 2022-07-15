//Make sure this stays at the very top and nothing comes before
//import 'react-native-gesture-handler';

import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  FlatList,
} from "react-native";

import {Home} from './src/screens/Home'

export default function App() {
  const handlePress = () => console.log("Text Pressed!");
  return (
    <View style={{backgroundColor: '#000000'}}>
      <View style={styles.listContainer}>
        <View style={styles.locationContainer}>
          <Text
            style={styles.locationText}
            numberOfLines={0}
            ellipsizeMode="tail"
          >
            Compassion Meals
          </Text>
        </View>
        <View style={styles.distanceContainer}>
          <Text style={styles.distanceText}>0.2 mi</Text>
        </View>
        <Pressable onPress={handlePress} style={styles.infoBtn}>
          <View>
            <Image
              source={require("./assets/info.png")}
              style={{ width: 25, height: 25, tintColor: "white" }}
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.locationContainer}>
          <Text
            style={styles.locationText}
            numberOfLines={0}
            ellipsizeMode="tail"
          >
            Compassion Meals
          </Text>
        </View>
        <View style={styles.distanceContainer}>
          <Text style={styles.distanceText}>0.2 mi</Text>
        </View>
        <Pressable onPress={handlePress} style={styles.infoBtn}>
          <View>
            <Image
              source={require("./assets/info.png")}
              style={{ width: 25, height: 25, tintColor: "white" }}
            />
          </View>
        </Pressable>
      </View>
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 5,
    backgroundColor: "#232323",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationContainer: {
    backgroundColor: "#232323",
    flex: 0.75,
    marginLeft: 12,
    marginTop: 20,
    marginBottom: 20,
    height: 35,
  },
  locationText: {
    color: "#ffffff",
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
  distanceContainer: {
    flex: 0.14,
    backgroundColor: "#4F4F4F",
    borderRadius: 5,
    marginLeft: 7,
    marginTop: 22.5,
    marginBottom: 20,
    height: 30,
  },
  distanceText: {
    color: "#B2FFC3",
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
  infoBtn: {
    flex: 0.1,
    marginLeft: 10,
    marginTop: 22.5,
    marginRight: 12,
    marginBottom: 20,
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
