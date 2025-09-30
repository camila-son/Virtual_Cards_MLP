import * as Font from 'expo-font';

export const loadCustomFonts = async () => {
  await Font.loadAsync({
    'Nu Sans': require('../../assets/fonts/Nu Sans-Regular.otf'),
    'Nu Sans Medium': require('../../assets/fonts/Nu Sans-Medium.otf'),
    'Nu Sans Semibold': require('../../assets/fonts/Nu Sans-Semibold.otf'),
    'Nu Sans Light': require('../../assets/fonts/Nu Sans-Light.otf'),
  });
};
