// @flow
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {requestNews} from '../actions/HomeActions';
import NewsList from '../../app/components/NewsList';
import {
  scaleWidth,
  scaleHeight,
  scaleFontWithLineHeight,
} from '../../../styles/Mixins';
import SearchBox from '../../app/components/SearchBox';
import type {Article} from '../../app/models/NewsModel';

import type {NavPropType} from '../../../Types';

type Props = {
  navigation: NavPropType,
  route: {
    params: any,
  },
};

const HomeScreen = ({navigation, route}: Props) => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const {totalArticles, articles} = useSelector(
    (state) => ({
      totalArticles: state.homeReducer.totalArticles,
      articles: state.homeReducer.articles,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(requestNews());
  }, [dispatch]);

  const onPressNewsList = (id) => {
    console.log('New Item Id', id);
    const article = articles.find((a) => a.uuid === id);
    if (article) {
      const passData: Article = {...article};
      navigation.navigate('NewsDetails', passData);
    }
  };

  const onArticleListFilterHandler = () => {
    if (searchText.length > 0) {
      return articles.filter(
        (article) => article.title.toLowerCase().search(searchText) >= 0,
      );
    }
    return articles;
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{'Top News headlines'}</Text>
        <View style={styles.searchContainer}>
          <SearchBox
            value={searchText}
            placeholder="Search"
            onChangeText={(txt) => {
              setSearchText(txt);
            }}
          />
        </View>
        <NewsList
          list={onArticleListFilterHandler()}
          onPress={onPressNewsList}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: scaleWidth(16),
    marginVertical: scaleWidth(16),
  },
  searchContainer: {
    marginTop: scaleHeight(15),
    marginBottom: scaleHeight(10),
  },
  title: {
    marginTop: scaleHeight(10),
    ...scaleFontWithLineHeight(20),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
