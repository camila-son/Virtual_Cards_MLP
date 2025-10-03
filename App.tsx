import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HomepageScreen } from './src/screens/homepage/HomepageScreen';
import { MarketingScreen } from './src/screens/marketing/MarketingScreen';
import { CustomVirtualCardScreen } from './src/screens/custom_virtual_card';
import { LoadingScreen } from './src/screens/loading';
import { StandardSuccessScreen } from './src/screens/standard_success';
import { loadCustomFonts } from './src/utils/loadFonts';
import { Screen } from './src/types/navigation';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('homepage');
  const [cardData, setCardData] = useState<{
    cardDesign: { id: number; name: string; image: any };
    customCardName: string;
  } | null>(null);

  useEffect(() => {
    loadCustomFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const navigateToLoadingWithCardData = (cardDesign: { id: number; name: string; image: any }, customCardName: string) => {
    setCardData({ cardDesign, customCardName });
    setCurrentScreen('loading');
  };

  const navigateToStandardSuccess = () => {
    setCurrentScreen('standard_success');
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading fonts...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.appContainer}>
      <HomepageScreen 
        onNavigateToMarketing={() => navigateToScreen('marketing')}
        onNavigateToVirtualCardCreation={() => navigateToScreen('custom_virtual_card')}
      />
      {(currentScreen === 'marketing' || currentScreen === 'custom_virtual_card') && (
        <MarketingScreen 
          onBack={() => navigateToScreen('homepage')}
          onNavigateToVirtualCardCreation={() => navigateToScreen('custom_virtual_card')}
        />
      )}
      {currentScreen === 'custom_virtual_card' && (
        <CustomVirtualCardScreen 
          onBack={() => navigateToScreen('marketing')} 
          onNavigateToLoading={navigateToLoadingWithCardData}
        />
      )}
      {currentScreen === 'loading' && cardData && (
        <LoadingScreen 
          onNext={navigateToStandardSuccess}
          cardDesign={cardData.cardDesign}
          customCardName={cardData.customCardName}
        />
      )}
      {currentScreen === 'standard_success' && cardData && (
        <StandardSuccessScreen 
          onNext={() => navigateToScreen('homepage')}
          cardDesign={cardData.cardDesign}
          customCardName={cardData.customCardName}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ece9ee',
  },
  loadingText: {
    fontSize: 16,
    color: '#000',
  },
});