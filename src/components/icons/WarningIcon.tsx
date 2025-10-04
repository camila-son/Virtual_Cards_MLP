import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface WarningIconProps {
  size?: number;
  color?: string;
}

export const WarningIcon: React.FC<WarningIconProps> = ({ 
  size = 20, 
  color = 'rgba(0,0,0,0.64)' 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.9616 12.4998V14.1665H9.29492V12.4998H10.9616Z"
        fill={color}
      />
      <Path
        d="M10.9616 11.6665V5.83317H9.29492V11.6665H10.9616Z"
        fill={color}
      />
      <Path
        d="M10.1283 18.3332C14.7306 18.3332 18.4616 14.6022 18.4616 9.99984C18.4616 5.39746 14.7306 1.6665 10.1283 1.6665C5.52588 1.6665 1.79492 5.39746 1.79492 9.99984C1.79492 14.6022 5.52588 18.3332 10.1283 18.3332ZM10.1283 16.6665C6.44636 16.6665 3.46159 13.6817 3.46159 9.99984C3.46159 6.31794 6.44636 3.33317 10.1283 3.33317C13.8102 3.33317 16.7949 6.31794 16.7949 9.99984C16.7949 13.6817 13.8102 16.6665 10.1283 16.6665Z"
        fill={color}
      />
    </Svg>
  );
};

