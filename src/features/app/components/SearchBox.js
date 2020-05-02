//@flow
import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  scaleFontWithLineHeight,
  scaleIconFontSize,
  scaleSize,
  scaleWidth,
  scaleSizeBorder,
  scaleHeight,
} from '../../../styles/Mixins';
import {GREEN_53A, WHITE_FFF, GRAY_9D9} from '../../../styles/Colors';

type Props = {
	value: string,
  placeholder: string,
  onChangeText: (val: string) => void,
};
const SearchBox = ({placeholder, onChangeText, value}: Props) => {
  const [isFocused, setFocus] = useState(false);
  const searchRef = useRef();

  const onPress = () => {
    if (isFocused) {
      Keyboard.dismiss();
      onChangeText('');
    } else {
      if (searchRef.current) {
        searchRef.current.focus();
      }
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        ref={searchRef}
        style={styles.txtInput}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType={'search'}
        keyboardType={'default'}
        value={value}
        onChangeText={onChangeText}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        placeholder={isFocused ? '' : placeholder}
        placeholderTextColor={GRAY_9D9}
      />
      <TouchableOpacity style={styles.btnCon} onPress={onPress}>
        <MaterialIcons
          name="search"
          color={GRAY_9D9}
          {...scaleIconFontSize(28)}
        />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBox;

const borderRadius = scaleSize(20);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: borderRadius,
    backgroundColor: WHITE_FFF,
    borderColor: GRAY_9D9,
    borderWidth: scaleSizeBorder(1, 1),
    paddingLeft: scaleHeight(20),
    paddingRight: scaleHeight(15),
    paddingVertical: scaleHeight(3),
  },
  txtInput: {
    flex: 1,
    ...scaleFontWithLineHeight(16),
    padding: 0,
    color: GREEN_53A,
  },
  btnCon: {
    marginLeft: scaleWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
