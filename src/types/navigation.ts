// Navigation types
export type Screen = 'homepage' | 'marketing';

// Marketing screen types
export interface MarketingScreenProps {
  onBack: () => void;
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
}

export interface VirtualCardWidgetProps {
  onNavigateToMarketing: () => void;
}
