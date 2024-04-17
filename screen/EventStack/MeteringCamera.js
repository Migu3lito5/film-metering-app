import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { useState, useRef, useEffect} from "react";
import { Camera, CameraType, requestCameraPermissionsAsync } from "expo-camera";
import { DeviceEventEmitter } from 'react-native';

const MeteringCamera = () => {
    const [type, setType] = useState(CameraType.back);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const cameraRef = useRef(null);
    
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

    const handleTakingPicture = async () => {
      if (!cameraRef.current) {
        console.error("Camera reference not available");
        return;
      }
      try {
        const photoData = await cameraRef.current.takePictureAsync();
       // console.log("Image captured:", photoData);
        DeviceEventEmitter.emit('photoCaptured', photoData)
      } catch (error) {
        console.error("Failed to capture image:", error);
      }
    };


    if (hasCameraPermission === null) {
      return <View><Text>Requesting camera permission...</Text></View>;
    }
    if (hasCameraPermission === false) {
      return <View><Text>No access to camera</Text></View>;
    }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} autoFocus={true} ref={cameraRef}/>
      <TouchableOpacity style={styles.captureContainer} onPress={handleTakingPicture}>
        <View style={styles.captureBorder}>
          <View style={styles.captureButton} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  camera: {
    height: "100%",
  },
  captureContainer: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    alignItems: "center",
  },
  captureButton: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "white",
    borderStyle: "solid",
    borderColor: "black`",
    borderWidth: 2,
  },
  captureBorder: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center", // Center the child vertically
    alignItems: "center", 
  }
});

export default MeteringCamera;

