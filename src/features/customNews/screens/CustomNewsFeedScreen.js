// @flow
import React, {useEffect, useState, useCallback} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {
  requestCustomNews,
  pullToRefresh,
  loadMoreCustomNews,
  requestCustomNewsLoadMore,
} from '../actions/CustomNewsActions';
import NewsList from '../../app/components/NewsList';
import {
  scaleWidth,
  scaleHeight,
  scaleFontWithLineHeight,
} from '../../../styles/Mixins';
import SearchBox from '../../app/components/SearchBox';
import type {Article} from '../../app/models/NewsModel';
import TagList from '../components/TagList';
import type {NavPropType} from '../../../Types';
import {CustomNewsConstant, TagItems} from '../CustomNewsConstant';

type Props = {
  navigation: NavPropType,
  route: {
    params: any,
  },
};

const CustomNewsFeedScreen = ({navigation, route}: Props) => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [newsTopic, setNewsTopic] = useState(TagItems[0].title);

  const {totalArticles, articles, refreshing, loading, page} = useSelector(
    (state) => ({
      totalArticles: state.customNewsReducer.customTotalArticles,
      articles: state.customNewsReducer.customArticles,
      refreshing: state.customNewsReducer.isListRefreshing,
      loading: state.customNewsReducer.isListLoading,
      page: state.customNewsReducer.page,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(requestCustomNews(newsTopic));
  }, [dispatch, newsTopic]);

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

  const onSelectTagHandler = (val) => {
    setNewsTopic(val);
  };

  const onRefreshHandler = useCallback(() => {
    dispatch(pullToRefresh());
    dispatch(requestCustomNews(newsTopic));
  }, [dispatch, newsTopic]);

  const onLoadMoreHandler = useCallback(() => {
    if (
      !loading &&
      totalArticles / CustomNewsConstant.CUSTOM_NEWS_ARTICLES_PAGE_SIZE > page
    ) {
      dispatch(loadMoreCustomNews());
      dispatch(requestCustomNewsLoadMore(newsTopic, page + 1));
    }
  }, [dispatch, page, totalArticles, newsTopic, loading]);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{'Specific News headlines'}</Text>
        <View style={styles.tagsContainer}>
          <TagList onSelect={onSelectTagHandler} value={newsTopic} />
        </View>
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
export default CustomNewsFeedScreen;

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
  tagsContainer: {
    marginTop: scaleHeight(25),
  },
});
