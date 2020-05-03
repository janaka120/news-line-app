// @flow
import {AppConstant} from '../AppConstant';

export const startFullLoader = () => {
  return {
    type: AppConstant.FULL_LOADER_START,
  };
};

export const stopFullLoader = () => {
  return {
    type: AppConstant.FULL_LOADER_STOP,
  };
};
