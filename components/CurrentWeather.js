import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const img = {
  images: {
    sunny: require('../assets/day-sky.png'),
    sunIcon: require('../assets/sun.png'),
  },
};

const CurrentWeather = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={img.images.sunny}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ borderRadius: 6 }}
      >
        <View style={styles.tempWrapper}>
          <View style={styles.tempContainer}>
            <Text style={styles.tempText}>
              {props.currentWeather.condition.temperature}°
            </Text>

            <Text style={styles.descText}>
              {props.currentWeather.condition.text}
            </Text>
            <View style={styles.lowHigh}>
              <Text style={styles.descText}>Low: {props.todayWeather.low}</Text>
              <Text style={styles.descText}>
                High: {props.todayWeather.high}
              </Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image source={img.images.sunIcon} style={styles.icon}></Image>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  tempWrapper: {
    flexDirection: 'row',
    height: '100%',
    padding: 10,
  },
  tempContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  icon: {
    width: 100,
    height: 100,

    alignSelf: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  tempText: {
    color: 'white',
    fontSize: 56,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 0, height: 0.1 },
    textShadowRadius: 10,
  },
  descText: {
    color: 'black',
    fontSize: 18,
  },
  lowHigh: {},
});
