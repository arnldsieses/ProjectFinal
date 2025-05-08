<<<<<<< HEAD
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap} from '../../components/component1';
import {Header, TextInput} from '../../components/component2';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          label="Sign In"
          color="#0384EE"
          onPress={() => navigation.navigate('PaymobileScreen')}
        />
        <Gap height={12} />
        <Button
          label="Create New Account"
          color="#2A2A2A"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});
=======
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap} from '../../components/component1';
import {Header, TextInput} from '../../components/component2';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          placeholderTextColor="#8D92A3"
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
          placeholderTextColor="#8D92A3"
        />
        <Gap height={24} />
        <Button
          label="Sign In"
          color="#0384EE"
          onPress={() => navigation.navigate('Home')}
        />
        <Gap height={12} />
        <Button
          label="Create New Account"
          color="#2A2A2A"
          textColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});
>>>>>>> eb91c11 (pesan commit pertama)
