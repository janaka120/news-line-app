// @flow
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {scaleFontWithLineHeight, scaleWidth} from '../../../styles/Mixins';
import {GRAY_070} from '../../../styles/Colors';

type Props = {
  onCancel: () => void,
};

const CloseButton = ({onCancel, title}: Props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onCancel}>
      <Text style={styles.text}>Close</Text>
    </TouchableOpacity>
  );
};
export default CloseButton;

export const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaleWidth(30),
  },
  text: {
    ...scaleFontWithLineHeight(16),
    textDecorationLine: 'underline',
    color: GRAY_070,
  },
});
