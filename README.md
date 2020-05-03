# React Native news-line-app Application

## Getting started

1. Install React Native as described at [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)
2. Clone this repository
3. Run `npm install` or `yarn`, all required components will be installed automatically

    ### iOS

    1. Run `pod install` from `news-line-app/ios` folder
    2. Start XCode and open generated `.xcworkspace`

    ### Android

    no steps required

4. It is recommended to run `react-native start` command from root project directory.
5. Run your project from XCode (`Cmd+R`) for iOS, or use `react-native run-android` to run your project on Android.

## Demo project dependencies

The demo project uses the following third-party dependencies:
- "react-native-vector-icons" - to implement icon buttons
- "react-native-community/async-storage" - to access to local storage
- "react-navigation" - to support navigation
- "axios" - Promise based HTTP client
- "react-native-keyboard-aware-scroll-view" - handles keyboard appearance and automatically scrolls to focused TextInput
- "redux" - managing application state
