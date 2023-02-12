import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.locationData.timezone_id}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
