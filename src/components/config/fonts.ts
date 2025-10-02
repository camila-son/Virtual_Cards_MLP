// Font configuration for the app
// Using actual Nu Sans font files from assets/fonts/

export const Fonts = {
  // Nu Sans (only used variants)
  nuSans: {
    regular: 'Nu Sans',
    medium: 'Nu Sans Medium',
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
  
  textMedium: {
    fontFamily: Fonts.nuSans.medium,
    fontSize: 14,
    fontWeight: '500' as const,
    lineHeight: 21,
  },
};
