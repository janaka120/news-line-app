// @flow
import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

import {GREEN_86D, BLACK_0_6} from '../../../styles/Colors';
import {scaleHeight, scaleFontWithLineHeight} from '../../../styles/Mixins';

type Props = {
  showLoader: boolean,
};
const FullLoader = ({showLoader}: Props) => {
  return (
    showLoader && (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={GREEN_86D} />
        <Text style={styles.lbl}>{translate(GlobalKey.GLOBAL_LOADING)}</Text>
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
  lbl: {
    marginTop: scaleHeight(20),
    ...scaleFontWithLineHeight(16),
    color: 'white',
  },
});

