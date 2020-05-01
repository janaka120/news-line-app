// @flow
import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GREEN_86D, GREEN_53A, WHITE_FFF} from '../../../styles/Colors';
import {
  scaleFontWithLineHeight,
  scaleHeight,
  scaleWidth,
  scaleSize,
  scaleSizeBorder,
} from '../../../styles/Mixins';

type Props = {
  key: string,
  title: string,
  onClick: () => void,
};

const NewsListItem = ({title, onClick}: Props) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.btnCon} elevation={2}>
        <View style={styles.leftCon}>
          <View style={styles.txtCon}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default NewsListItem;

const height = scaleSize(43);
const styles = StyleSheet.create({
  btnCon: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: scaleHeight(17),
    // height,
    // width: '100%',
    backgroundColor: WHITE_FFF,
  },
  selected: {
    ...StyleSheet.absoluteFill,
    borderWidth: scaleSizeBorder(3, 3),
    borderColor: GREEN_86D,
    borderRadius: height / 2,
  },
  leftCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txtCon: {
    marginLeft: scaleWidth(21),
    justifyContent: 'space-around',
  },
  title: {
    ...scaleFontWithLineHeight(20),
    color: GREEN_53A,
  },
  subText: {
    ...scaleFontWithLineHeight(10),
    color: GREEN_53A,
  },
  tickView: {
    marginRight: scaleWidth(19),
  },
});
