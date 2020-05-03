// @flow
import React, {useCallback} from 'react';
import {FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import NewsListItem from './NewsListItem';
import EmptyListCom from './EmptyListCom';

type Props = {
  list: [],
  onPress: (uuid: string) => void,
  refreshing: boolean,
  onRefresh: () => void,
  loading: boolean,
  onLoadMore: () => void,
};

const NewsList = (props: Props) => {
  const {list, onPress, refreshing, onRefresh, loading, onLoadMore} = props;
  const onPressItem = (uuid: string) => {
    onPress(uuid);
  };

  const listEmptyComponent = () => (
    <EmptyListCom title={'No News Articles available.'} />
  );

  const renderItem = ({uuid, title, urlToImage}) => {
    return (
      <NewsListItem
        key={uuid}
        title={title}
        imageUrl={urlToImage}
        onClick={() => onPressItem(uuid)}
      />
    );
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{color: '#000'}} />;
  };

  return (
    <>
      <FlatList
        data={list}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.uuid}
        showsVerticalScrollIndicator={false}
        extraData={props}
        ListEmptyComponent={listEmptyComponent()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.4}
        onEndReached={onLoadMore}
      />
    </>
  );
};

NewsList.defaultProps = {
  list: [],
  selectedCcy: '',
  onPress: (id: string) => {},
};

export default NewsList;
