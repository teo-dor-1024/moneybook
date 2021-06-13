import React from 'react';
import {useColorScheme, StyleSheet} from 'react-native';

function useStyle() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? '' : '#FAFAFA';

  return {
    backgroundColor,
    unSelectedColor: '#A4A4A4',
    selectedColor: 'rgb(73, 80, 87)',
    containerStyle: {
      backgroundColor,
      height: '100%',
      paddingHorizontal: 20,
    },
  };
}

export default useStyle;
