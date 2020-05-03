import {UserConstant} from '../UserConstant';
import type {User} from '../../app/models/UserModel';

export const requestUserSave = (userName, fullName, password) => {
  return {
    type: UserConstant.PROFILE_SAVE_REQUEST,
    payload: {userName, fullName, password},
  };
};

export const requestUserSaveSuccess = (data: User) => {
  return {
    type: UserConstant.PROFILE_SAVE_REQUEST_SUCCESS,
    payload: data,
  };
};

export const requestUserSaveFail = () => {
  return {
    type: UserConstant.PROFILE_SAVE_REQUEST_FAILED,
  };
};

export const requestUserSavedProfile = () => {
  return {
    type: UserConstant.PROFILE_REQUEST_SAVED,
  };
};