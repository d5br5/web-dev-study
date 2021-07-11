import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import {Alert} from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "beb1ae16d085b2749606759218614c26";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    const {data : {main: {temp}, weather}} = await axios.get(url);
    this.setState({isLoading: false, temp, condition:weather[0].main});

  }

  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      const weather = await this.getWeather(latitude, longitude);
      this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state;

    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

