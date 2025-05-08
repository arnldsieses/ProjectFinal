<<<<<<< HEAD
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap} from '../../components/component1';
import {Header, TextInput} from '../../components/component2';
// import {NullPhoto} from '../../assets';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Sign Up" />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <TextInput label="Name" placeholder="Type your full name" />
        <Gap height={10} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={10} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          label="Continue"
          onPress={() => navigation.navigate('SignIn')}
          color="#0384EE"
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
});
=======
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap} from '../../components/component1';
import {Header, TextInput} from '../../components/component2';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const auth = getAuth();
    const db = getDatabase();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid), {
          Name: Name,
          email: email,
        });
        showMessage({
          message: 'Registration success',
          type: 'success',
        });
        navigation.navigate('SignIn');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Sign Up" />
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <TextInput
          label="Name"
          placeholder="Type your full name"
          onChangeText={e => setName(e)}
          placeholderTextColor="#8D92A3"
        />
        <Gap height={10} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          onChangeText={e => setEmail(e)}
          placeholderTextColor="#8D92A3"
        />
        <Gap height={10} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
          placeholderTextColor="#8D92A3"
        />
        <Gap height={24} />
        <Button label="Continue" color="#0384EE" />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  profileContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  addPhoto: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },
});
>>>>>>> eb91c11 (pesan commit pertama)
