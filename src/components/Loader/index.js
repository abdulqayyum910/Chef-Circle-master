import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Loader = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
