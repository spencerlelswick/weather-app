import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const images = {
  backgrounds: {
    sunny: require('../assets/day-sky.png'),
  },
};

const CurrentWeather = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.backgrounds.sunny}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>
          {props.currentWeather.condition.temperature}{' '}
        </Text>
      </ImageBackground>
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
