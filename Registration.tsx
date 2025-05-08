import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from './Registration/TextInput';
import Button from './Registration/Button';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <Input label="Name" placeholder="Masukan nama lengkap anda" />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Email" placeholder="Masukan email anda" />
      <Input label="Address" placeholder="Masukan alamat anda" />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        keyboardType="numeric"
      />
      <Button label="Registar" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '900',
    marginBottom: 15,
    marginBlock: 5,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'purple',
    padding: 5,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
