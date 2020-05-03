// @flow
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {BLUE_FEA, GRAY_6D6, WHITE_FFF} from '../../../styles/Colors';
import {
  scaleWidth,
  scaleFontWithLineHeight,
  scaleHeight,
} from '../../../styles/Mixins';

type Props = {
  title: string,
  onPress: () => void,
  disabled?: boolean,
};

const SubmitButton = ({title, disabled, onPress}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[disabled ? styles.buttonDisabled : styles.buttonActive]}>
      <Text style={styles.lbl}>{title}</Text>
    </TouchableOpacity>
  );
};
export default SubmitButton;

const height = scaleHeight(42);
const buttonActive = {
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: scaleWidth(46),
  backgroundColor: BLUE_FEA,
  height,
  borderRadius: height / 2,
};
const styles = StyleSheet.create({
  buttonActive,
  buttonDisabled: {
    ...buttonActive,
    backgroundColor: GRAY_6D6,
  },
  lbl: {
    ...scaleFontWithLineHeight(18),
    color: WHITE_FFF,
  },
});
