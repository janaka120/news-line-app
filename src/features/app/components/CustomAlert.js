// @flow
import {Alert} from 'react-native';

const CustomAlert = (title: string, info: string) => {
  Alert.alert(title, info, [
    {text: 'OK', onPress: () => console.log('alert press')},
  ]);
};

export default CustomAlert;
