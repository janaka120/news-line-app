// @flow
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {useDispatch} from 'react-redux';
import type {Article} from '../../app/models/NewsModel';
import NewsHeader from '../components/NewsHeader';
import {
  scaleFontWithLineHeight,
  scaleHeight,
  scaleWidth,
} from '../../../styles/Mixins';
import {GRAY_070, WHITE_FFF} from '../../../styles/Colors';
import CloseBtn from '../../app/components/CloseButton';

type Props = {
  navigation: any,
  route: {
    params: Article,
  },
};

const NewsDetailsScreen = ({navigation, route}: Props) => {
  const dispatch = useDispatch();
  const source = route.params?.source;
  const author = route.params?.author;
  const title = route.params?.title;
  const description = route.params?.description;
  const url = route.params?.url;
  const urlToImage = route.params?.urlToImage;
  const publishedAt = route.params?.publishedAt;
  const content = route.params?.content;

  const onPressSource = () => {
    console.log('url');
    if (url && url.length > 0) {
      Linking.openURL(url).catch((err) =>
        console.error('An error occurred', err),
      );
    }
  };

  const onCancelHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <NewsHeader
          source={source}
          author={author}
          title={title}
          url={url}
          urlToImage={urlToImage}
          publishedAt={publishedAt}
        />
        <View style={styles.body}>
          <Text style={styles.info}>{description}</Text>
          <TouchableOpacity onPress={onPressSource}>
            <Text style={styles.readMore}>{'Read more...'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <CloseBtn onCancel={onCancelHandler} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewsDetailsScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: WHITE_FFF,
  },
  container: {
    flex: 1,
    backgroundColor: WHITE_FFF,
  },
  body: {
    marginTop: scaleHeight(30),
    marginHorizontal: scaleWidth(10),
  },
  info: {
    ...scaleFontWithLineHeight(16),
  },
  readMore: {
    marginTop: scaleHeight(10),
    ...scaleFontWithLineHeight(16),
    color: GRAY_070,
    paddingVertical: scaleHeight(5),
  },
  btnContainer: {
    marginTop: scaleHeight(30),
  },
});
