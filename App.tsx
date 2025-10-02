import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HomepageScreen } from './src/screens/homepage/HomepageScreen';
import { MarketingScreen } from './src/screens/marketing/MarketingScreen';
import { CustomVirtualCardScreen } from './src/screens/custom_virtual_card';
import { loadCustomFonts } from './src/utils/loadFonts';
import { Screen } from './src/types/navigation';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('homepage');

  useEffect(() => {
    loadCustomFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
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
        <CustomVirtualCardScreen onBack={() => navigateToScreen('marketing')} />
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