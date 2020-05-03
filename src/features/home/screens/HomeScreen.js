// @flow
import React, {useEffect, useState, useCallback} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {
  requestNews,
  pullToRefresh,
  loadMoreNews,
  requestNewsLoadMore,
} from '../actions/HomeActions';
import NewsList from '../../app/components/NewsList';
import {
  scaleWidth,
  scaleHeight,
  scaleFontWithLineHeight,
} from '../../../styles/Mixins';
import SearchBox from '../../app/components/SearchBox';
import type {Article} from '../../app/models/NewsModel';
import type {NavPropType} from '../../../Types';
import {HomeConstant} from '../HomeConstant';

type Props = {
  navigation: NavPropType,
  route: {
    params: any,
  },
};

const HomeScreen = ({navigation, route}: Props) => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const {totalArticles, articles, refreshing, loading, page} = useSelector(
    (state) => ({
      totalArticles: state.homeReducer.totalArticles,
      articles: state.homeReducer.articles,
      refreshing: state.homeReducer.isListRefreshing,
      loading: state.homeReducer.isListLoading,
      page: state.homeReducer.page,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(requestNews());
  }, [dispatch]);

  const onPressNewsList = (id) => {
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

  const onRefreshHandler = useCallback(() => {
    dispatch(pullToRefresh());
    dispatch(requestNews());
  }, [dispatch]);

  const onLoadMoreHandler = useCallback(() => {
    if (
      !loading &&
      totalArticles / HomeConstant.NEWS_ARTICLES_PAGE_SIZE > page
    ) {
      dispatch(loadMoreNews());
      dispatch(requestNewsLoadMore(page + 1));
    }
  }, [dispatch, page, totalArticles, loading]);

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
          onRefresh={onRefreshHandler}
          refreshing={refreshing}
          loading={loading}
          onLoadMore={onLoadMoreHandler}
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
