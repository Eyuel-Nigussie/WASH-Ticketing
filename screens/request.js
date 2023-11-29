import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RequestTicketScreen = () => {
  const navigation = useNavigation();
  const [selectedIssue, setSelectedIssue] = useState('');
  const [specifyIssue, setSpecifyIssue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleRequest = () => {
    // Handle ticket request logic
  };

  const renderDropdownOptions = () => {
    return (
      <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          onPress={() => {
            setSelectedIssue('issue1');
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 15 }}>Issue 1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          onPress={() => {
            setSelectedIssue('issue2');
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 15 }}>Issue 2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#DDDDDD"
          onPress={() => {
            setSelectedIssue('other');
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 15 }}>Other</Text>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
      <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', marginBottom: 20 }}>Request Ticket</Text>

      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8, width: 300 }}>
        <Text style={{ fontSize: 18, color: 'blue', marginBottom: 10 }}>Issue Name</Text>

        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: 'blue', borderRadius: 5, padding: 10 }}
          onPress={() => setModalVisible(true)}
        >
          <Text>{selectedIssue ? selectedIssue : 'Select an issue'}</Text>
        </TouchableOpacity>

        <Modal animationType="slide" transparent={false} visible={modalVisible} onRequestClose={() => {}}>
          <View style={{ marginTop: 22 }}>
            <View>
              {renderDropdownOptions()}
              <TouchableHighlight
                underlayColor="#DDDDDD"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{ fontSize: 18, color: 'blue', textAlign: 'right', marginRight: 20 }}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {selectedIssue === 'other' && (
          <TextInput
            style={{ borderWidth: 1, borderColor: 'blue', borderRadius: 5, padding: 10, marginTop: 10 }}
            placeholder="Specify Issue"
            value={specifyIssue}
            onChangeText={(text) => setSpecifyIssue(text)}
          />
        )}

        <Text style={{ fontSize: 18, color: 'blue', marginTop: 10 }}>Description</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'blue', borderRadius: 5, padding: 10, marginTop: 5, height: 80 }}
          placeholder="Description"
          multiline
          numberOfLines={4}
        />

        <Text style={{ fontSize: 18, color: 'blue', marginTop: 10 }}>Location</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'blue', borderRadius: 5, padding: 10, marginTop: 5 }}
          placeholder="Location"
        />

        <TouchableOpacity
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 5, marginTop: 15 }}
          onPress={handleRequest}
        >
          <Text style={{ color: 'blue', textAlign: 'center' }}>Submit Request</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ backgroundColor: 'white', padding: 10, borderRadius: 5, marginTop: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: 'blue', textAlign: 'center' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestTicketScreen;
