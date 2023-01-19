import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Button from '../components/Button';

const Welcome = ({navigation}) => {
  const goMemberSign = () => {
    navigation.navigate('Member Sign');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gym Legend</Text>
      <Button text="Register" onPress={goMemberSign} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'black',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Welcome;
