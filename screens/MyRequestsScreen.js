import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    status: 'Pending',
    details: 'Issue 1 - Description of the first issue.',
    type: 'Water', // Add the 'type' property to your data
  },
  {
    id: '2',
    status: 'Completed',
    details: 'Issue 2 - Description of the second issue.',
    type: 'Sanitation',
  },
  {
    id: '3',
    status: 'InProgress',
    details: 'Issue 3 - Description of the third issue.',
    type: 'Water',
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

    let badgeColor = '#2196F3'; // Default color
    if (item.type === 'Water') {
      badgeColor = '#03A9F4'; // Water type color
    } else if (item.type === 'Sanitation') {
      badgeColor = '#FF9800'; // Sanitation type color
    }

    return (
      <TouchableOpacity
        style={[styles.requestItem, { borderLeftColor: statusColor }]}
        onPress={() => navigation.navigate('RequestDetail', { request: item })}
      >
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={styles.badgeText}>{item.type}</Text>
        </View>
        <Text style={styles.requestNumber}>Request {item.id}</Text>
        <Text></Text>
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
    flexDirection: 'row', // Align badge and text in a row
    position: 'relative', // Added relative positioning
  },
  badge: {
    paddingHorizontal: 8, // Adjusted padding
    paddingVertical: 2, // Adjusted padding
    borderRadius: 8,
    marginRight: 8,
    position: 'absolute', // Positioned absolutely
    top: 8, // Positioned from top
    right: 8, // Positioned from right
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12, // Adjusted font size
  },
  requestNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default MyRequestsScreen;
