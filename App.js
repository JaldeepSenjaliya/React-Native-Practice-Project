
//Make sure this stays at the very top and nothing comes before
//import 'react-native-gesture-handler';

import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, Alert, StatusBar, Platform} from 'react-native';



export default function App() {

  const handlePress = () => console.log("Text Pressed!");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
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