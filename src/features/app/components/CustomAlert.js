// @flow
import {Alert} from 'react-native';

export const CustomAlert = (title: string, info: string) => {
  Alert.alert(title, info, [
    {text: 'OK', onPress: () => console.log('alert press')},
  ]);
};
