import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CloseIconProps {
  size?: number;
  color?: string;
}

export function CloseIcon({ size = 24, color = 'rgba(0,0,0,0.64)' }: CloseIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.0012 13.4157L18.2948 19.7092L19.7091 18.2949L13.4156 12.0013L19.7091 5.70781L18.2948 4.29346L12.0012 10.587L5.70769 4.29346L4.29333 5.70781L10.5869 12.0013L4.29333 18.2949L5.70769 19.7092L12.0012 13.4157Z"
        fill={color}
      />
    </Svg>
  );
}
