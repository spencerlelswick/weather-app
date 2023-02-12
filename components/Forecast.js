import moment from 'moment/moment';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Item = (props) => (
  <View style={styles.item}>
    <Text>{props.forecast.day}</Text>
    <Text>{moment.unix(props.forecast.date).format('M/DD')}</Text>
    <Text>
      {props.forecast.low} - {props.forecast.high}
    </Text>
    <Text>{props.forecast.text}</Text>
  </View>
);

const Forecast = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Forecast</Text>
      <FlatList
        horizontal={true}
        style={styles.content}
        data={props.forecast}
        renderItem={({ item }) => <Item forecast={item} />}
      />
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  item: {
    padding: 5,
    width: 100,
  },
  title: {
    fontSize: 28,
  },
});
