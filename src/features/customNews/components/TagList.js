// @flow
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {scaleFontWithLineHeight, scaleWidth} from '../../../styles/Mixins';
import {GRAY_070} from '../../../styles/Colors';
import Tag from './Tag';
import {TagItems} from '../CustomNewsConstant';

type Props = {
  onSelect: (val: string) => void,
  value: String,
};

const TagList = ({onSelect, value}: Props) => {

  return (
    <View style={styles.mainContainer}>
      {TagItems.map((tag) => {
        const {id, title} = tag;
        return (
          <Tag
            key={id}
            title={title}
            onPress={() => onSelect(title)}
            selected={title === value}
          />
        );
      })}
    </View>
  );
};
export default TagList;

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
