// @flow
import React, {useMemo} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {scaleFont, scaleFontWithLineHeight} from '../../../styles/Mixins';
import {RED_851, GRAY_999, WHITE_5F5} from '../../../styles/Colors';
import {AppConstant} from '../../app/AppConstant';

const TAB_ICONS = {
  Home: 'home',
  Favorite: 'news',
  Profile: 'user',
};

const iconSize = scaleFont(17);

type Props = {
  navigation: any,
  state: any,
};
const TabBar = ({state, navigation}: Props) => {
  const insets = useSafeArea();
  // index: currently active routeIndex
  const {routes, index} = state;

  const memoStyles = useMemo(() => {
    const btm = insets.bottom;
    return [
      styles.con,
      {
        //
        height: btm + 48,
        paddingBottom: btm > 10 ? btm - 10 : btm,
      },
    ];
  }, [insets.bottom]);

  return (
    <View style={memoStyles}>
      {routes.map((route, routeIndex) => {
        const isFocused = routeIndex === index;
        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        return (
          <View style={styles.animCon} key={route.name}>
            <TouchableWithoutFeedback onPress={onPress}>
              <View style={styles.btnCon}>
                <EntypoIcon
                  name={TAB_ICONS[route.name]}
                  size={iconSize}
                  color={isFocused ? RED_851 : GRAY_999}
                />
                <Text style={isFocused ? styles.focused : styles.notFocused}>
                  {AppConstant.TAB_LABELS[route.name]}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </View>
  );
};
export default TabBar;

const lblStyle = {
  textAlign: 'center',
  ...scaleFontWithLineHeight(10),
};
const styles = StyleSheet.create({
  animCon: {
    flex: 1,
    marginHorizontal: 1,
  },
  con: {
    // height: 48, //82
    flexDirection: 'row',
    borderTopColor: GRAY_999,
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: WHITE_5F5,
    alignItems: 'center',
  },
  btnCon: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  focused: {
    ...lblStyle,
    color: RED_851,
  },
  notFocused: {
    ...lblStyle,
    color: GRAY_999,
  },
});
