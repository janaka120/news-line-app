// @flow
import React from 'react';
import {FlatList} from 'react-native';
import NewsListItem from './NewsListItem';

type Props = {
  list: [],
  onPress: (uuid: string) => void,
};

const NewsList = (props: Props) => {
  const {list, onPress} = props;
  const onPressItem = (uuid: string) => {
    onPress(uuid);
  };

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

  return (
    <>
      <FlatList
        data={list}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.uuid}
        showsVerticalScrollIndicator={false}
        extraData={props}
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
