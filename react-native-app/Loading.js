import React from "react";
import {StyleSheet, Text, View, StatusBar} from 'react-native';


const Loading = () => {
  return <View style={styles.container}>
    <StatusBar barStyle="dark-content"/>
   <Text style={styles.text}>Getting the Fucking Weather</Text>
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