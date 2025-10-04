import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface CopyIconProps {
  size?: number;
  color?: string;
}

export function CopyIcon({ size = 16, color = 'rgba(0,0,0,0.64)' }: CopyIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M4.76969 1.99951H14.103V11.3328H4.76969V1.99951ZM6.10303 3.33285V9.99951H12.7697V3.33285H6.10303Z"
        fill={color}
      />
      <Path
        d="M2.10303 4.66618H3.43636V12.6662H11.4364V13.9995H2.10303V4.66618Z"
        fill={color}
      />
    </Svg>
  );
}
