<<<<<<< HEAD
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput} from '../../components/component2';

const transactions = [
  {
    id: 1,
    date: '17 April 2025',
    name: 'Name Wallet',
    amount: 10000000,
    type: 'credit',
  },
  {
    id: 2,
    date: '18 April 2025',
    name: 'Name Shop',
    amount: -20900000,
    type: 'debit',
  },
  {
    id: 3,
    date: '19 April 2025',
    name: 'Name Wallet',
    amount: 300000,
    type: 'credit',
  },
  {
    id: 4,
    date: '20 April 2025',
    name: 'Name Shop',
    amount: -3000000,
    type: 'debit',
  },
  {
    id: 5,
    date: '21 April 2025',
    name: 'Name Shop',
    amount: -3000000,
    type: 'debit',
  },
  {
    id: 6,
    date: '22 April 2025',
    name: 'Name Wallet',
    amount: 10000000,
    type: 'credit',
  },
];

const formatCurrency = num => {
  const str = Math.abs(num).toLocaleString('id-ID');
  return (num < 0 ? '-' : '+') + 'Rp. ' + str + ',00';
};

const Bills = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Bills</Text>
      </View>

      {/* Input Type */}
      <Text style={styles.label}>Type</Text>
      <TextInput
        style={styles.input}
        placeholder="Debit / Credit"
        placeholderTextColor="#8D92A3"
      />

      {/* Transactions */}
      <Text style={styles.transactionLabel}>Last Transactions</Text>
      <ScrollView style={{flex: 1}}>
        {transactions.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <Text
              style={[
                styles.amount,
                {color: item.type === 'credit' ? 'green' : 'red'},
              ]}>
              {formatCurrency(item.amount)}
            </Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bills;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
    width: 44,
    height: 24,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  label: {
    fontWeight: '400',
    fontSize: 16,
    width: 39,
    height: 24,
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
    marginBottom: 20,
  },
  transactionLabel: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Poppins-Medium',
    width: 159,
    height: 30,
    color: '#020202',
  },
  card: {
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
  },
  date: {
    color: '#8D92A3',
    marginBottom: 5,
    fontFamily: 'Poppins-Medium',
    fontWeight: 400,
    width: 85,
    height: 21,
  },
  name: {
    fontSize: 14,
    fontWeight: 400,
    height: 21,
    width: 90,
    fontFamily: 'Poppins-Medium',
  },
  amount: {
    fontSize: 14,
    fontWeight: '700',
    position: 'absolute',
    right: 15,
    top: 30,
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveText: {
    color: '#020202',
    fontSize: 14,
    fontWeight: '500',
    width: 35,
    height: 21,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
=======
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput} from '../../components/component2';

const transactions = [
  {
    id: 1,
    date: '17 April 2025',
    name: 'Name Wallet',
    amount: 10000000,
    type: 'credit',
  },
  {
    id: 2,
    date: '18 April 2025',
    name: 'Name Shop',
    amount: -20900000,
    type: 'debit',
  },
  {
    id: 3,
    date: '19 April 2025',
    name: 'Name Wallet',
    amount: 300000,
    type: 'credit',
  },
  {
    id: 4,
    date: '20 April 2025',
    name: 'Name Shop',
    amount: -3000000,
    type: 'debit',
  },
  {
    id: 5,
    date: '21 April 2025',
    name: 'Name Shop',
    amount: -3000000,
    type: 'debit',
  },
  {
    id: 6,
    date: '22 April 2025',
    name: 'Name Wallet',
    amount: 10000000,
    type: 'credit',
  },
];

const formatCurrency = num => {
  const str = Math.abs(num).toLocaleString('id-ID');
  return (num < 0 ? '-' : '+') + 'Rp. ' + str + ',00';
};

const Bills = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Bills</Text>
      </View>

      {/* Input Type */}
      <Text style={styles.label}>Type</Text>
      <TextInput
        style={styles.input}
        placeholder="Debit / Credit"
        placeholderTextColor="#8D92A3"
      />

      {/* Transactions */}
      <Text style={styles.transactionLabel}>Last Transactions</Text>
      <ScrollView style={{flex: 1}}>
        {transactions.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <Text
              style={[
                styles.amount,
                {color: item.type === 'credit' ? 'green' : 'red'},
              ]}>
              {formatCurrency(item.amount)}
            </Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bills;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
    width: 44,
    height: 24,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  label: {
    fontWeight: '400',
    fontSize: 16,
    width: 39,
    height: 24,
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
    marginBottom: 20,
  },
  transactionLabel: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Poppins-Medium',
    width: 159,
    height: 30,
    color: '#020202',
  },
  card: {
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
  },
  date: {
    color: '#8D92A3',
    marginBottom: 5,
    fontFamily: 'Poppins-Medium',
    fontWeight: 400,
    width: 85,
    height: 21,
  },
  name: {
    fontSize: 14,
    fontWeight: 400,
    height: 21,
    width: 90,
    fontFamily: 'Poppins-Medium',
  },
  amount: {
    fontSize: 14,
    fontWeight: '700',
    position: 'absolute',
    right: 15,
    top: 30,
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveText: {
    color: '#020202',
    fontSize: 14,
    fontWeight: '500',
    width: 35,
    height: 21,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
>>>>>>> eb91c11 (pesan commit pertama)
