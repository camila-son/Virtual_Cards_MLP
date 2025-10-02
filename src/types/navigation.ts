// Navigation types
export type Screen = 'homepage' | 'marketing' | 'custom_virtual_card';

// Marketing screen types
export interface MarketingScreenProps {
  onBack: () => void;
  onNavigateToVirtualCardCreation: () => void;
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
}
