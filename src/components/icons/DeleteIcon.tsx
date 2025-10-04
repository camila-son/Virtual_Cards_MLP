import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface DeleteIconProps {
  size?: number;
  color?: string;
}

export function DeleteIcon({ size = 24, color = 'rgba(0,0,0,0.96)' }: DeleteIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.15381 4L9.15381 2H15.1538V4L21.1538 4V6L3.15381 6V4H9.15381Z"
        fill={color}
      />
      <Path
        d="M6.15381 18C6.15381 19.1046 7.04924 20 8.15381 20H16.1538C17.2584 20 18.1538 19.1046 18.1538 18V8H20.1538V18C20.1538 20.2091 18.3629 22 16.1538 22H8.15381C5.94467 22 4.15381 20.2091 4.15381 18V8H6.15381V18Z"
        fill={color}
      />
    </Svg>
  );
}
