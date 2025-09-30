import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ChatIconProps {
  size?: number;
  color?: string;
}

export function ChatIcon({ size = 20, color = 'rgba(0, 0, 0, 0.64)' }: ChatIconProps) {
  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <Path
          d="M18 2H2C0.9 2 0 2.9 0 4V18L4 14H18C19.1 14 20 13.1 20 12V4C20 2.9 19.1 2 18 2ZM18 12H3.17L2 13.17V4H18V12ZM5 7H15V9H5V7ZM5 10H13V12H5V10Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}
