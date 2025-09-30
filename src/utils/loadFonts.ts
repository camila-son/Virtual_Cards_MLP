import * as Font from 'expo-font';

export const loadCustomFonts = async () => {
  await Font.loadAsync({
    // Nu Sans (normal) variants
    'Nu Sans Light': require('../../assets/fonts/Nu Sans-Light.otf'),
    'Nu Sans': require('../../assets/fonts/Nu Sans-Regular.otf'),
    'Nu Sans Medium': require('../../assets/fonts/Nu Sans-Medium.otf'),
    'Nu Sans Semibold': require('../../assets/fonts/Nu Sans-Semibold.otf'),
    
    // Nu Sans Condensed variants
    'Nu Sans Condensed Light': require('../../assets/fonts/Nu Sans Condensed-Light.otf'),
    'Nu Sans Condensed': require('../../assets/fonts/Nu Sans Condensed-Regular.otf'),
    'Nu Sans Condensed Medium': require('../../assets/fonts/Nu Sans Condensed-Medium.otf'),
    'Nu Sans Condensed Semibold': require('../../assets/fonts/Nu Sans Condensed-Semibold.otf'),
    
    // Nu Sans Extended variants
    'Nu Sans Extended Light': require('../../assets/fonts/Nu Sans Extended-Light.otf'),
    'Nu Sans Extended': require('../../assets/fonts/Nu Sans Extended-Regular.otf'),
    'Nu Sans Extended Medium': require('../../assets/fonts/Nu Sans Extended-Medium.otf'),
    'Nu Sans Extended Semibold': require('../../assets/fonts/Nu Sans Extended-Semibold.otf'),
  });
};
