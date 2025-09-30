import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface BellIconProps {
  size?: number;
  color?: string;
}

export function BellIcon({ size = 20, color = 'rgba(0, 0, 0, 0.64)' }: BellIconProps) {
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <Path
          d="M10 2C10.55 2 11 2.45 11 3V3.29C13.89 3.85 16 6.41 16 9.5V14L18 16V17H2V16L4 14V9.5C4 6.41 6.11 3.85 9 3.29V3C9 2.45 9.45 2 10 2ZM10 5C7.79 5 6 6.79 6 9V15H14V9C14 6.79 12.21 5 10 5ZM10 20C11.1 20 12 19.1 12 18H8C8 19.1 8.9 20 10 20Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}
