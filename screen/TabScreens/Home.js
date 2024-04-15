import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button} from "react-native";
import CameraButton from "../../components/CameraButton";


const Home = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Text>Home!</Text>
      <Text>HI</Text>
      <View style={styles.buttonContainer}>
        <CameraButton/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 75,
  },
  container: {
    flex: 1,
    alignItems: "center",
  }
});

export default Home;