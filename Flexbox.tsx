import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer}></View>
      <View style={styles.greenContainer}></View>
      <View style={styles.blueContainer}></View>
      <View style={styles.grayContainer}></View>
      <View style={styles.pinkContainer}></View>
      <View style={styles.yellowContainer}></View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redContainer: {
    backgroundColor: 'red',
    height: 100,
    width: 360,
    justifyContent: 'space-evenly',
    columnGap: 1,
    flexDirection: 'row',
  },
  greenContainer: {
    backgroundColor: 'green',
    height: 100,
    width: 360,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  blueContainer: {
    backgroundColor: 'blue',
    height: 100,
    width: 360,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  grayContainer: {
    backgroundColor: 'grey',
    height: 100,
    width: 360,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pinkContainer: {
    backgroundColor: 'pink',
    height: 100,
    width: 360,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  yellowContainer: {
    backgroundColor: 'yellow',
    height: 100,
    width: 360,
  },
  text: {
    fontWeight: 900,
    fontSize: 50,
    textAlign: 'center',
    padding: 15,
    color: 'white',
  },
});
