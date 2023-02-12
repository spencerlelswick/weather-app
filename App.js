import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Header from './components/Header';

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({
    location: {
      city: 'Louisville-TEST',
      woeid: 2442327,
      country: 'United States',
      lat: 38.25486,
      long: -85.766403,
      timezone_id: 'America/Kentucky/Louisville',
    },
    current_observation: {
      pubDate: 1676146112,
      wind: {
        chill: 54,
        direction: 'NE',
        speed: 4,
      },
      atmosphere: {
        humidity: 38,
        visibility: 11,
        pressure: 1027.4,
      },
      astronomy: {
        sunrise: '7:38 AM',
        sunset: '6:17 PM',
      },
      condition: {
        temperature: 47,
        text: 'Fair',
      },
    },
    forecasts: [
      {
        day: 'Sat',
        date: 1676131200,
        high: 49,
        low: 30,
        text: 'Mostly Sunny',
        code: 34,
      },
      {
        day: 'Sun',
        date: 1676217600,
        high: 55,
        low: 32,
        text: 'Sunny',
        code: 32,
      },
      {
        day: 'Mon',
        date: 1676304000,
        high: 58,
        low: 34,
        text: 'Partly Cloudy',
        code: 30,
      },
      {
        day: 'Tue',
        date: 1676390400,
        high: 56,
        low: 53,
        text: 'Showers',
        code: 11,
      },
      {
        day: 'Wed',
        date: 1676476800,
        high: 72,
        low: 57,
        text: 'Mostly Cloudy',
        code: 28,
      },
      {
        day: 'Thu',
        date: 1676563200,
        high: 66,
        low: 31,
        text: 'Thunderstorms',
        code: 4,
      },
      {
        day: 'Fri',
        date: 1676649600,
        high: 42,
        low: 28,
        text: 'Partly Cloudy',
        code: 30,
      },
      {
        day: 'Sat',
        date: 1676736000,
        high: 44,
        low: 36,
        text: 'Sunny',
        code: 32,
      },
      {
        day: 'Sun',
        date: 1676822400,
        high: 55,
        low: 49,
        text: 'Partly Cloudy',
        code: 30,
      },
      {
        day: 'Mon',
        date: 1676908800,
        high: 60,
        low: 44,
        text: 'Mostly Cloudy',
        code: 28,
      },
      {
        day: 'Tue',
        date: 1676995200,
        high: 58,
        low: 39,
        text: 'Mostly Cloudy',
        code: 28,
      },
    ],
  });

  const getWeather = async () => {
    try {
      // const response = await fetch(
      //   'https://yahoo-weather5.p.rapidapi.com/weather?location=louisville&format=json&u=f',
      //   {
      //     method: 'GET',
      //     headers: {
      //       'X-RapidAPI-Key':
      //         '1db9f864fcmsh1b3571d28be05c8p15f830jsn36c594a513f5',
      //       'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
      //     },
      //   }
      // );
      // const json = await response.json();

      const json = require('./mock/mock-weather-data.json');
      console.log(json);

      setWeatherData(json);
      console.log(weatherData);
    } catch (error) {
      console.log('failed to get weather data.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Header locationData={weatherData.location}></Header>
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <View style={styles.card}>
              <CurrentWeather
                currentWeather={weatherData.current_observation}
                todayWeather={weatherData.forecasts[0]}
              ></CurrentWeather>
            </View>
            <View style={styles.card}>
              <Forecast forecast={weatherData.forecasts}></Forecast>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#7FBEF7',
    alignContent: 'center',
  },
  container: {
    width: '100%',
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#6fa8dc',
    height: 100,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 30,
  },
  card: {
    backgroundColor: '#FFF',
    height: 150,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
  },
});
