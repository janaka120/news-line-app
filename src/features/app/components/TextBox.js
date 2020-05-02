//@flow
import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, Text, Keyboard} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import {
  scaleFontWithLineHeight,
  scaleIconFontSize,
  scaleSize,
  scaleWidth,
  scaleSizeBorder,
  scaleHeight,
  scaleFont,
} from '../../../styles/Mixins';
import {GREEN_53A, WHITE_FFF, GRAY_9D9, RED_717} from '../../../styles/Colors';

type Props = {
  icon: string,
  value: string,
  placeholder: string,
  keyboardType?: string,
  onChangeText: (val: string) => void,
  error?: string,
  secureTextEntry?: boolean,
  autoCapitalize?: string,
};
const TextBox = ({
  placeholder,
  onChangeText,
  value,
  icon,
  keyboardType = 'default',
  error = '',
  secureTextEntry = false,
  autoCapitalize = 'none',
}: Props) => {
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
    <>
      <View style={styles.container}>
        <View style={styles.iconView}>
          <FontAwesome5Icon
            name={icon}
            color={GRAY_9D9}
            {...scaleIconFontSize(28)}
          />
        </View>
        <TextInput
          ref={searchRef}
          style={styles.txtInput}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          returnKeyType={'next'}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          placeholder={isFocused ? '' : placeholder}
          placeholderTextColor={GRAY_9D9}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {error && error.length > 0 ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}
    </>
  );
};
export default TextBox;

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
  iconView: {
    marginRight: scaleWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: RED_717,
    fontSize: scaleFont(14),
    marginLeft: scaleWidth(15),
  },
});
