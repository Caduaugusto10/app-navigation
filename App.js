import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mago Elétrico</Text>
      <Image source={require("./assets/image.jpg")} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',

  },
  image: {
    width: 700,
    height: 500, 
    margin: 20,
  },
  header:{
    display: 'flex',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'lightblue',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});