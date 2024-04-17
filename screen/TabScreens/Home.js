import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View,DeviceEventEmitter, Image} from "react-native";
import CameraButton from "../../components/CameraButton";


const Home = () => {
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener('photoCaptured', photoData => {
      setCapturedPhoto(photoData);
      console.log(photoData.exif)
    });
    return () => {
      subscription.remove();
    }
  })

  return(
    <SafeAreaView style={styles.container}>
      {capturedPhoto && (
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: capturedPhoto.uri }} />
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

  },
  imageContainer: {
    position: "absolute",
    top: 40,
    left: 10,
    right: 10,
    borderRadius: 30,
    overflow: 'hidden',

  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  }
});

export default Home;