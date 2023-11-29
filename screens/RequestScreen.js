import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const RequestTicketScreen = () => {
  const navigation = useNavigation();
  const [selectedIssue, setSelectedIssue] = useState('');
  const [specifyIssue, setSpecifyIssue] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleRequest = () => {
    // Handle ticket request logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Ticket</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Issue Name</Text>
        <Picker
          selectedValue={selectedIssue}
          onValueChange={(itemValue) => setSelectedIssue(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select an issue" value="" />
          <Picker.Item label="Issue 1" value="issue1" />
          <Picker.Item label="Issue 2" value="issue2" />
          <Picker.Item label="Other" value="other" />
        </Picker>

        {selectedIssue === 'other' && (
          <TextInput
            style={styles.input}
            placeholder="Specify Issue"
            value={specifyIssue}
            onChangeText={(text) => setSpecifyIssue(text)}
          />
        )}

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Description"
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Location</Text>
        <TextInput style={styles.input} placeholder="Location" />

        <Text style={styles.label}>Level</Text>
        <Picker
          selectedValue={selectedLevel}
          onValueChange={(itemValue) => setSelectedLevel(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a level" value="" />
          <Picker.Item label="Level 1" value="level1" />
          <Picker.Item label="Level 2" value="level2" />
          <Picker.Item label="Level 3" value="level3" />
          <Picker.Item label="Level 4" value="level4" />
        </Picker>

        <TouchableOpacity style={styles.submitButton} onPress={handleRequest}>
          <Text style={styles.buttonText}>Submit Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  picker: {
    backgroundColor: '#F2F2F2',
    marginBottom: 16,
    borderRadius: 8,
    height: 50, // Adjust the height as needed
    color: '#000', 
  },
  submitButton: {
    backgroundColor: '#003366',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RequestTicketScreen;
