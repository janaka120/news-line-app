// @flow
import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  WHITE_FFF,
  GRAY_190_1,
  GRAY_6D6,
  GRAY_9D9,
} from '../../../styles/Colors';
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
  imageUrl?: string,
  onClick: () => void,
};

const NewsListItem = ({title, imageUrl, onClick}: Props) => {
  const imgSource =
    imageUrl.length > 0
      ? {
          uri: imageUrl,
        }
      : require('../../../assets/images/sample_news_bg.jpg');
  return (
    <TouchableOpacity style={styles.btnCon} onPress={onClick}>
      <View style={styles.leftCon}>
        <Image style={styles.thumbnailImage} source={imgSource} />
      </View>
      <View style={styles.txtCon}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default NewsListItem;

const borderRadius = scaleSize(10);
const imageHeight = scaleWidth(100);

const styles = StyleSheet.create({
  btnCon: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: scaleHeight(12),
    borderRadius: borderRadius,
    backgroundColor: WHITE_FFF,
    borderColor: GRAY_9D9,
    borderWidth: scaleSizeBorder(1, 1),
  },
  btnConEnable: {},
  btnConDisabled: {
    backgroundColor: GRAY_190_1,
  },
  leftCon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageHeight,
    height: imageHeight,
    backgroundColor: GRAY_6D6,
    borderRadius: borderRadius,
  },
  txtCon: {
    flex: 1,
    marginHorizontal: scaleWidth(8),
  },
  title: {
    ...scaleFontWithLineHeight(15.2),
    fontWeight: 'bold',
  },
  thumbnailImage: {
    width: imageHeight,
    height: imageHeight,
    resizeMode: 'cover',
    backgroundColor: GRAY_6D6,
    borderRadius: borderRadius,
  },
});
