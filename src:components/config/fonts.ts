// Font configuration for the app
// Using actual Nu Sans font files from assets/fonts/

export const Fonts = {
  // Nu Sans (normal) variants
  nuSans: {
    light: 'Nu Sans Light',
    regular: 'Nu Sans',
    medium: 'Nu Sans Medium',
    semibold: 'Nu Sans Semibold',
  },
  
  // Nu Sans Condensed variants
  nuSansCondensed: {
    light: 'Nu Sans Condensed Light',
    regular: 'Nu Sans Condensed',
    medium: 'Nu Sans Condensed Medium',
    semibold: 'Nu Sans Condensed Semibold',
  },
  
  // Nu Sans Extended variants
  nuSansExtended: {
    light: 'Nu Sans Extended Light',
    regular: 'Nu Sans Extended',
    medium: 'Nu Sans Extended Medium',
    semibold: 'Nu Sans Extended Semibold',
  },
  
  // System fallbacks
  system: {
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
  }
};

// Helper function to get font family with fallback
export const getFontFamily = (fontName: string, fallback: string = 'System'): string => {
  return fontName || fallback;
};

// Typography presets matching your design system
export const Typography = {
  // Display styles
  displayMedium: {
    fontFamily: Fonts.nuSans.medium,
    fontSize: 24,
    fontWeight: '500' as const,
    lineHeight: 28.8,
  },
  
  // Text styles
  textRegular: {
    fontFamily: Fonts.nuSans.regular,
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 21,
  },
  
  textSemibold: {
    fontFamily: Fonts.nuSans.semibold,
    fontSize: 12,
    fontWeight: '600' as const,
    lineHeight: 15.6,
  },
  
  // Condensed variants
  condensedMedium: {
    fontFamily: Fonts.nuSansCondensed.medium,
    fontSize: 24,
    fontWeight: '500' as const,
    lineHeight: 28.8,
  },
  
  condensedRegular: {
    fontFamily: Fonts.nuSansCondensed.regular,
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 21,
  },
  
  // Extended variants
  extendedMedium: {
    fontFamily: Fonts.nuSansExtended.medium,
    fontSize: 24,
    fontWeight: '500' as const,
    lineHeight: 28.8,
  },
  
  extendedRegular: {
    fontFamily: Fonts.nuSansExtended.regular,
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 21,
  },
};
