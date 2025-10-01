import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface ExchangeIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const ExchangeIcon: React.FC<ExchangeIconProps> = ({ 
  width = 20, 
  height = 20, 
  color = 'rgba(0, 0, 0, 0.96)' 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path 
        d="M9.51138 14.1673H18.3327V15.8333H9.51236L12.8454 19.1664H10.4879L6.9108 15.5892C6.58536 15.2638 6.58536 14.7359 6.9108 14.4105L10.4879 10.8333H12.8454L9.51138 14.1673ZM13.0895 4.41049C13.4149 4.73593 13.4149 5.26376 13.0895 5.5892L9.51236 9.16635H7.15494L10.4889 5.83334H1.66666V4.16635H10.4879L7.15494 0.833344H9.51236L13.0895 4.41049Z" 
        fill={color}
      />
    </Svg>
  );
};
