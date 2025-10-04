import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HomepageScreen } from './src/screens/homepage/HomepageScreen';
import { MarketingScreen } from './src/screens/marketing/MarketingScreen';
import { CustomVirtualCardScreen } from './src/screens/custom_virtual_card';
import { LoadingScreen } from './src/screens/loading';
import { TemporaryLoadingScreen } from './src/screens/temporary_loading';
import { StandardSuccessScreen } from './src/screens/standard_success';
import { TemporarySuccessScreen } from './src/screens/temporary_success';
import { PinScreen } from './src/screens/pin';
import { StandardCardDetailsScreen } from './src/screens/standard_card_details';
import { TemporaryCardDetailsScreen } from './src/screens/temporary_card_details';
import { CardManagementScreen } from './src/screens/card_management';
import { TemporaryDisclaimerScreen } from './src/screens/temporary_disclaimer';
import { loadCustomFonts } from './src/utils/loadFonts';
import { Screen } from './src/types/navigation';
import { CardsProvider, useCards } from './src/contexts/CardsContext';

function AppContent() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('homepage');
  const [cardData, setCardData] = useState<{
    cardDesign: { id: number; name: string; image: any };
    customCardName: string;
  } | null>(null);
  const [successScreenShown, setSuccessScreenShown] = useState(false);
  const [temporarySuccessScreenShown, setTemporarySuccessScreenShown] = useState(false);
  const [cardDetailsLoaded, setCardDetailsLoaded] = useState(false);
  const [temporaryCardDetailsLoaded, setTemporaryCardDetailsLoaded] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [isTemporaryFlow, setIsTemporaryFlow] = useState(false);
  const [temporaryCardExpiresAt, setTemporaryCardExpiresAt] = useState<Date | null>(null);
  const { cards } = useCards();

  useEffect(() => {
    loadCustomFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const navigateToHomepage = () => {
    setCurrentScreen('homepage');
  };

  const navigateToLoadingWithCardData = (cardDesign: { id: number; name: string; image: any }, customCardName: string) => {
    setCardData({ cardDesign, customCardName });
    setSuccessScreenShown(false); // Reset for new card creation flow
    setIsTemporaryFlow(false); // Mark as standard flow
    setCurrentScreen('loading');
  };

  const navigateToTemporarySuccess = () => {
    setTemporarySuccessScreenShown(false); // Reset for new temporary card creation flow
    setIsTemporaryFlow(true); // Mark as temporary flow
    
    // Find the temporary card and store its expiration time
    const tempCard = cards.find(card => card.isTemporary);
    if (tempCard && tempCard.expiresAt) {
      setTemporaryCardExpiresAt(tempCard.expiresAt);
    }
    
    setCurrentScreen('temporary_success');
  };

  const navigateToTemporaryCardDetails = () => {
    setTemporaryCardDetailsLoaded(false); // Reset before navigation
    setCurrentScreen('temporary_card_details');
  };

  const handleTemporaryCardDetailsLoaded = () => {
    // Called by TemporaryCardDetailsScreen when slide-in animation completes
    setTemporarySuccessScreenShown(true); // Hide success screen AFTER animation completes
    setTemporaryCardDetailsLoaded(true);
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

  const handleCardSelection = (cardId: string) => {
    const selectedCard = cards.find(card => card.id === cardId);
    if (selectedCard) {
      setCardData({
        cardDesign: selectedCard.cardDesign,
        customCardName: selectedCard.name,
      });
      setSelectedCardId(cardId);
      setCurrentScreen('pin');
    }
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
      {(currentScreen === 'marketing' || currentScreen === 'custom_virtual_card' || currentScreen === 'temporary_disclaimer' || currentScreen === 'loading' || currentScreen === 'temporary_loading' || currentScreen === 'temporary_success' || currentScreen === 'temporary_card_details') && (
        <MarketingScreen 
          onBack={() => navigateToScreen('homepage')}
          onNavigateToVirtualCardCreation={() => navigateToScreen('custom_virtual_card')}
          onNavigateToTemporaryDisclaimer={() => navigateToScreen('temporary_disclaimer')}
        />
      )}
      {currentScreen === 'temporary_disclaimer' && (
        <TemporaryDisclaimerScreen 
          onBack={() => navigateToScreen('marketing')}
          onCreateTemporaryCard={() => {
            // Navigate to temporary loading screen
            navigateToScreen('temporary_loading');
          }}
        />
      )}
      {currentScreen === 'temporary_loading' && (
        <TemporaryLoadingScreen 
          onNext={navigateToTemporarySuccess}
        />
      )}
      {!temporarySuccessScreenShown && (currentScreen === 'temporary_success' || (currentScreen === 'pin' && isTemporaryFlow) || (currentScreen === 'temporary_card_details' && !temporaryCardDetailsLoaded)) && (
        <TemporarySuccessScreen 
          onNext={() => navigateToScreen('homepage')}
          onNavigateToPin={navigateToPin}
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
          onBack={() => {
            if (selectedCardId) {
              // Coming from card management, go back to card management
              setSelectedCardId(null);
              setCurrentScreen('card_management');
            } else if (isTemporaryFlow) {
              // Coming from temporary success screen
              setCurrentScreen('temporary_success');
            } else {
              // Coming from standard success screen
              setCurrentScreen('standard_success');
            }
          }}
          onNavigateToCardDetails={() => {
            // Check if we're in temporary flow or standard flow
            if (isTemporaryFlow) {
              navigateToTemporaryCardDetails();
            } else {
              navigateToCardDetails();
            }
          }}
          title="Enter your 4-digit PIN"
        />
      )}
      {(currentScreen === 'card_management' || 
        (currentScreen === 'pin' && selectedCardId) || 
        (currentScreen === 'standard_card_details' && (selectedCardId || cardDetailsLoaded)) ||
        (currentScreen === 'temporary_card_details' && temporaryCardDetailsLoaded)) && (
        <CardManagementScreen 
          onBack={navigateToHomepage}
          onCardPress={handleCardSelection}
        />
      )}
      {currentScreen === 'standard_card_details' && cardData && (
        <StandardCardDetailsScreen 
          onBack={() => {
            if (selectedCardId) {
              // Viewing existing card from card management, reset and go back
              setSelectedCardId(null);
            }
            // Always go to card management when leaving card details
            navigateToCardManagement();
          }}
          onAnimationComplete={handleCardDetailsLoaded}
          cardDesign={cardData.cardDesign}
          customCardName={cardData.customCardName}
        />
      )}
      {currentScreen === 'temporary_card_details' && temporaryCardExpiresAt && (
        <TemporaryCardDetailsScreen 
          onBack={navigateToCardManagement}
          onAnimationComplete={handleTemporaryCardDetailsLoaded}
          expiresAt={temporaryCardExpiresAt}
        />
      )}
    </View>
  );
}

export default function App() {
  return (
    <CardsProvider>
      <AppContent />
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