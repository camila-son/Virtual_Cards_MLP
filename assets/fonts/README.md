# Custom Fonts Setup

## How to Add Custom Fonts

### 1. Download Font Files
- Download your font files (`.ttf` or `.otf` format)
- For NuSans, you'll need these variants:
  - `NuSansDisplay-Medium.ttf`
  - `NuSansDisplay-Regular.ttf`
  - `NuSansText-Regular.ttf`
  - `NuSansText-Medium.ttf`
  - `NuSansText-SemiBold.ttf`
  - `NuSansText-Bold.ttf`

### 2. Add Font Files
- Place all font files in this directory (`assets/fonts/`)
- Make sure the filenames match exactly what's defined in `src/config/fonts.ts`

### 3. Font File Naming Convention
The font files should be named exactly as specified in the fonts configuration:
- `NuSansDisplay-Medium.ttf`
- `NuSansDisplay-Regular.ttf`
- `NuSansText-Regular.ttf`
- `NuSansText-Medium.ttf`
- `NuSansText-SemiBold.ttf`
- `NuSansText-Bold.ttf`

### 4. After Adding Fonts
1. Restart your Expo development server
2. Clear the cache: `npx expo start --clear`
3. The fonts will be automatically loaded

### 5. Using Fonts in Components
```typescript
import { Fonts, Typography } from '../config/fonts';

// Use predefined typography
const styles = StyleSheet.create({
  title: Typography.displayMedium,
  description: Typography.textRegular,
  buttonText: Typography.textSemibold,
});

// Or use font families directly
const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.nuSansDisplay.medium,
    fontSize: 24,
    fontWeight: '500',
  },
});
```

## Notes
- If fonts are not available, the app will fall back to system fonts
- Make sure font files are properly licensed for your use case
- Font files will be bundled with your app, so keep file sizes reasonable
