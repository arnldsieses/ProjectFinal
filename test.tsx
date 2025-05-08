import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Button, Gap} from './src/components/atoms';
import {Header, TextInput} from './src/components/moleculs';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Sign Up</Text>
        <Gap height={40} />

        <Text style={styles.label}>Name</Text>
        <TextInput
          label=""
          placeholder="Type your Full Name"
          placeholderTextColor="#8D92A3"
        />
        <Gap height={16} />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          label=""
          placeholder="Type your email address"
          placeholderTextColor="#8D92A3"
        />
        <Gap height={16} />

        <Text style={styles.label}>Password</Text>
        <TextInput
          label=""
          placeholder="Type your password"
          placeholderTextColor="#8D92A3"
          secureTextEntry
        />
        <Gap height={30} />

        <Button
          label="Create New Account"
          onPress={() => navigation.navigate('Home')}
          color="#222222"
          textColor="#FFFFFF"
        />
        <Gap height={12} />
        <Button
          label="Sign In"
          onPress={() => navigation.navigate('SignIn')}
          color="#0384EE"
          textColor="#FFFFFF"
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 8,
  },
});
