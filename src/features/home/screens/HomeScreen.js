// @flow
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {requestNews} from '../actions/HomeActions';
import NewsList from '../../app/components/NewsList';
import {scaleWidth} from '../../../styles/Mixins';

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
  // console.log('>>>>>>>>>>>>',totalArticles, articles)

  const onPressNewsList = (id) => {
    console.log('New Item Id', id);
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
});
