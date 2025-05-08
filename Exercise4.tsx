import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Flexbox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.blackContainer}></View>
        <View style={styles.yellowContainer}></View>
        <View style={styles.black1Container}></View>
      </View>
      <View>
        <Image style={styles.img1} source={require('./logo/img/unklab.png')} />
      </View>
      <View style={styles.container1}>
        <View style={styles.blackContainer}></View>
        <View style={styles.yellowContainer}></View>
        <View style={styles.black1Container}></View>
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 0.0,
    flexDirection: 'row',
    columnGap: '5%',
    alignContent: 'flex-start',
    padding: 20,
  },
  container1: {
    backgroundColor: 'blue',
    flex: 0.0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 20,
  },
  blackContainer: {
    backgroundColor: 'black',
    height: 70,
    width: 70,
  },
  yellowContainer: {
    backgroundColor: 'yellow',
    height: 70,
    width: 70,
  },
  black1Container: {
    backgroundColor: 'black',
    height: 70,
    width: 70,
  },
  img1: {
    height: 360,
    width: 350,
    margin: 10,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});
