//@flow
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {
  scaleWidth,
  scaleFontWithLineHeight,
  scaleHeight,
} from '../../../styles/Mixins';
import {WHITE_FFF, GRAY_999} from '../../../styles/Colors';
import TextBox from '../../app/components/TextBox';
import SubmitButton from '../../app/components/SubmitButton';
import {requestUserSave, requestUserSavedProfile} from '../actions/UserActions';
import {startFullLoader} from '../../app/actions/AppActions';
import FullLoader from '../../app/components/FullLoader';

const UserProfileScreen = () => {
  const dispatch = useDispatch();

  const {
    storedUserName,
    storedFullName,
    storedPassword,
    loggedSuccess,
    fullLoaderStatus,
  } = useSelector(
    (state) => ({
      storedUserName: state.userReducer.userName,
      storedFullName: state.userReducer.fullName,
      storedPassword: state.userReducer.password,
      loggedSuccess: state.userReducer.loggedSuccess,
      fullLoaderStatus: state.appReducer.fullLoader,
    }),
    shallowEqual,
  );

  const [userName, setUserName] = useState(storedUserName);
  const [fullName, setFullName] = useState(storedFullName);
  const [password, setPassword] = useState(storedPassword);

  useEffect(() => {
    dispatch(startFullLoader());
    dispatch(requestUserSavedProfile());
  }, [dispatch]);

  const onPressSubmit = () => {
    dispatch(startFullLoader());
    dispatch(requestUserSave(userName, fullName, password));
  };

  useEffect(() => {
    setUserName(storedUserName);
    setFullName(storedFullName);
    setPassword(storedPassword);
  }, [storedUserName, storedFullName, storedPassword]);

  const validateForm = () => {
    return userName.length <= 5 || fullName.length <= 3 || password.length <= 5;
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAwareScrollView
        style={styles.mainWrapper}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Welcome aboard</Text>
        <View style={styles.mainContentView}>
          <TextBox
            value={userName}
            placeholder="User Name"
            onChangeText={(txt) => {
              setUserName(txt);
            }}
            icon="user-shield"
            error={userName.length <= 5 ? 'Please enter valid User name.' : ''}
            editable={!loggedSuccess}
          />
          <View style={styles.gap} />
          <TextBox
            value={fullName}
            placeholder="Full Name"
            onChangeText={(txt) => {
              setFullName(txt);
            }}
            icon="user-alt"
            autoCapitalize="words"
            error={fullName.length <= 3 ? 'Please enter valid Full name.' : ''}
            editable={!loggedSuccess}
          />
          <View style={styles.gap} />
          <TextBox
            value={password}
            placeholder="Password"
            onChangeText={(txt) => {
              setPassword(txt);
            }}
            icon="user-lock"
            secureTextEntry={true}
            error={password.length <= 5 ? 'Please enter valid Password.' : ''}
            editable={!loggedSuccess}
          />
        </View>
        {!loggedSuccess ? (
          <View style={styles.buttonContainer}>
            <SubmitButton
              title="Register"
              onPress={onPressSubmit}
              disabled={validateForm()}
            />
          </View>
        ) : (
          <Text style={styles.info}>{'User already registered.'}</Text>
        )}
      </KeyboardAwareScrollView>
      <FullLoader showLoader={fullLoaderStatus} />
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: WHITE_FFF,
  },
  mainWrapper: {
    flex: 1,
    marginHorizontal: scaleWidth(16),
    marginVertical: scaleWidth(16),
  },
  title: {
    marginTop: scaleHeight(10),
    ...scaleFontWithLineHeight(20),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  mainContentView: {
    marginTop: scaleHeight(52),
  },
  gap: {
    height: scaleHeight(20.5),
  },
  buttonContainer: {
    marginTop: scaleHeight(50),
  },
  info: {
    marginTop: scaleHeight(20),
    ...scaleFontWithLineHeight(16),
    color: GRAY_999,
    textAlign: 'center',
  },
});
