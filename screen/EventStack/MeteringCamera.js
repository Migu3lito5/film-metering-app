import { StyleSheet, Text, View} from "react-native";
import { useState, useRef, useEffect} from "react";
import { Camera, CameraType, requestCameraPermissionsAsync } from "expo-camera";

const MeteringCamera = () => {
    const [type, setType] = useState(CameraType.back);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    
    useEffect(() => {
      ( async () => {
        const {status} = await requestCameraPermissionsAsync();
        setHasCameraPermission(status === 'granted');
      })();
    }, []);

    const toggleCamera = () => {
      setType( (current) => (
        current === CameraType.back ? CameraType.front : CameraType.back
      ));
    }

    if (hasCameraPermission === null) {
      return <View><Text>Requesting camera permission...</Text></View>;
    }
    if (hasCameraPermission === false) {
      return <View><Text>No access to camera</Text></View>;
    }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
      </Camera>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  camera: {
    height: "100%",
    
  }
});

export default MeteringCamera;