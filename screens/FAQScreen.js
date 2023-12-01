import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/FontAwesome';

const FAQScreen = () => {
  const [expanded, setExpanded] = useState({});

  const data = [
    { question: 'How to report an Issue?', answer: 'To report an issue you frist have to go signin after that navigate to the request page and specify or the requested .' },
    { question: 'How to see the status of my request?', answer: 'As always you have to sign in to your account' },
    // Add more FAQ items as needed
  ];

  const toggleAccordion = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderFAQItem = ({ item, index }) => (
    <View style={{ marginBottom: 10 }}>
      <TouchableOpacity
        onPress={() => toggleAccordion(index)}
        style={{
          backgroundColor: '#003366',
          padding: 16,
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#FFF', fontSize: 16 }}>{item.question}</Text>
        <Icon name={expanded[index] ? 'chevron-up' : 'chevron-down'} size={18} color="#FFF" />
      </TouchableOpacity>

      <Collapsible collapsed={!expanded[index]}>
        <View style={{ padding: 16, backgroundColor: '#F2F2F2', borderRadius: 8 }}>
          <Text style={{ color: '#003366', fontSize: 16 }}>{item.answer}</Text>
        </View>
      </Collapsible>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#F2F2F2' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#003366', marginBottom: 20 }}>
        FAQ
      </Text>

      <FlatList
        data={data}
        renderItem={renderFAQItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FAQScreen;
