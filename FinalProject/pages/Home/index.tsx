<<<<<<< HEAD
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {NullPhoto} from '../../assets/image';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const Home = ({navigation}) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const [photoBased64, setPhotoBased64] = useState('');

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64, ${assets.base64}`;
      const source = {uri: base64};
      setPhotoBased64(base64);
      setPhoto(source);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>Paymobile</Text>
          <Text style={styles.userName}>Full Name</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <View style={styles.addPhoto}>
              <TouchableOpacity activeOpacity={0.5} onPress={getImage}>
                <Image source={photo} style={styles.avatar} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Image
          source={{uri: '../../assets/image/download.png'}}
          style={styles.avatar}
        />
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceValue}>Rp. 30,000,000,00</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navIcon}>＋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text
            style={styles.navIcon}
            onPress={() => navigation.navigate('Bills')}>
            ☰
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#020202',
  },
  userName: {
    fontSize: 14,
    color: '#000000',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  balanceCard: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 15,
  },
  balanceValue: {
    fontSize: 20,
    right: 90,
    top: 15,
  },
  buttonRow: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    color: '#020202',
    fontWeight: '500',
    textAlign: 'center',
    padding: 17,
    fontSize: 18,
    backgroundColor: '#0384EE',
    borderRadius: 8,
    width: 116,
    height: 53,
    fontFamily: 'Poppins-Medium',
    top: 430,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 30,
    left: 90,
    right: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  navIcon: {
    fontSize: 24,
    color: '#007AFF',
  },
  profileContainer: {
    marginTop: 5,
    alignItems: 'flex-end',
    left: 120,
  },
  profile: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  addPhoto: {
    backgroundColor: '#F0F0F0',
    width: 70,
    height: 70,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
=======
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {NullPhoto} from '../../assets/image';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const Home = ({navigation}) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const [photoBased64, setPhotoBased64] = useState('');

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64, ${assets.base64}`;
      const source = {uri: base64};
      setPhotoBased64(base64);
      setPhoto(source);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>Paymobile</Text>
          <Text style={styles.userName}>Full Name</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <View style={styles.addPhoto}>
              <TouchableOpacity activeOpacity={0.5} onPress={getImage}>
                <Image source={photo} style={styles.avatar} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Image
          source={{uri: '../../assets/image/download.png'}}
          style={styles.avatar}
        />
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceValue}>Rp. 30,000,000,00</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navIcon}>＋</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text
            style={styles.navIcon}
            onPress={() => navigation.navigate('Bills')}>
            ☰
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#020202',
  },
  userName: {
    fontSize: 14,
    color: '#000000',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  balanceCard: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 15,
  },
  balanceValue: {
    fontSize: 20,
    right: 90,
    top: 15,
  },
  buttonRow: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    color: '#020202',
    fontWeight: '500',
    textAlign: 'center',
    padding: 17,
    fontSize: 18,
    backgroundColor: '#0384EE',
    borderRadius: 8,
    width: 116,
    height: 53,
    fontFamily: 'Poppins-Medium',
    top: 430,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 30,
    left: 90,
    right: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  navIcon: {
    fontSize: 24,
    color: '#007AFF',
  },
  profileContainer: {
    marginTop: 5,
    alignItems: 'flex-end',
    left: 120,
  },
  profile: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  addPhoto: {
    backgroundColor: '#F0F0F0',
    width: 70,
    height: 70,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
>>>>>>> eb91c11 (pesan commit pertama)
