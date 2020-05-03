// @flow
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {WHITE_FFF, GRAY_190_8} from '../../../styles/Colors';
import {scaleHeight, scaleFontWithLineHeight} from '../../../styles/Mixins';

type Props = {
  title: string,
};

const EmptyListCom = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
export default EmptyListCom;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GRAY_190_8,
  },
  text: {
    marginVertical: scaleHeight(20),
    ...scaleFontWithLineHeight(16),
    color: WHITE_FFF,
  },
});
