import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
  const [isTransitioningToSuccess, setIsTransitioningToSuccess] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [isTemporaryFlow, setIsTemporaryFlow] = useState(false);
  const [temporaryCardExpiresAt, setTemporaryCardExpiresAt] = useState<Date | null>(null);
  const [cameFromCardManagement, setCameFromCardManagement] = useState(false);
  const { cards, addCard } = useCards();

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
    // Reset all tracking flags and state
    setCameFromCardManagement(false);
    setSelectedCardId(null);
    setSuccessScreenShown(false);
    setTemporarySuccessScreenShown(false);
    setCardDetailsLoaded(false);
    setTemporaryCardDetailsLoaded(false);
    setIsTemporaryFlow(false);
  };

  const navigateToLoadingWithCardData = (cardDesign: { id: number; name: string; image: any }, customCardName: string) => {
    setCardData({ cardDesign, customCardName });
    setSuccessScreenShown(false); // Reset for new card creation flow
    setIsTemporaryFlow(false); // Mark as standard flow
    // Track if this is coming from card management (existing user creating another card)
    setCameFromCardManagement(cards.length > 0);
    
    // Add the card to the context (moved from LoadingScreen)
    const lastFourDigits = Math.floor(1000 + Math.random() * 9000).toString();
    addCard({
      name: customCardName,
      lastFourDigits,
      cardType: 'Pre-paid',
      cardDesign,
    });
    
    setIsTransitioningToSuccess(true); // Start transition
    setCurrentScreen('standard_success'); // Skip loading screen, go directly to success
    
    // Clear transition flag after animation completes
    setTimeout(() => {
      setIsTransitioningToSuccess(false);
    }, 500); // 400ms fade + 100ms buffer
  };

  const navigateToTemporarySuccess = () => {
    setTemporarySuccessScreenShown(false); // Reset for new temporary card creation flow
    setIsTemporaryFlow(true); // Mark as temporary flow
    // Track if this is coming from card management
    // Check cards.length before the new card was added (it's added in TemporaryLoadingScreen)
    setCameFromCardManagement(cards.length > 1);
    
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
    // Don't reset cameFromCardManagement here - user is still in card details
    // and may need to go back to card management
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
    // Don't reset cameFromCardManagement here - user is still in card details
    // and may need to go back to card management
  };

  const handleCardSelection = (cardId: string) => {
    const selectedCard = cards.find(card => card.id === cardId);
    if (selectedCard) {
      setCardData({
        cardDesign: selectedCard.cardDesign,
        customCardName: selectedCard.name,
      });
      setSelectedCardId(cardId);
      
      // Set the flow type based on card type
      setIsTemporaryFlow(selectedCard.isTemporary || false);
      
      // Store expiration time if it's a temporary card
      if (selectedCard.isTemporary && selectedCard.expiresAt) {
        setTemporaryCardExpiresAt(selectedCard.expiresAt);
      }
      
      // Mark that we came from card management
      setCameFromCardManagement(true);
      
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
  
  const handleVirtualCardWidgetPress = () => {
    // If user has created cards, go to card management, otherwise go to marketing
    if (cards.length > 0) {
      setCameFromCardManagement(true); // Mark that we're in card management context
      navigateToScreen('card_management');
    } else {
      navigateToScreen('marketing');
    }
  };

  return (
    <View style={styles.appContainer}>
      <HomepageScreen 
        onNavigateToMarketing={handleVirtualCardWidgetPress}
        onNavigateToVirtualCardCreation={() => navigateToScreen('custom_virtual_card')}
        onNavigateToCardManagement={handleVirtualCardWidgetPress}
      />
      {(currentScreen === 'marketing' || currentScreen === 'custom_virtual_card' || currentScreen === 'temporary_disclaimer' || currentScreen === 'loading' || currentScreen === 'temporary_loading' || currentScreen === 'temporary_success' || currentScreen === 'temporary_card_details') && cards.length === 0 && (
        <MarketingScreen 
          onBack={() => navigateToScreen('homepage')}
          onNavigateToVirtualCardCreation={() => navigateToScreen('custom_virtual_card')}
          onNavigateToTemporaryDisclaimer={() => navigateToScreen('temporary_disclaimer')}
        />
      )}
      {currentScreen === 'temporary_disclaimer' && (
        <TemporaryDisclaimerScreen 
          onBack={() => {
            if (cards.length > 0) {
              navigateToScreen('card_management');
            } else {
              navigateToScreen('marketing');
            }
          }}
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
      {!temporarySuccessScreenShown && (currentScreen === 'temporary_success' || (currentScreen === 'pin' && isTemporaryFlow && !selectedCardId) || (currentScreen === 'temporary_card_details' && !temporaryCardDetailsLoaded && !selectedCardId)) && (
        <TemporarySuccessScreen 
          onNext={() => navigateToScreen('homepage')}
          onNavigateToPin={navigateToPin}
        />
      )}
      {(currentScreen === 'custom_virtual_card' || isTransitioningToSuccess) && (
        <CustomVirtualCardScreen 
          onBack={() => {
            if (cards.length > 0) {
              navigateToScreen('card_management');
            } else {
              navigateToScreen('marketing');
            }
          }}
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
      {!successScreenShown && (currentScreen === 'standard_success' || (currentScreen === 'pin' && !isTemporaryFlow && !selectedCardId) || (currentScreen === 'standard_card_details' && !cardDetailsLoaded && !selectedCardId)) && cardData && (
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
        (currentScreen === 'standard_card_details' && (selectedCardId || successScreenShown)) ||
        (currentScreen === 'temporary_card_details' && (selectedCardId || temporarySuccessScreenShown)) ||
        (cameFromCardManagement && selectedCardId && currentScreen === 'pin') ||
        (cameFromCardManagement && (currentScreen === 'custom_virtual_card' || currentScreen === 'temporary_disclaimer'))) && (
        <CardManagementScreen 
          onBack={navigateToHomepage}
          onCardPress={handleCardSelection}
          onNavigateToVirtualCardCreation={() => {
            setCameFromCardManagement(true);
            navigateToScreen('custom_virtual_card');
          }}
          onNavigateToTemporaryDisclaimer={() => {
            setCameFromCardManagement(true);
            navigateToScreen('temporary_disclaimer');
          }}
        />
      )}
      {currentScreen === 'standard_card_details' && cardData && (
        <StandardCardDetailsScreen 
          onBack={() => {
            // Always go to card management when leaving card details
            // Reset selectedCardId if viewing existing card
            if (selectedCardId) {
              setSelectedCardId(null);
            }
            navigateToCardManagement();
          }}
          onAnimationComplete={handleCardDetailsLoaded}
          cardDesign={cardData.cardDesign}
          customCardName={cardData.customCardName}
        />
      )}
      {currentScreen === 'temporary_card_details' && temporaryCardExpiresAt && (
        <TemporaryCardDetailsScreen 
          onBack={() => {
            // Always go to card management when leaving card details
            // Reset selectedCardId if viewing existing card
            if (selectedCardId) {
              setSelectedCardId(null);
            }
            navigateToCardManagement();
          }}
          onAnimationComplete={handleTemporaryCardDetailsLoaded}
          expiresAt={temporaryCardExpiresAt}
        />
      )}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <CardsProvider>
        <AppContent />
      </CardsProvider>
    </SafeAreaProvider>
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