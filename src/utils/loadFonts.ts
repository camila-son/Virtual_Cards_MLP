import * as Font from 'expo-font';

export const loadCustomFonts = async () => {
  await Font.loadAsync({
    // Nu Sans (only used variants)
    'Nu Sans': require('../../assets/fonts/Nu Sans-Regular.otf'),
    'Nu Sans Medium': require('../../assets/fonts/Nu Sans-Medium.otf'),
  });
};
