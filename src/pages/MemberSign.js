import {StyleSheet, View, Alert} from 'react-native';
import React, {useState} from 'react';

import Input from '../components/Input';
import Button from '../components/Button';

const MemberSign = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmit = () => {
    if (!name || !surname || !age || !phone || !mail) {
      Alert.alert('Gym Legend', 'All boxes must be filled!');
      return;
    }
    const user = {
      name,
      surname,
      age,
      phone,
      mail,
    };

    navigation.navigate('Member Details', {user});
  };

  return (
    <View style={styles.container}>
      <Input
        label="Name"
        placeholder="Enter your name"
        onChangeText={setName}
      />
      <Input
        label="Surname"
        placeholder="Enter your surname"
        onChangeText={setSurname}
      />
      <Input
        keyboardType="number-pad"
        label="Age"
        placeholder="Enter your age"
        onChangeText={setAge}
      />
      <Input
        keyboardType="phone-pad"
        label="Phone"
        placeholder="Enter your phone"
        onChangeText={setPhone}
      />
      <Input
        keyboardType="email-address"
        label="Email"
        placeholder="Enter your email"
        onChangeText={setMail}
      />
      <View style={styles.button}>
        <Button text="Complete the Registration" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    // justifyContent: 'center',
    // flex: 1,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default MemberSign;
