import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface CheckIconProps {
  size?: number;
  color?: string;
}

export function CheckIcon({ size = 24, color = '#ffffff' }: CheckIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.2748 15.1924C10.6653 15.5829 11.2985 15.5829 11.689 15.1924L18.053 8.82844L16.6388 7.41422L10.9819 13.0711L8.15351 10.2427L6.73929 11.6569L10.2748 15.1924Z"
        fill={color}
        fillOpacity="0.88"
      />
      <Path
        d="M22.1538 12C22.1538 17.5228 17.6767 22 12.1538 22C6.63096 22 2.15381 17.5228 2.15381 12C2.15381 6.47715 6.63096 2 12.1538 2C17.6767 2 22.1538 6.47715 22.1538 12ZM20.1538 12C20.1538 7.58172 16.5721 4 12.1538 4C7.73553 4 4.15381 7.58172 4.15381 12C4.15381 16.4183 7.73553 20 12.1538 20C16.5721 20 20.1538 16.4183 20.1538 12Z"
        fill={color}
        fillOpacity="0.88"
      />
    </Svg>
  );
}
