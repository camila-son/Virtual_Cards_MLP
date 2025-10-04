import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface ShieldIconProps {
  size?: number;
  color?: string;
}

export function ShieldIcon({ size = 24, color = 'rgba(0,0,0,0.96)' }: ShieldIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.1538 22.5C11.9247 22.3625 11.6998 22.2281 11.4792 22.0961C6.88519 19.3491 4.15381 17.7158 4.15381 13.5V6L12.1538 2L20.1538 6V13.5C20.1538 17.7158 17.4224 19.3491 12.8284 22.0961C12.6078 22.2281 12.3829 22.3625 12.1538 22.5ZM16.6423 17.0905C17.6512 16.1199 18.1538 15.1303 18.1538 13.5V7.23607L12.1538 4.23607L6.15381 7.23607V13.5C6.15381 15.1303 6.65637 16.1199 7.66535 17.0905C8.67266 18.0595 10.1053 18.9404 12.1538 20.1685C14.2024 18.9404 15.635 18.0595 16.6423 17.0905Z"
        fill={color}
      />
    </Svg>
  );
}
