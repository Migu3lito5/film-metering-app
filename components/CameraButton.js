import { Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const CameraButton = () => {

  const { navigate } = useNavigation();

  return (
    <Pressable style={styles.button} onPress={()=>navigate("Camera")}>
      <Text style={styles.text}>Camera</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 100,
    paddingVertical: 18,
    borderRadius: 20 ,
    elevation: 3,
    backgroundColor: '#61735B', 
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    
  }
});

export default CameraButton;