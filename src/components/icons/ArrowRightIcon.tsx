import React from 'react';
import { Svg, Path } from 'react-native-svg';

export function ArrowRightIcon({ size = 16, color = '#ffffff' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L15.2929 8.70711C15.6834 8.31658 15.6834 7.68342 15.2929 7.29289L8 0Z"
        fill={color}
      />
    </Svg>
  );
}

