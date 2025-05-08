import {StyleSheet, Text, View, Title} from 'react-native';
import React from 'react';

const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>Welcome</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '900',
    marginBottom: 20,
    marginBlock: 30,
  },
});
