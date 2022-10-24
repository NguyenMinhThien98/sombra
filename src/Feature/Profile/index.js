import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {responsiveHeight} from '../../until';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.boxcover}>
            <View style={styles.boxAvatar}></View>
        </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  boxcover: {
    height: responsiveHeight(250),
    width: '100%',
    backgroundColor: 'red',
  },

  boxAvatar: {
    alignSelf: 'center',
    width: responsiveHeight(170),
    height: responsiveHeight(170),
    backgroundColor: '#ffff',
    position: 'relative',
    bottom: 0
  }
});

export default Profile;
