// Navigation types
export type Screen = 'homepage' | 'marketing' | 'custom_virtual_card' | 'loading' | 'temporary_loading' | 'standard_success' | 'temporary_success' | 'pin' | 'standard_card_details' | 'temporary_card_details' | 'card_management' | 'temporary_disclaimer';

// Marketing screen types
export interface MarketingScreenProps {
  onBack: () => void;
  onNavigateToVirtualCardCreation: () => void;
  onNavigateToTemporaryDisclaimer: () => void;
}

export interface HeroCarouselProps {
  onIndexChange: (index: number) => void;
}

export interface PageIndicatorsProps {
  currentIndex: number;
  totalCount: number;
}

export interface ContentSectionProps {
  currentIndex: number;
}

export interface TopNavigationBarProps {
  onBack: () => void;
  title?: string; // Optional title to display in the navigation bar
  backgroundColor?: string; // Optional background color
}

// Homepage screen types
export interface HomepageScreenProps {
  onNavigateToMarketing: () => void;
  onNavigateToVirtualCardCreation: () => void;
}

export interface VirtualCardWidgetProps {
  onNavigateToMarketing: () => void;
}

// Custom virtual card screen types
export interface CustomVirtualCardScreenProps {
  onBack: () => void;
  onNavigateToLoading: (cardDesign: { id: number; name: string; image: any }, customCardName: string) => void;
}

// Loading screen types
export interface LoadingScreenProps {
  onNext: () => void;
  cardDesign: {
    id: number;
    name: string;
    image: any;
  };
  customCardName: string;
}

// Temporary loading screen types
export interface TemporaryLoadingScreenProps {
  onNext: () => void;
}

// Temporary success screen types
export interface TemporarySuccessScreenProps {
  onNext: () => void;
  onNavigateToPin: () => void;
}

// Standard success screen types
export interface StandardSuccessScreenProps {
  onNext: () => void;
  onNavigateToPin: () => void;
  cardDesign: {
    id: number;
    name: string;
    image: any;
  };
  customCardName: string;
}

// PIN screen types
export interface PinScreenProps {
  onBack: () => void;
  onNavigateToCardDetails: () => void;
  title?: string;
}

// Standard card details screen types
export interface StandardCardDetailsScreenProps {
  onBack: () => void;
  onAnimationComplete?: () => void;
  cardDesign: {
    id: number;
    name: string;
    image: any;
  };
  customCardName: string;
}

// Card management screen types
export interface CardManagementScreenProps {
  onBack: () => void;
  onCardPress?: (cardId: string) => void;
}

// Temporary card details screen types
export interface TemporaryCardDetailsScreenProps {
  onBack: () => void;
  onAnimationComplete?: () => void;
  expiresAt: Date;
}

// Temporary disclaimer screen types
export interface TemporaryDisclaimerScreenProps {
  onBack: () => void;
  onCreateTemporaryCard: () => void;
}
