// Font configuration for the app
// Add your custom font files to assets/fonts/ directory

export const Fonts = {
  // Nu Sans Display variants
  nuSansDisplay: {
    medium: 'NuSansDisplay-Medium',
    regular: 'NuSansDisplay-Regular',
    bold: 'NuSansDisplay-Bold',
  },
  
  // Nu Sans Text variants
  nuSansText: {
    regular: 'NuSansText-Regular',
    medium: 'NuSansText-Medium',
    semibold: 'NuSansText-SemiBold',
    bold: 'NuSansText-Bold',
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
    fontFamily: Fonts.nuSansDisplay.medium,
    fontSize: 24,
    fontWeight: '500' as const,
    lineHeight: 28.8,
  },
  
  // Text styles
  textRegular: {
    fontFamily: Fonts.nuSansText.regular,
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 21,
  },
  
  textSemibold: {
    fontFamily: Fonts.nuSansText.semibold,
    fontSize: 12,
    fontWeight: '600' as const,
    lineHeight: 15.6,
  },
};
