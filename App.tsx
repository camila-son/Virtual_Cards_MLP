import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HomepageScreen } from './src/screens/homepage/HomepageScreen';
import { MarketingScreen } from './src/screens/marketing/MarketingScreen';
import { CustomVirtualCardScreen } from './src/screens/custom_virtual_card';
import { LoadingScreen } from './src/screens/loading';
import { StandardSuccessScreen } from './src/screens/standard_success';
import { PinScreen } from './src/screens/pin';
import { StandardCardDetailsScreen } from './src/screens/standard_card_details';
import { CardManagementScreen } from './src/screens/card_management';
import { loadCustomFonts } from './src/utils/loadFonts';
import { Screen } from './src/types/navigation';
import { CardsProvider } from './src/contexts/CardsContext';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('homepage');
  const [cardData, setCardData] = useState<{
    cardDesign: { id: number; name: string; image: any };
    customCardName: string;
  } | null>(null);
  const [successScreenShown, setSuccessScreenShown] = useState(false);
  const [cardDetailsLoaded, setCardDetailsLoaded] = useState(false);

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
    setSuccessScreenShown(false); // Reset for new card creation flow
    setCurrentScreen('loading');
  };

  const navigateToStandardSuccess = () => {
    setCurrentScreen('standard_success');
  };

  const navigateToPin = () => {
    setCurrentScreen('pin');
  };

  const navigateToCardDetails = () => {
    setCardDetailsLoaded(false); // Reset before navigation
    setCurrentScreen('standard_card_details');
  };

  const navigateToCardManagement = () => {
    setCurrentScreen('card_management');
  };

  const handleCardDetailsLoaded = () => {
    // Called by StandardCardDetailsScreen when slide-in animation completes
    setSuccessScreenShown(true); // Hide success screen AFTER animation completes
    setCardDetailsLoaded(true);
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading fonts...</Text>
      </View>
    );
  }
  
  return (
    <CardsProvider>
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
      {!successScreenShown && (currentScreen === 'standard_success' || currentScreen === 'pin' || currentScreen === 'standard_card_details') && cardData && (
        <StandardSuccessScreen 
          onNext={() => navigateToScreen('homepage')}
          onNavigateToPin={navigateToPin}
          cardDesign={cardData.cardDesign}
          customCardName={cardData.customCardName}
        />
      )}
      {currentScreen === 'pin' && (
        <PinScreen 
          onBack={() => navigateToScreen('standard_success')}
          onNavigateToCardDetails={navigateToCardDetails}
          title="Enter your 4-digit PIN"
        />
      )}
      {currentScreen === 'card_management' && (
        <CardManagementScreen 
          onBack={() => navigateToScreen('standard_success')}
        />
      )}
      {currentScreen === 'standard_card_details' && cardDetailsLoaded && cardData && (
        <CardManagementScreen 
          onBack={() => navigateToScreen('standard_success')}
        />
      )}
      {currentScreen === 'standard_card_details' && cardData && (
        <StandardCardDetailsScreen 
          onBack={navigateToCardManagement}
          onAnimationComplete={handleCardDetailsLoaded}
          cardDesign={cardData.cardDesign}
          customCardName={cardData.customCardName}
        />
      )}
    </View>
    </CardsProvider>
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