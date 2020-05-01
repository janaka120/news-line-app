import React, {useEffect} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

const UserProfileScreen = () => {
  const dispatch = useDispatch();

  const {todo} = useSelector(
    (state) => ({
      // todo: state.onboardingReducer.todo,
    }),
    shallowEqual,
  );

  useEffect(() => {
    // dispatch(addTodo({id: 1}));
  }, [dispatch]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>User Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
  },
});
