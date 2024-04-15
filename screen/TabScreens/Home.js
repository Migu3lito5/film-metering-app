import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, DeviceEventEmitter} from "react-native";
import CameraButton from "../../components/CameraButton";


const Home = () => {
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener('photoCaptured', photoData => {
      console.log("Image from Home: ", photoData);
      setCapturedPhoto(photoData);
    });
    return () => {
      subscription.remove();
    }
  })

  return(
    <SafeAreaView style={styles.container}>
      <Text>Home!</Text>
      <Text>HI</Text>
      {capturedPhoto && (
                <View>
                    <Text>Image URI: {capturedPhoto.uri}</Text>
                    <Text>Width: {capturedPhoto.width}</Text>
                    <Text>Height: {capturedPhoto.height}</Text>
                </View>
            )}
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