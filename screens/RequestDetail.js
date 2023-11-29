import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RequestDetailScreen = ({ route }) => {
  const { request } = route.params;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#FFC107'; // Yellow for pending
      case 'Completed':
        return '#4CAF50'; // Green for completed
      case 'InProgress':
        return '#FF5733'; // Red for in progress
      default:
        return '#757575'; // Gray for other statuses
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Details</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Issue Name:</Text>
        <Text style={styles.value}>{request.issueName}xxxxxxxxxxxx</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{request.description}xx xxx xxxxxxxxxx xxx xxxxx xxx xxxxxx xxxx xx xxx xxxxx xxxxx xxxx xxxx xxxx xxx xxx x xxx  xxxx xxxx xxxx xx</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{request.location}kebele xx xxxx xxx xx x xx x</Text>
      </View>
      <View style={[styles.detailContainer, { backgroundColor: getStatusColor(request.status) }]}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{request.status}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Level:</Text>
        <Text style={styles.value}>{request.level}Level 3 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
  },
  detailContainer: {
    width: '100%',
    backgroundColor: '#e1e5eb',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
  },
});

export default RequestDetailScreen;
