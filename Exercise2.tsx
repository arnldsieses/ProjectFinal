import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';

const BioData = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./logo/img/ando.jpg')} style={styles.image} />
      <Text style={styles.name}>Data Pribadi</Text>

      <View style={styles.text1}>
        <Text style={styles.text}> Nama: Repasi, Arnold</Text>
        <Text style={styles.text}> Tanggal Lahir: 21 Februari 2005</Text>
        <Text style={styles.text}> Alamat: Universitas Klabat</Text>
        <Text style={styles.text}> Nomor Telepon: 0813****8204</Text>
        <Text style={styles.text}> Jenis Kelamin: Laki-laki</Text>
        <Text style={styles.text}> Agama: Kristen Advent</Text>
        <Text style={styles.text}> Email: s22210645@student.unklab.ac.id</Text>
        <Text style={styles.text}> Status: Mahasiswa</Text>
        <Text style={styles.hobi}> Pendidikan</Text>
        <Text style={styles.text}> SD Advent Doyo Baru</Text>
        <Text style={styles.text}> SMP Advent Doyo Baru</Text>
        <Text style={styles.text}> SMA Advent Purwodadi (SLAPUR)</Text>
        <Text style={styles.text}> UNIVERSITAS KLABAT</Text>
        <Text style={styles.hobi}> Hobi</Text>
        <Text style={styles.text}>🏀 Bermain Basket</Text>
        <Text style={styles.text}>📷 Photography</Text>
        <Text style={styles.text}>✈️ Traveling</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  text1: {
    padding: 15,
    marginBottom: 10,
  },
  hobi: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 16,
    marginBottom: 2,
    color: 'white',
    textAlign: 'left',
  },
});

export default BioData;
