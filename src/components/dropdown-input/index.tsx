import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

interface DropdownProps {
  label: string;
  placeholder: string;
  options: string[];
  onSelect: (value: string) => void;
}

export default function DropdownInput({ label, placeholder, options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (item: string) => {
    setSelectedValue(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      
      <TouchableOpacity 
        style={styles.inputContainer} 
        activeOpacity={0.8}
        onPress={() => setIsOpen(!isOpen)}
      >
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={selectedValue}
          editable={false}
          pointerEvents="none"
        />
        <Ionicons 
          name={isOpen ? 'chevron-up' : 'chevron-down'} 
          size={20} 
          color="black" 
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.drawer}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            nestedScrollEnabled={true}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.optionItem} 
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}