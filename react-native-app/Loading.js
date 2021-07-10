import React from "react";
import {StyleSheet, Text, View} from 'react-native';


const Loading = () => {
  return <View style={styles.container}>
   <Text style={styles.text}>Getting the Fuckingss Weather</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f6e58d",
    justifyContent:"flex-end",
    paddingVertical:100
  },
  text :{
    color:"#1e272e",
    textAlign:"center",
    fontSize:20
  }
})

export default Loading;