export interface CardDesign {
  id: number;
  name: string;
  image: any;
}

export interface ColorSwatch {
  id: number;
  color: string;
  name: string;
}

export interface CardCarouselProps {
  cardDesigns: CardDesign[];
  selectedDesignIndex: number;
  onCardSelect: (index: number) => void;
  screenWidth: number;
  scrollToIndex?: number; // Add this to trigger external scrolling
  onScrollPositionChange?: (scrollX: number) => void; // Callback for scroll position changes
  restoreScrollPosition?: number; // Position to restore scroll to
  screenMode?: 'selection' | 'naming'; // Current screen mode
  nonSelectedCardsOpacity?: any; // Animated value for non-selected cards opacity
}

export interface ColorSwatchesProps {
  colorSwatches: ColorSwatch[];
  selectedColorIndex: number;
  onSwatchPress: (index: number) => void;
}

export interface BottomBarProps {
  onChooseDesign: () => void;
  onCreateCard?: () => void;
  screenMode?: 'selection' | 'naming';
}

