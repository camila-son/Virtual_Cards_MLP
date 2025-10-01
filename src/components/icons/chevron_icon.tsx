import React from 'react';
import { Svg, Path } from 'react-native-svg';

export function ChevronIcon({ size = 20, color = 'rgba(0,0,0,0.64)' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.5 5L12.5 10L7.5 15"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
