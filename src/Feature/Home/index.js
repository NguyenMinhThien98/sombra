import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../until';
import { useHomeFacde } from './hook';

const Home = () => {
  const {count, onIncrement, ondDecrement, saveToStorage, removefromStorage} = useHomeFacde();
  return (
    <View style={styles.container}>
      <Text>{`${count}`}</Text>
      <TouchableOpacity style={styles.boxbutton} onPress={onIncrement}>
        <Text style={styles.txtButton}>increse</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boxbutton} onPress={ondDecrement}>
        <Text style={styles.txtButton}>decrese</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boxbutton} onPress={saveToStorage.bind(this, count)}>
        <Text style={styles.txtButton}>SAVE TO STORAGE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boxbutton} onPress={removefromStorage}>
        <Text style={styles.txtButton}>REMOVE TO STORAGE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxbutton: {
    width: responsiveWidth(150),
    height: responsiveHeight(70),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderWidth: 1,
    margin: 10,
  },

  txtButton: {
    fontSize: responsiveHeight(18),
    color: '#ffff',
  },

  txtHeader: {
    fontSize: responsiveHeight(24)
  }
});

export default Home;
