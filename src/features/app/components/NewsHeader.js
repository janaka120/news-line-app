// @flow
import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  scaleFontWithLineHeight,
  scaleSize,
  scaleHeight,
  scaleWidth,
} from '../../../styles/Mixins';
import {
  GRAY_6D6,
  WHITE_FFF,
  WHITE_9F9,
  GRAY_255_1,
} from '../../../styles/Colors';

type Props = {
  source: String,
  author: String,
  title: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
};

const NewsHeader = ({
  source,
  author,
  title,
  url,
  urlToImage,
  publishedAt,
}: Props) => {
  const imgSource =
    urlToImage.length > 0
      ? {uri: urlToImage}
      : require('../../../assets/images/sample_news_bg.jpg');
  const formatDate = (val: string) => {
    if (val && val.length > 0) {
      const date = new Date(val).toDateString().split(' ');
      return `${date[2]} ${date[1]} ${date[3]}`;
    }
    return '';
  };

  return (
    <ImageBackground style={styles.backgroundImageContainer} source={imgSource}>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.bottomContainer}>
          <View style={styles.sourceContainer}>
            <Text style={styles.subText}>{source}</Text>
          </View>
          <View style={styles.bottomContainerRight}>
            <Text style={styles.subText}>{author}</Text>
            <Text style={styles.subText}>{formatDate(publishedAt)}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

NewsHeader.defaultProps = {
  source: '',
  author: '',
  title: '',
  url: '',
  urlToImage: '',
  publishedAt: '',
};

export default NewsHeader;

const styles = StyleSheet.create({
  backgroundImageContainer: {
    height: scaleSize(350),
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    resizeMode: 'cover',
    backgroundColor: GRAY_6D6,
  },
  bodyContainer: {
    marginBottom: scaleHeight(10),
    marginHorizontal: scaleWidth(10),
    backgroundColor: GRAY_255_1,
  },
  title: {
    ...scaleFontWithLineHeight(22),
    fontWeight: 'bold',
    color: WHITE_FFF,
  },
  subText: {
    ...scaleFontWithLineHeight(14),
    color: WHITE_9F9,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bottomContainerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  sourceContainer: {
    backgroundColor: 'red',
  },
});
