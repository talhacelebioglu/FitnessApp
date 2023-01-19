import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MemberDetails = ({route}) => {
  const {user} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.info}>Registration Successful!</Text>
      <View style={styles.card}>
        <Text style={styles.label}>
          Name: <Text style={styles.personal}>{user.name}</Text>
        </Text>
        <Text style={styles.label}>
          Surname: <Text style={styles.personal}>{user.surname}</Text>
        </Text>
        <Text style={styles.label}>
          Age: <Text style={styles.personal}>{user.age}</Text>
        </Text>
        <Text style={styles.label}>
          Phone: <Text style={styles.personal}>{user.phone}</Text>
        </Text>
        <Text style={styles.label}>
          Email: <Text style={styles.personal}>{user.mail}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  card: {
    justifyContent: 'center',
    padding: 10,
    marginTop: 30,
    width: '100%',
    height: 300,
    borderRadius: 15,
    shadowColor: '#171717',
    elevation: 20,
    backgroundColor: 'white',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 8,
    color: 'black',
  },
  personal: {
    color: 'grey',
    fontWeight: '500',
  },
  info: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 27,
  },
});

export default MemberDetails;
