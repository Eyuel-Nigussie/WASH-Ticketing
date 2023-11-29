import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    status: 'Pending',
    details: 'Issue 1 - Description of the first issue.',
  },
  {
    id: '2',
    status: 'Completed',
    details: 'Issue 2 - Description of the second issue.',
  },
  {
    id: '3',
    status: 'InProgress',
    details: 'Issue 3 - Description of the third issue.',
  },
  // Add more data items as needed
];

const MyRequestsScreen = ({ navigation }) => {
  const renderRequestItem = ({ item }) => {
    let statusColor = '#4CAF50';
    if (item.status === 'Pending') {
      statusColor = '#FFC107'; 
    } else if (item.status === 'Completed') {
      statusColor = '#4CAF50'; 
    } else if (item.status === 'InProgress') {
      statusColor = '#FF5733'; 
    }

    return (
      <TouchableOpacity
        style={[styles.requestItem, { borderLeftColor: statusColor }]}
        onPress={() => navigation.navigate('RequestDetail', { request: item })}
      >
        <Text style={styles.requestNumber}>Request {item.id}</Text>
        <Text>{item.details}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderRequestItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
  },
  list: {
    width: '100%',
    padding: 16,
  },
  requestItem: {
    backgroundColor: '#FFF',
    padding: 16,
    paddingLeft: 24, // Added left padding
    marginBottom: 16,
    borderRadius: 8,
    borderLeftWidth: 12,
  },
  requestNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default MyRequestsScreen;
