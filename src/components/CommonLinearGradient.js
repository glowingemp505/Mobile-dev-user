import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from 'src/utils/styles';

const CommonLinearGradient = ({ style, children, ...props }) => (
  <LinearGradient
    colors={[colors.primary, '#7C3AED']}
    start={{ x: 0, y: 1 }}
    end={{ x: 0, y: 0 }}
    style={style}
    {...props}
  >
    {children}
  </LinearGradient>
);

export default CommonLinearGradient;
