// @flow
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {
  scaleFontWithLineHeight,
  scaleWidth,
  scaleSize,
  scaleSizeBorder,
} from '../../../styles/Mixins';
import {GRAY_070, GRAY_190_1, RED_851} from '../../../styles/Colors';

type Props = {
  onPress: () => void,
  title: string,
  selected: boolean,
};

const TagList = ({onPress, title, selected}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected ? styles.conSelect : styles.conUnselect,
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default TagList;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaleWidth(5),
    marginHorizontal: scaleWidth(5),
    borderRadius: scaleSize(25),
    backgroundColor: GRAY_190_1,
  },
  text: {
    ...scaleFontWithLineHeight(16),
    color: GRAY_070,
    textAlign: 'center',
  },
  conSelect: {
    borderWidth: scaleSizeBorder(1, 1),
    borderColor: RED_851,
  },
  conUnselect: {},
});
