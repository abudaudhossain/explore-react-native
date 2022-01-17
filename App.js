import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>My first App</Text>
      <Button title='facebook' onPress={()=>Linking.openURL("https://www.facebook.com")}></Button>
     </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 10,
  },
  

})
