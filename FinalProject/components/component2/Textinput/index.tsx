<<<<<<< HEAD
import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 10,
    padding: 13,
  },
});
=======
import {StyleSheet, Text, View, TextInput as RNTextInput} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, secureTextEntry, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 10,
    padding: 13,
    color: 'black',
  },
});
>>>>>>> eb91c11 (pesan commit pertama)
