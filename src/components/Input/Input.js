import {View, Text, TextInput} from 'react-native';
import React from 'react';

import styles from './Input.styles';

const Input = ({label, placeholder, onChangeText, keyboardType}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Input;
