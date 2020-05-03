// @flow
import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

import {RED_851, BLACK_0_6, WHITE_FFF} from '../../../styles/Colors';
import {scaleHeight, scaleFontWithLineHeight} from '../../../styles/Mixins';

type Props = {
  showLoader: boolean,
};
const FullLoader = ({showLoader}: Props) => {
  return (
    showLoader && (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={RED_851} />
        <Text style={styles.text}>{'Loading...'}</Text>
      </View>
    )
  );
};
export default FullLoader;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLACK_0_6,
  },
  text: {
    marginTop: scaleHeight(20),
    ...scaleFontWithLineHeight(16),
    color: WHITE_FFF,
  },
});
