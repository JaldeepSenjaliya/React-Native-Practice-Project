import react  from "react";
import { SafeAreaView, Text } from "react-native";

const MyInfo = (props) => {
    return(
        <SafeAreaView style= {{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>My Info Screen</Text> 
        </SafeAreaView>
    );
};

export default MyInfo